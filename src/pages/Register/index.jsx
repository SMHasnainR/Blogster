import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Register = () => {
  const [disableButton, setDisableButton] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  let http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    http
    .post("/api/register", formData)
    .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/";
      })
    .catch((err) => {
        console.log(err);
      });
  }

  const inputs = [
    {
      id: 1,
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Name",
      value: formData.name,
      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      value: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
    },
    {
      id: 3,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: formData.password,
      onChange: (e) => setFormData({ ...formData, password: e.target.value }),
    },
    {
      id: 4,
      label: "Confirm Password",
      name: "password_confirmation",
      type: "password",
      placeholder: "Confirm Password",
      value: formData.password_confirmation,
      onChange: (e) => setFormData({ ...formData, password_confirmation: e.target.value }),
    },
  ];
  console.log(formData);
  return (
    <div className="auth-wrapper">
      <div className="left-side col-md-6">
        <div className="logo">
          <Link to="/#" className="logo">
            <span>Blog</span>ster
          </Link>
        </div>

        {/* <div className="form"> */}

        {/* </div> */}
        <form action="" onSubmit={handleSubmit}>
          <h3>Register</h3>
          <div className="sub-desc">
            <p>Already have account register?</p>
            <p>
              You can{" "}
              <span>
                {" "}
                <Link to={"/login"}> Login here !</Link>
              </span>
            </p>
          </div>

          {/* Form inputs */}
          {inputs.map((input) => (
            <div key={input.id} className="form-group">
              <label htmlFor={input.id} className="form-text">
                {input.label}
              </label>
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                className="form-control"
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={input.onChange}
              />
            </div>
          ))}

          <div className="d-flex justify-content-between my-3">
            <div className="d-flex ">
              <input
                type="checkbox"
                className="form-check-input"
                name="remember_me"
              />
              <label className="form-check-label px-2">Remember Me</label>
            </div>
            <div className="">
              <div className="form-text">forget password?</div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-auth" disabled  >
            {/* { disableButton ? 'disabled' : '' } */}
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="right-side col-md-6">
        <div className="phone">+92 3132898968</div>
        <div className="image">
          <img src="/assets/images/Saly-10.png" alt="" />
        </div>
        <div className="auth-text">Sign in to Blogster</div>
        {/* <p>Unleash your creativity</p> */}
      </div>
    </div>
  );
};

export default Register;
