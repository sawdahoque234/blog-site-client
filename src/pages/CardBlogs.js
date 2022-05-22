import React,{useEffect} from 'react';
import 'react-responsive-modal/styles.css';
  import { useSelector, useDispatch } from "react-redux";
  import { getBlogs,setCurrentPage  } from "../redux/features/blogSlice";
import CardBlog from '../components/CardBlog';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
const CardBlogs = () => {
  const { blogs,loading,currentPage, numberOfPages } = useSelector((state) => ({...state.blog}));
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs(currentPage));
  }, [currentPage]);
  
  if (loading) {
    return <Loading/>;
  }
    return (
        <>
        
<div className="container ">

<div className="row mx-2">
  {
    blogs.length === 0 &&(
      <h4>No Blog Available!</h4>
    )
  }
          {
            blogs && blogs?.map((item,index)=><CardBlog key={index} item={item}/>)
          } 
    </div>
     
  </div>
           <Pagination

           setCurrentPage={setCurrentPage}
           numberOfPages={numberOfPages}
           currentPage={currentPage}
           dispatch={dispatch}
           />
 
 </>


    );
};

export default CardBlogs;