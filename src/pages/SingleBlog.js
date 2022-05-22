import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../redux/features/blogSlice";
import Loading from '../components/Loading';
import DisqusThread from '../components/DisqusThread';
const SingleBlog = () => {
    const dispatch = useDispatch();

  const { blog ,loading} = useSelector((state) => ({ ...state.blog }));
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      dispatch(getBlog(id));
    }
  }, [id]);
  if (loading) {
    return <Loading/>;
  }
 
  
    return (
        <>
        <div className="container">
              <div className='container my-2 py-2'>
                  <h1>{blog.title}</h1>
                  <p>{blog.content}</p>
              </div>
              {/* comment form */}
        {/* <div className='container mb-3'>
            <h2>Add a Comment</h2>
            <form action="" style={{border:'1px solid gray'}}  className="p-3 rounded-3">
            <div class="mb-3">
            <input type="name"
            
            class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div class="mb-3">
            <textarea class="form-control"
            placeholder='Write a comment...'
													onChange={(e) => setComment(e.target.value)}
													value={comment}  id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-dark">Submit</button>
            </form>
        </div> */}
        <DisqusThread id={id} title={blog.title} path={`/blog/${id}`}/>
</div>  
        </>
    );
};

export default SingleBlog;