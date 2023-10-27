import React from 'react'
import im from '../assets/logo.png'
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "../styles/header.css"

const Header = () => {
  return (
    <div>
      <div className="f">
      <img className="u" alt="User interest" src={im} />
      <div className="n">
        <div className="t">Courses</div>
        <div className="t">Projects</div>
        <div className="t">Pricing</div>
        <div className="t">For Business</div>
        <div className="t">More</div>
        <FaSearch/>
        <FaShoppingCart/>
        
        <div className="div">Sign in</div>
        <div className="div-wrapper">
          <div className="t-2">Start free trial</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header