/* import React from "react";
import RightLinks from "../Home/Content/RightLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { createUser, updateUserProfile, logOut } = useAuth();

  const onSubmit = (data) => {
    console.log(data)
   
  };

  return (
    <div>
      <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
        <div className="lg:w-[60%] border px-10 py-10">
          <div className="flex">
            <Link className="btn-link" to="/">
              Home
            </Link>
            <p> / Login</p>
          </div>
          <div className="h-full">
            <form
              className="mt-20 flex flex-col gap-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label htmlFor="email">Email*</label>
                <input
                  className="lg:w-[50%] bg-blue-100 p-2 rounded-md"
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="username">Password*</label>
                <input
                  className="lg:w-[50%] bg-blue-100 p-2 rounded-md"
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                <Link className="btn-link">Forget Your Password</Link>

                <div>
                  <input
                    {...register("keepmelogedin", { required: true })}
                    type="radio"
                    value=""
                  />

                  <label className="ms-2 mt-5" htmlFor="keepmelogedin">
                    Keep Me Logged in
                  </label>
                </div>
              </div>

              <div className="w-[50%] flex justify-center gap-10">
                <Link to="/register" className="btn-link">
                  Register
                </Link>

                <button
                  type="submit"
                  className="text-blue-800
                  font-bold border 
                  border-gray-400  
                  rounded-sm 
                  bg-gradient-to-tr 
                  from-slate-200 
                  to-gray-200 px-3 py-1 w-15"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:w-1/3">
          <RightLinks></RightLinks>
        </div>
      </div>
    </div>
  );
};

export default Login;
 */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import RightLinks from "../Home/Content/RightLinks";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const {signInUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data); 
    signInUser(data.email, data.password)
    .then(result =>{
      const user = result.user 
      navigate('/')
      alert('logged in successfully')
      console.log(user);
    })
    
  };

  return (
    <div>
      <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
        <div className="lg:w-[60%] border px-10 py-10">
          <div className="flex">
            <Link className="btn-link" to="/">
              Home
            </Link>
            <p> / Login</p>
          </div>
          <div className="h-full">
            <form
              className="mt-20 flex flex-col gap-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label htmlFor="email">Email*</label>
                <input
                  className="lg:w-[50%] bg-blue-100 p-2 rounded-md"
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password*</label>
                <input
                  className="lg:w-[50%] bg-blue-100 p-2 rounded-md"
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                <Link className="btn-link">Forget Your Password</Link>

                <div>
                  <input {...register("keepmelogedin")} type="radio" value="" />
                  <label className="ms-2 mt-5" htmlFor="keepmelogedin">
                    Keep Me Logged in
                  </label>
                </div>
              </div>

              <div className="w-[50%] flex justify-center gap-10">
                <Link to="/register" className="btn-link">
                  Register
                </Link>
                <button
                  type="submit"
                  className="text-blue-800 font-bold border border-gray-400 rounded-sm bg-gradient-to-tr from-slate-200 to-gray-200 px-3 py-1 w-15"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/3">
          <RightLinks></RightLinks>
        </div>
      </div>
    </div>
  );
};

export default Login;
