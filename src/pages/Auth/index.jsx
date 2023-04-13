import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import Header from "../../components/Home/Header";

const Auth = () => {
  const [loading, setLoading] = useState(false);

  let http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  useEffect(() => {
    setLoading(true);

    // Getting Posts data from API
    // http.get('/api/posts/'+id).then((response) => {
    //   setLoading(false);
    //   setBlog(response?.data?.data);
    // });
  }, []);

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
        <form action="">
            <h3>Sign In</h3>
          <div className="sub-desc">
            <p>If you don't have account register</p>
            <p>
              You can <span> <Link to={'/register'}> Register here !</Link></span>
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-text">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-text" placeholder="Enter your Password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="d-flex justify-content-between my-3">
            <div className="d-flex ">
              <input type="checkbox" className="form-check-input" name="remember_me" />
              <label className="form-check-label px-2">Remember Me</label>
            </div>
            <div className="">
              <div className="form-text">
                 forget password?
              </div> 
            </div>

          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-auth">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="right-side col-md-6">
        <div className="phone">+92 3132898968</div>
        <div className="image">
          <img src="/assets/images/Saly-10.png" alt="" />
        </div>
        <div className="auth-text">
          Sign in to Blogster
        </div>
        {/* <p>Unleash your creativity</p> */}
      </div>
    </div>
  );
};

export default Auth;
