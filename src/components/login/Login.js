import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.username === loggeduser.username &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/Landingpg");
    } else {
      alert("Invalid Credential!");
    }
  };

  return (
    <>
      <>
        <div className="title">
          <h1>Sign In Form</h1>
        </div>
        <div className="container">
          <div className="left"> </div>
          <div className="right">
            <div className="formBox">
              <form onSubmit={handleLogin}>
                <p>Username</p>
                <input
                  type="text"
                  placeholder="Username"
                  autofocus="focus"
                  name="username"
                  value={input.username}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  id="username"
                  required
                  tabIndex={1}
                />
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  id="password"
                  required
                  placeholder="********"
                />
                <button type="submit" className="register">
                  Sign in
                </button>
                <Link to="/register">Not a Member?</Link>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
