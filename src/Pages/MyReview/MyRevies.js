import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../Context/AuthProvider';

const MyRevies = () => {
   const {user}= useContext(AuthContex)

   const {data:myreviews=[], refetch}= useQuery({
        queryKey: ["/myreviews"],
        queryFn: ()=>{
        return  fetch(`http://localhost:5000/myreviews/${user.email}`)
          .then(res=> res.json())
        }

   })
    const handelreviewDelete=(id)=>{
      console.log(id)
       fetch(`http://localhost:5000/deletereviews/${id}`,{
        method:'DELETE'
       })
       .then(res=> res.json())
       .then(data=> {
        console.log(data)
         if(data.acknowledged){
          toast.success('review delete successfuly')
          refetch()
         }
       })
    }
    
    return (
      <div className='min-h-screen'>
      {myreviews.length >0 ?<div className='min-h-screen'>
      <div>
        <h2 className='text-center text-3xl text-primary'>MY Review List </h2>
      </div>
      <div className="overflow-x-auto">
      <table className="table w-full">
     
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Service Name</th>
            <th>MY reviews</th>
            <th>Edit Reviews</th>
            <th>Delete Reviews</th>
          </tr>
        </thead>
        <tbody>
          {
            myreviews?.map((review,i)=> 
            <tr key={i}>
              <th>{i+1}</th>
              <td>{review.nameOfSevice}</td>
              <td>{review.reviews}</td>
              <td><button className='btn btn-sm btn-warning'>Edit Reviews</button></td>
              <td><button onClick={()=>handelreviewDelete(review._id)} className='btn btn-sm btn-danger'>Delete</button></td>
            </tr>)
          }
          
        </tbody>
      </table>
    </div>
    </div>: <div className='flex justify-center items-center'><h2 className='text-3xl text-primary'>No Review Were Added</h2></div> }</div>
    );
};

export default MyRevies;