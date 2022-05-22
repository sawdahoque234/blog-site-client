import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
 <div className="mb-3">
            <img src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1" alt="" />
                
            </div>
            <div>
               <button className='btn btn-primary'> <Link to="/" style={{color:"white",textDecoration:"none"}}>
                        Home
                </Link></button>
            </div>
        </div>
       
            
    );
};

export default NotFound;