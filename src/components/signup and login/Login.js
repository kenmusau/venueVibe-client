import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { ClientContext } from "../../context/ClientContext";
import { AdminContext } from "../../context/AdminContext";
import Swal from "sweetalert2";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

function Login({ userRef }) {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const { setClient } = useContext(ClientContext);
  const { setAdmin } = useContext(AdminContext);

  // const [user, setUser] = useState([])
  // const userRef = useRef(null)

  useEffect(() => {
    console.log(userRef);
  }, [userRef]);
  function handleFormSubmit(formValues) {
    const formData = {
      username: formValues.username,
      password: formValues.password,
    };

    setShowLoader(true);

    if (
      formValues.username === "admin1" &&
      formValues.password === "password"
    ) {
      fetch("https://venuevibe-server.onrender.com/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdmin(data);
          localStorage.setItem("person", JSON.stringify(data));
          userRef.current = data;
          navigate("/dashboard");
        });
    } else {
      fetch("https://venuevibe-server.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("What is wrong with your code");
          }
          return response.json();
        })
        .then((data) => {
          setClient(data);
          userRef.current = data;
          localStorage.setItem("client", JSON.stringify(data));
          navigate("/client");
          Swal.fire('Login Successful!')
          console.log(data);
        })
        .catch((error) => {
          // Handle the error here
          setShowLoader(false);
          Swal.fire({
            icon: "error",
            title: "Unauthorized",
            text: "wrong username or password!",
          });
        });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
  }, [showLoader, navigate]);

  return (
    <div className="login">
      {showLoader && (
        <div className="loader-overlay">
          <PulseLoader
            color={"#262d2d"}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className={`wrapper ${showLoader ? "blur" : ""}`}>
        <div className="venuevibe">
          <h1>
            <span>Venue</span>vibe
          </h1>
        </div>
        <div className="wrapper-div">
          <h2>LOGIN</h2>
          <form
            className="login-inputs"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="input-divs">
              <input
                className="first-input"
                placeholder="username"
                {...register("username")}
              />
              <p style={{ color: "red" }}>{errors.username?.message}</p>
            </div>
            <div className="input-divs">
              <input
                name="password"
                type="password"
                placeholder="password"
                {...register("password")}
                autocomplete="off"
              />
              <p style={{ color: "red" }}>{errors.password?.message}</p>
            </div>
            <button className="login-button" type="submit">
              LOGIN
            </button>
          </form>
          <div className="lower-login">
            <div className="button-and-text">
              <p>
                Don't have an account? <a href="/signup">signup</a>
              </p>
            </div>
          </div>
        </div>
        <img src="https://static.thenounproject.com/png/4556645-200.png" />
      </div>
    </div>
  );
}

export default Login;
