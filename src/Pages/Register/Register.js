import React from "react";
import RightLinks from "../Home/Content/RightLinks";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <div className="lg:flex justify-center max-w-[1500px] mx-auto  w-full md:text-left ">
        <div className="lg:w-[60%] border px-10 py-10">
          <div className="flex">
            <Link className="btn-link" to="/">
              Home
            </Link>
            <p> / Register</p>
          </div>
          <div className="h-full">
            <div className="mt-10">
              <Link
                className="text-blue-800
                font-bold border
              border-gray-400  rounded-sm 
                bg-gradient-to-tr 
              from-slate-200 to-gray-200     
                px-3 py-1 w-15"
              >
                Create or Connect your ORCID iD
              </Link>
            </div>
            <form
              className="mt-20 flex flex-col gap-7"
              onSubmit={handleSubmit(onSubmit)}>
              <p className="text-xl font-bold">Profile</p>
              <div className="flex flex-col">
                <label htmlFor="FirstName">First Name*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="text"
                  placeholder="FirstName"
                  {...register("FirstName", { required: true })}
                />
              </div>
              {/*  */}
              <div className="flex flex-col">
                <label htmlFor="Middlename">Middle Name</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="text"
                  placeholder="Middlename"
                  {...register("Middlename", { required: true })}
                />
              </div>
              {/*  */}
              <div className="flex flex-col">
                <label htmlFor="Lastname">Last Name*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="text"
                  placeholder="Lastname"
                  {...register("Lastname", { required: true })}
                />
              </div>
              {/*  */}
              <div className="flex flex-col">
                <label htmlFor="Affiliation">Affiliation*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="text"
                  placeholder="Affiliation"
                  {...register("Affiliation", { required: true })}
                />
              </div>
              {/*  */}
              <div className="flex flex-col "> 
              <label htmlFor="country">Country*</label>
                <select className="w-[50%] bg-blue-100 p-2 rounded-md" {...register("Title", { required: true })}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              {/*  */}
              <p className="text-xl font-bold">Login</p>
              <div className="flex flex-col">
                <label htmlFor="email">Email*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}/>
              </div>
              {/*  */}
              <div className="flex flex-col">
                <label htmlFor="email">Username*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="username"
                  placeholder="username"
                  {...register("username", { required: true })}/>
              </div>
           
              {/*  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Password*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />

              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Repeat Password*</label>
                <input
                  className="w-[50%] bg-blue-100 p-2 rounded-md"
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
              </div>

              <div className="w-[50%] flex justify-center gap-10">
                <Link 
                to='/login'
                className="btn-link">Login</Link>
                <button
                  className="text-blue-800 font-bold border border-gray-400  rounded-sm  bg-gradient-to-tr    from-slate-200 to-gray-200 px-3 py-1 w-15"
                  type="submit" >
                  Register
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

export default Register;
