import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerSignup = () => {
  const [firstName, setfirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const newuser = { firstName, surname, email, username, password };

    fetch("http://localhost:8000/customer/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newuser),
    }).then(() => {
      navigate("/usercreated");
    });
  };

  return (
    <section>
      <h2 className="text-center text-light mt-4">Create Account</h2>

      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div class="form-row mt-4 ml-5">
                <div class="col-6">
                  <label className="text-light text-left" for="first name">
                    First Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    className="form-control"
                    placeholder="First Name *"
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>

                <div class="col-6">
                  <label className="text-light text-left" for="surname">
                    Surname:
                  </label>
                  <input
                    type="text"
                    required
                    value={surname}
                    className="form-control"
                    placeholder="Surname *"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-row mt-4 ml-5">
                <div class="col-12">
                  <label className="text-light text-left" for="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    className="form-control"
                    placeholder="Email *"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-row mt-4 ml-5">
                <div class="col-6">
                  <label className="text-light text-left" for="username">
                    Username:
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    className="form-control"
                    placeholder="Username *"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div class="col-6">
                  <label className="text-light text-left" for="password">
                    Password:
                  </label>
                  <i class="bi bi-eye-slash" id="togglePassword"></i>
                  <input
                    type="password"
                    required
                    value={password}
                    className="form-control"
                    placeholder="Password *"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>

            <button
              onClick={handleClick}
              type="submit"
              id="submit"
              className="btn btn-primary mt-4 ml-5"
            >
              Sign Up
            </button>
          </div>

          <div className="col text-center mt-5">
            <img src="../../images/new-user.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSignup;
