import React from "react";

import "./navbar.css";

const Navbar = () => {
  const  myFunction =()=> {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="/home" className="active">  Home </a>
        <a >News</a>
        <a >Contact</a>
        <a >About</a>
        <a >Feedback</a>
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
