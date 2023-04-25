
import React  from "react";

import "./navbar.css"




const Navbar = () => {

  return (
    <React.Fragment>
     
      <div className="navbar">
        <div className="logo">
        <img src="https://img.icons8.com/clouds/50/null/anonymous-mask.png" alt="logo"/>
        </div>
        <div className="nav-items">
              <label htmlFor="check" className="check_btn">                
                  <input type="checkbox" className="checkbox" id="openMenuBar" />
                  
               
               
          <ul>
            <li>  <a href="/home">Home</a> </li>
            <li>  <a href="www.google.com">About</a>        </li>
            <li>  <a href="www.google.com">Blogs</a>        </li>
            <li>  <a href="www.google.com">Contact</a>      </li>
            <li>  <a href="www.google.com">Feedback</a>     </li>
          </ul>
          </label>
        </div>        
      </div>

 
    </React.Fragment>
  );
};

export default Navbar;
