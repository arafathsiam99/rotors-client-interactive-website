import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";

const Booking = () => {
  const { user } = UseAuth();
  const { id } = useParams();
  const [item, setItem] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.packageName = item?.name;
    data.packageImg = item?.img;
    data.status = "Pending";
    console.log(data);

    fetch("http://localhost:8000/placeorders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  useEffect(() => {
    fetch(`http://localhost:8000/placebooking/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  console.log(item);
  return (
    <div className="container">
      <h2>Book This Car</h2>
      <h2>{item.name}</h2>
      <img src={item.img} alt="" />
      <p>{item.description}</p>

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
        <br />
        <input
          className="p-2 m-2"
          {...register("address")}
          placeholder="Address"
        />
        <br />
        <input
          className="p-2 m-2"
          type="Date"
          {...register("Date", { required: true })}
          placeholder="Date"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />

        <input className="custom-btn" type="Submit" />
      </form>
    </div>
  );
};

export default Booking;
