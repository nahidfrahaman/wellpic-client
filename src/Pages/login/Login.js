import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import LoaderSpinner from '../../components/LoaderSpinner';
import { AuthContex } from '../../Context/AuthProvider';


const Login = () => {
  const { register,   handleSubmit,  formState: { errors }, } = useForm();
    const {login,loading, setLoading,user}  = useContext(AuthContex);
    const navigate = useNavigate()


    if(user && loading){
      return <LoaderSpinner></LoaderSpinner>
    }

    const onSubmit = (data) =>{
       login(data.email, data.password)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        toast.success('user login confirm')
        // ...
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message)
        setLoading(false)
      });
      };



    return (
        <div className="w-5/6 lg:w-1/3 mx-auto shadow-lg p-6  rounded-lg bg-white mt-4 mb-4">
        <h2 className="text-2xl text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
  
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email",{ required: 'emial field is required' })}
              className="input input-bordered w-full "
            />{" "}
             {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            <br></br>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              {...register("password", 
              { required: 'password field is required',
              minLength: {
                value: 6,
                message: "password must be 6 characters"
              }
              
            })}
              className="input input-bordered w-full "
            />{" "}
            {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
          </div>
          <p>forgate password?</p>
          {/* loging handle */}
          <input type="Submit" defaultValue='login' className="btn btn-primary w-full mt-5 text-white"/>
          <p className="text-center mt-1">New to wellpic ? <span className="text-primary underline"><Link to='/signup'>create a accoutn</Link></span></p>
          <div className="divider">OR</div>
          {/* google */}
          <div>
          <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
          </div>
        </form>
      </div>
    );
};

export default Login;