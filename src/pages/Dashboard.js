import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteBlog,  getBlogsByUser } from "../redux/features/blogSlice";
import { toast } from "react-toastify";
import moment from 'moment';
import Loading from "../components/Loading";
import { AiFillDelete} from "react-icons/ai";
const Dashboard = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const { userBlogs, loading } = useSelector((state) => ({ ...state.blog }));
    const userId = user?.result?._id;
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (userId) {
        dispatch(getBlogsByUser(userId));
      }
    }, [userId]);
  
  
    if (loading) {
      return <Loading />;
    }
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this blog ?")) {
          dispatch(deleteBlog({ id, toast }));
        }
      };
    
    return (
        <div>
             <div className="container row-col-1 py-3">
                 <h3 className="text-center text-success py-3"> {user?.result?.name}'s Dashboard</h3>
                 {userBlogs.length === 0 && (
          <h3 className="text-center mb-0" tag="h2">
            You have no post any blog.
          </h3>
        )}
        {/* //map */}
{
    userBlogs.map((item ,index)=>(
        <div className="row m-2 rounded-2 " key={index}>
<div className="col-md-4 border" >
<img  src={item.imageFile} className="card-img-top rounded-3 d-block m-auto" style={{height:"10rem"}} alt="..."/>
</div>
<div className="col-md-5 border" style={{textAlign:"left"}}>
<div className="card-body">
<h5 className="card-title">{item.title}</h5>
<p>Posted on {moment(item.createdAt).format("MMM Do YY")}</p>
<span className="card-text" >{item.content?.slice(0,90)}</span>
<span>
<Link to={`/blog/${item._id}`} style={{textDecoration:'none'}}>
..Read more
</Link>
</span>
<div style={{fontSize:"25px"}}>
<div className="mx-2" onClick={() => handleDelete(item._id)}><AiFillDelete/></div>
</div>
{/* icon */}
</div>
</div>
</div>
    ))
}


</div>
        </div>
    );
};

export default Dashboard;