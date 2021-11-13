import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="mt-5">
      <div className="row custom-bg">
        <div className="col-md-4">
          <img src="https://i.ibb.co/0J7nC15/logo-02-1x.png" alt="" />
          <p className="custom-para">
            Combining offers from several providers you can usually choose from
            wide variety of cars, depending on your preferences and your
            passenger and baggage quantity requirements. We offer both car with
            automatic and manual transmission, some cars are provided with
            satellite navigation and/or air conditioning.
          </p>
          <ul>
            <li>Rental Information</li>
            <li>FAQ</li>
          </ul>
          <input type="text" placeholder="search" />
        </div>
        <div className="col-md-4">
          <h2>Contact Us:</h2>
          <p>
            Main Office Address:Unite 9,Mannor Industrial Estate,Lower Wash
            Lane,Warrington,WA4
          </p>
          <p>
            <i className="fas fa-clock"></i>
            8.00 am-9.30pm
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            Other Office Locations
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            rotorseml@eml.fr
          </p>
          <p>
            <i className="fas fa-phone"></i>
            01987548754857
          </p>
        </div>
        <div className="col-md-4 ">
          <h2>Information</h2>
          <p>
            <i className="fas fa-chevron-right"></i>
            Find a car for rent in the nearest location
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            Cars catalogue
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            FAQ
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            About Us
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            Contacts
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            Help Center
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="custom-bg1">
        Copyright
        <span>
          <i className="far fa-copyright"></i>
        </span>
        2021.Rotors By Arafath Islam Siam
      </div>
    </section>
  );
};

export default Footer;
