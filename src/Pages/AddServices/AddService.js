import { async } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddService = () => {
    const { register,   handleSubmit,  formState: { errors }, } = useForm();

    const onSubmit=(data)=>{
      
        const serviceDetails = {
          name: data.name,
          img : data.imgUrl,
          discription: data.discription,
          price: data.price
        }
        fetch('http://localhost:5000/addservice', {
          method:"POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(serviceDetails)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data)
          toast.success('service added successfuly')
        })
    }
    return (
        <div className='min-h-screen mt-8 w-1/2 mx-auto mb-8'>
           <h2 className="text-2xl text-center text-primary font-bold">Wanna To Add Service </h2>
           <p className='text-sm text-secondary text-center'>Plese fillup the form</p>

           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
  
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              {...register("name",{ required: 'this field is requireds' })}
              className="input input-bordered w-full "
            />{" "}
             {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            <br></br>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Imgae url</span>
            </label>
            <input
              type="text"
              {...register("imgUrl",{ required: 'this field is requireds' })}
              className="input input-bordered w-full "
            />{" "}
             {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            <br></br>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              type="price"
              {...register("price",{ required: 'this field is requireds' })}
              className="input input-bordered w-full "
            />{" "}
             {errors.price && <span className="text-red-600 text-sm">{errors.price.message}</span>}
            <br></br>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Discription</span>
            </label>
            <input
              type="text"
              {...register("discription", 
              { required: 'this field is requireds',
              
            })}
              className="input input-bordered w-full "
            />{" "}
            {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
          </div>
          <div className='w-full'>
          <input type="Submit" defaultValue='Summit' className="btn btn-primary w-full mt-5 text-white"/>
          </div>
        </form>
           </div>
        </div>
    );
};

export default AddService;