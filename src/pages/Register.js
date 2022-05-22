import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice.js";
import { BsFillArrowRightCircleFill} from "react-icons/bs";


const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
  };
const Register = () => {
const [formValue, setFormValue] = useState(initialState);
  const { error } = useSelector((state) => ({ ...state.auth }));
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password should match");
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
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
				<form onSubmit={handleSubmit} className="rounded bg-white shadow py-4 px-5">
					<h3 className="text-dark fw-bolder fs-4 mb-2">Create an Account</h3>

					<div className="fw-normal text-muted m-2">
						Already have an account?<Link to="/login" className="text-primary fw-bold text-decoration-none"> Login</Link>
					</div>
                    <div className="form-floating mb-3">
						{/* input-firstname */}
                        <input
							type="text"
							value={firstName}
							name="firstName"
							onChange={onInputChange}
							required className="form-control" id="floatingFirstName"
							placeholder="name@example.com"/>
                        <label htmlFor="floatingFirstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
						{/* input-lastname */}
                        <input 
						type="text"
						value={lastName}
						name="lastName"
						onChange={onInputChange}
						required
						className="form-control" id="floatingLastName" placeholder="name@example.com"/>
                        <label htmlFor="floatingLastName">Last Name</label>
                    </div> 
					<div className="form-floating mb-3">
						{/* email-input */}
						<input type="email"
						value={email}
						name="email"
						onChange={onInputChange}
						required
						className="form-control" id="floatingInput" placeholder="name@example.com"/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						{/* password-input */}
						<input type="password"
						 value={password}
						 name="password"
						 onChange={onInputChange}
						 required
						className="form-control" id="floatingPassword" placeholder="Password"/>
						<label htmlFor="floatingPassword">Password</label>
					</div> 
					<div className="form-floating mb-3">
						{/* confirm-pass-input */}
						<input type="password"
						value={confirmPassword}
						name="confirmPassword"
						onChange={onInputChange}
						required
						className="form-control" id="floatingPassword" placeholder="Password"/>
						<label htmlFor="floatingPassword">Confirm Password</label>
					</div> 
					
					
					<button type="submit" className="btn btn-primary submit_btn w-100 my-3 rounded-3 ">Register <BsFillArrowRightCircleFill style={{fontSize:'20px'}}/></button> 
				</form>
			</div>
		</div>
	</section>
    );
};

export default Register;