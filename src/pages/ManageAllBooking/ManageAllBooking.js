import React, { useEffect, useState } from "react";

const ManageAllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("https://rocky-brushlands-20414.herokuapp.com/allbooking")
      .then((res) => res.json())
      .then((data) => setAllBooking(data));
  }, [isDeleted]);

  const handleDeletePackage = (id) => {
    const confirm = window.confirm("Are you want to delete this car?");
    console.log(id);
    if (confirm) {
      fetch(`https://rocky-brushlands-20414.herokuapp.com/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://rocky-brushlands-20414.herokuapp.com/confirmOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsDeleted(!isDeleted);
          alert("confirmed success");
        } else {
          setIsDeleted(false);
        }
      });
  };
  console.log(allBooking);
  return (
    <div>
      <h2>Cars Booked by all customers</h2>
      <div className="row">
        {allBooking.map((single) => (
          <div className="mt-5 col-md-6 col-12">
            <img className="img-fluid" src={single.packageImg} alt="" />
            <h1>{single.packageName}</h1>
            <p className="custom-top">Date:{single.Date}</p>
            <p>{single.status}</p>
            <span>
              <button
                onClick={() => handleConfirm(single._id)}
                className="btn btn-sm btn-success"
              >
                Shipped
              </button>
            </span>
            <button
              onClick={() => handleDeletePackage(single._id)}
              className="custom-btn"
            >
              Delete
              <i className="far fa-trash-alt ms-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllBooking;
