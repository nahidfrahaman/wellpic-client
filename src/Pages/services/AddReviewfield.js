import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContex } from "../../Context/AuthProvider";

const AddReviewfield = ({data}) => {
  const {user}= useContext(AuthContex)
 
  const handleSubmitReview=(event)=>{
    event.preventDefault()
    const fieldData= event.target.review.value
    const nameOfReivewer= user.displayName
    const email = user.email
    const photoURL= user.photoURL
    const nameOfSevice = data.name
    const servicePhoto = data.img
    const serviceId= data._id
    const reviewInformation={
        reviews: fieldData,
        nameOfReivewer: nameOfReivewer,
        email: email,
        photo: photoURL,
        nameOfSevice: nameOfSevice,
        servicePhoto: servicePhoto ,
        serviceId: serviceId,
    }
    console.log(reviewInformation)
     fetch('http://localhost:5000/addreview',{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(reviewInformation)
     })
     .then(res=> res.json())
     .then(data=> {
        if(data.acknowledged){
          toast.success('review added successfuly')
        }
     })
  }

  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmitReview} action="">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Add a review plz type here</span>
          </label>
          <input
            name="review"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <input type="submit" defaultValue="submit" className="btn btn-primary btn-sm mt-4" />
      </form>
    </div>
  );
};

export default AddReviewfield;
