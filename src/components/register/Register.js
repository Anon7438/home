import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <div className="title">
        <h1>Sign Up Form</h1>
      </div>
      <div className="container">
        <div className="left"> </div>
        <div className="right">
          <div className="formBox">
            <form onSubmit={handleSubmit}>
              <p>Username</p>
              <input
                type="text"
                placeholder="Username"
                autofocus="focus"
                tabIndex={1}
                name="username"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                id="username"
                required
              />
              <p>Email</p>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                id="email"
                required
                tabIndex={2}
              />
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="******"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                id="password"
                required
                tabIndex={3}
              />
              <button type="submit" className="register" tabIndex={4}>
                Register
              </button>
              <Link to="/login">Already a Member?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

