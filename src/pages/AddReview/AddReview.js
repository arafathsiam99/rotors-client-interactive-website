import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";

const AddReview = () => {
  const { id } = useParams();
  const user = UseAuth();
  const [review, setReview] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://rocky-brushlands-20414.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
  };
  useEffect(() => {
    fetch(`https://rocky-brushlands-20414.herokuapp.com/placereview/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [id]);
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
          defaultValue={user.email}
          className="p-2 m-2"
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
        />
        <input
          className="p-2 m-2"
          {...register("review")}
          placeholder="review"
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="custom-btn" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
