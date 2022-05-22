import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBookReader } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";

import { setLogout } from "../redux/features/authSlice.js";
const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
	const navigate = useNavigate();

  
 
//logout
  const handleLogout = () => {
    dispatch(setLogout());
  };
 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container">
          <p className="navbar-brand fw-bolder text-success" ><FaBookReader/>BlogSIte</p>
          <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" style={{marginLeft:'30px'}}id="navbarSupportedContent">

             
            <ul className="navbar-nav  mb-lg-0 my-2">
              <li className="nav-item">
                <Link className="nav-link fw-bold"  to="/">Blog</Link>
              </li>
              {user?.result?._id && (
                <>
              <li className="nav-item ">
                <Link className="nav-link fw-bold"  to="/dashboard">Dashboard</Link>
              </li>
                </>
              )}
              {/* display username */}
            {user?.result?._id && (
              <>
              <li className="nav-item mx-1">
                <p className="nav-link fw-bold"> {user?.result?.name} </p>
            </li>
              <li className="nav-item mx-1">

            </li>
              </>
                
                )}
          {/* //login & logout functionality start */}
              {
                user?.result?._id?( <li className="nav-item">
                <Link className="nav-link fw-bold " to="#"  onClick={() => handleLogout()}>Logout</Link>
              </li>): (<li className="nav-item">
                <Link className="nav-link fw-bold" to="/login" >Login</Link>
              </li>)
              }
              {/* //login & logout functionality end */}
              
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;