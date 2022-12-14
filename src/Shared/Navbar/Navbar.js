import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Context/AuthProvider";

const Navbar = () => {
   const {user,  logOut}= useContext(AuthContex)
   const navigate = useNavigate()
  
   const handlelogOut=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
      toast.success("logout succesfully")
      navigate('/login')
      
    }).catch((error) => {
      // An error happened.
    });

   }

   const navbarItem= <>
     <li><Link to="/home">Home</Link></li>
     <li><Link to="/blog">blog</Link></li>
     {
      user?.uid ? <>
      <li><Link to="/myreview">My review </Link></li>
      <li><Link to="/addservices">Add services</Link></li>
      <li><Link onClick={handlelogOut} >logOut</Link></li>
       </>: 
       <li><Link to="/login">login</Link></li>
     }
    </>

  return (
    <div className="navbar bg-primary text-white lg:flex justify-between">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-white "
          >
           {
            navbarItem
           }
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl tracking-wide text-white font-bold ">
          WellPic
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg menu-horizontal p-0  text-white ">
          {
            navbarItem
          }
         
         
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
