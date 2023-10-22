import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./SignUpForm.css";
import { baseUrl } from "../../utils";
import Swal from "sweetalert2";
import { ClientContext } from "../../context/ClientContext";

import { Link } from "react-router-dom";

function SignUpForm() {
  const { setClient } = useContext(ClientContext);
  const { register, handleSubmit } = useForm();
  const [loading, isLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const onSubmit = (data) => {
    isLoading(true);
    const formData = {
      username: data.username,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      profile_picture: data.profile_picture,
    };
    axios
      .post(`${baseUrl}/clientSignup`, formData)
      .then((res) => {
        isLoading(false);
        setClient(res);
        Swal.fire({
          title: "Success!",
          text: "Your account was successfully created",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
        isLoading(false);
      });
  };

  return (
    <div className="sign-up-container">
      <div className="form-details">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <label htmlFor="username">Username</label>
          <input type="text" {...register("username")} />

          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />

          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />

          {errors.map((err, index) => (
            <p key={index} className="fied-errors">
              {err}.
            </p>
          ))}

          <button className="signup-btn">
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <p className="login-signup-toogle">
          Already on VenueVibe? <Link to="/login">Sign In</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
