import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../footer/Footer";
import "../../style/form.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    userType: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        formData
      );
      const data = response.data;
      console.log(data); // Get the data from the response

      if (data === "User has already Register...") {
        toast.error(data, { position: "top-center" });
      } else {
        toast.success(data);
      }
    } catch (err) {
      console.error("Error during registration:", err);
    }

    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
      userType: "",
    });

    history("/login");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section className="formContainer">
        <div className="container">
          <div className="Register" data-aos="zoom-in" data-aos-duration="1200">
            <h2 className="text-center my-5">Register yourself on Ride Sharing</h2>
            <form onSubmit={(e) => handleRegister(e)}>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name..."
                  name="fullName"
                  onChange={(event) => {
                    setFormData({ ...formData, fullName: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="username"
                  className="form-control"
                  placeholder="Username..."
                  name="username"
                  onChange={(event) => {
                    setFormData({ ...formData, userName: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                  name="email"
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                  name="password"
                  onChange={(event) => {
                    setFormData({ ...formData, password: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter UserType..."
                  name="userType"
                  onChange={(event) => {
                    setFormData({ ...formData, userType: event.target.value });
                  }}
                />
              </div>

              <Link to="/login">
                <p className="alreadyAccount">Already have Account ?</p>
              </Link>
              <button type="submit" className="btn btn-primary primaryBtn">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
