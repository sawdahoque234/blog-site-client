import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
const CardBlog = (props) => {
    const{ imageFile, content, title, _id,createdAt}=props.item
 
    return (
        <>
<div className=" col-md-5 blog  p-2  rounded-2 mx-auto d-block my-3" 
>
  <img src={imageFile} class="card-img-top p-2 rounded-2" style={{ height:'18rem'}}  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p>Posted on {moment(createdAt).format("MMM Do YY")}</p>
<span className="card-text" >{content?.slice(0,150)}</span>
<span>
<Link to={`/blog/${_id}`} style={{textDecoration:'none'}}>
..Read more
</Link>
</span>
  </div>
</div>
</>

    );
};

export default CardBlog;