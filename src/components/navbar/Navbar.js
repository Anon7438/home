
import React, { useState } from "react";

import "./navbar.css"




const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  const chngClass = (event) => {
  
    setIsActive(current => !current);
  };
  return (
    <React.Fragment>
     
      <div className="navbar">
        <div className="logo">
        <img src="https://img.icons8.com/clouds/50/null/anonymous-mask.png" alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>  <a href="/home">Home</a> </li>
            <li>  <a href="www.google.com">About</a>        </li>
            <li>  <a href="www.google.com">Blogs</a>        </li>
            <li>  <a href="www.google.com">Contact</a>      </li>
            <li>  <a href="www.google.com">Feedback</a>     </li>
          </ul>
        </div>
        <div className="btn">
        <img src="https://img.icons8.com/clouds/50/null/anonymous-mask.png" alt="logo"/>
       <label htmlFor="check" className="check">
        <i className={isActive ? 'fa fa-bars' : 'fa fa-xmark'} onClick={chngClass}></i>
       </label>
         
        </div>
        
      </div>
 
    </React.Fragment>
  );
};

export default Navbar;
