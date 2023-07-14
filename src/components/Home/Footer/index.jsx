import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header(props) {
  const userStr = localStorage.getItem("user");
  const [navClass, setNavClass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(userStr ? true : false);

  return (
    <footer >
      <section class="footer">
        <div class="container">
          <div class="row ">
            <div class="col-3 justify-content-start">
              <h2>Company</h2>
              <ul class="">
                <li>About Us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Social</li>
                <li>Activity</li>
              </ul>
            </div>
            <div class="col-3 justify-content-start">
              <h2>Product</h2>
              <ul>
                <li>Platform</li>
                <li>Pricing</li>
                <li>Solutions</li>
                <li>Plans</li>
              </ul>
            </div>
            <div class="col-3 justify-content-start">
              <h2>Resorces</h2>
              <ul>
                <li>Blog</li>
                <li>Testimonial</li>
                <li>Use cases</li>
                <li>Insights</li>
              </ul>
            </div>
            <div class="col-3 ">
              <div>
                <h1>HASNAIN RIZVI</h1>
              </div>
              <div>
                <p>
                Here’s the source code for creating these styles. 
                </p>
              </div>
              <div>
                
                <input 
                  class="email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-div-2">
          <ul class="d-flex justify-content-center">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>License</li>

          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Header;
