import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../hooks/UseAuth";

const AddReview = () => {
  const user = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
  };
  return (
    <div>
      <h1 className="custom-font">Please Give Your Review Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          className="p-2 m-2"
          {...register("name")}
          placeholder="user Name"
        />
        <br />
        <input
          className="p-2 m-2"
          {...register("review")}
          placeholder="review"
        />
        <br />
        <input
          min="0"
          max="5"
          step="any"
          className="p-2 m-2"
          type="number"
          defaultValue="0"
          {...register("rating")}
          placeholder="rating"
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="custom-btn" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
