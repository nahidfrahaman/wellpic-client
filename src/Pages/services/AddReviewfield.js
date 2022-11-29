import React from "react";

const AddReviewfield = () => {
  return (
    <div className="w-1/2 mx-auto">
      <form action="">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Add a review plz type here</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default AddReviewfield;
