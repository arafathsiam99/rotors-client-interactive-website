import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const MyOrders = () => {
  const [cars, setCars] = useState([]);
  const { user } = UseAuth();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://rocky-brushlands-20414.herokuapp.com/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      })
      .finally(() => setIsLoading(false));
  }, [user?.email, isDeleted]);
  console.log(cars);

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you want to delete this booking?");

    if (confirm) {
      fetch(`https://rocky-brushlands-20414.herokuapp.com/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
            alert("successfully Deleted");
          }
        });
    }
  };
  if (isLoading) {
    return <h1 className="my-5 text-center">Loading..........</h1>;
  }
  return (
    <div className="container">
      <h2>
        <span>Car Booked by </span> {user.displayName}
      </h2>
      <div className="row ">
        {cars.map((single) => (
          <div className="mt-5 col-md-6 col-12">
            <img className="img-fluid" src={single.packageImg} alt="" />
            <h1>{single.packageName}</h1>
            <p>Date:{single.Date}</p>
            <div>
              <p>{single.status}</p>
            </div>
            <button
              onClick={() => handleDelete(single._id)}
              className="custom-btn"
            >
              Cancel
              <i className="far fa-trash-alt ms-2"></i>
            </button>
          </div>
        ))}
        <p>{cars.packageImg}</p>
      </div>
    </div>
  );
};

export default MyOrders;
