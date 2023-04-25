import React from 'react'
import {Link } from "react-router-dom"
import ai from "../../assets/ai.png"
import "./home.css"

const Home = () => {
  return (
    
    <>
      <div className="home">
        <div className="home_text">
        <div className="text"> Let's Build Something amazing with Anon Community </div>
        <div className="btn">
        <button > <Link to="/register"> Register </Link></button>  
        </div>
        </div>
        <div className="home_img">
          <img src={ai} alt="img-"  />
        </div>
      </div>
    </>
  )
}

export default Home