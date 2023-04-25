import React from "react";
import { useNavigate } from "react-router-dom";
import ai_army from "../../assets/ai_army.png"
import { Link } from "react-router-dom"

const Landingpg = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/home");
  };
  return (
    <>

<div className="home">
        <div className="home_text">
        <div className="text"> Welcome to your own Anon Community <p className="username_landingpage">Mr {user.username}</p></div>
        <div className="btn">
        <button onClick={handleLogout}> <Link to="/register"> Logout </Link></button>  
        </div>
        </div>
        <div className="home_img">
          <img src={ai_army} alt="img-"  />
        </div>
      </div>

              
     
    </>
  );
};

export default Landingpg;
