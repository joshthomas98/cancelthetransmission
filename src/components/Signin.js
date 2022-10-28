import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Singing in...");
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="text-center mt-5">
            <img src="../../images/user-icon.jpg" alt="" />
          </div>

          <h3 className="text-center text-light mt-3">Sign in</h3>

          <div className="text-center mt-5">
            <input className="text-light" type="email" placeholder="Email" />
          </div>

          <div className="text-center mt-3">
            <input className="text-light" type="text" placeholder="Password" />
          </div>

          <div className="text-center mt-4">
            <button
              onClick={handleClick}
              className="btn btn-primary text-light"
            >
              Sign in
            </button>
          </div>

          <div className="p-5 text-center text-light">
            <h3>Don’t have a Cancel The Transmission account?</h3>
            <a className="lead" href="customersignup">
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
