import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {  login } from "../redux/features/authSlice.js";
import { BsFillArrowRightCircleFill} from "react-icons/bs";

const initialState = {
	email: "",
	password: "",
  };
const Login = () => {
	const [formValue, setFormValue] = useState(initialState);
	const { error } = useSelector((state) => ({ ...state.auth }));
	const { email, password } = formValue;
	const dispatch = useDispatch();
	const navigate = useNavigate();
  
	useEffect(() => {
		error && toast.error(error);
	  }, [error]);
	//login
	  const handleSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
		  dispatch(login({ formValue, navigate, toast }));
		}
	  };
	  const onInputChange = (e) => {
		let { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	  };
	 
    return (
        <section className="wrapper">
		<div className="container">
			<div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
				<form  onSubmit={handleSubmit} className="rounded bg-white shadow p-5" style={{paddingTop:'20px'}}>
					<h3 className="text-dark fw-bolder fs-4 m-2">Login</h3>
					<div className="fw-normal text-muted mb-2">
						Doesn't have an account? <Link to="/register" className="text-primary fw-bold text-decoration-none"> Sign Up</Link>
					</div>
					<div className="form-floating mb-3">
						{/* email_input */}
						<input 
						label="Email"
						type="email"
						value={email}
						name="email"
						onChange={onInputChange}
						required placeholder="name@example.com"
						 className="form-control" id="floatingInput" />
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input 
						 label="Password"
						 type="password"
						 value={password}
						 name="password"
						 onChange={onInputChange}
						 required
						className="form-control" id="floatingPassword" placeholder="Password"/>
						<label htmlFor="floatingPassword">Password</label>
					</div> 
					<button type="submit" className="btn btn-primary submit_btn w-100 my-3 rounded-3 ">Login <BsFillArrowRightCircleFill style={{fontSize:'20px'}}/></button> 
				</form>
					
			</div>
		</div>
	</section> 
    );
};

export default Login;