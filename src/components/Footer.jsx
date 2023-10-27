import React from 'react'
import '../styles/footer.css'
import img from "../assets/bluelogo.png"
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="f1">
      <div className="d1">
        <img className="u1" alt="User interest" src={img} />
        <div className="n1">
          <div className="t1">CourseWhiz Business</div>
          <div className="t1">Teach on CourseWhiz</div>
          <div className="t1">About us</div>
          <div className="t1">Terms &amp; Privacy Policy</div>
          <div className="t1">Help and Support</div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div className='i1' >
          <div style={{justifyContent:"center", color: "white"}}><FaTwitter/></div>
        </div>
        <div className='i1' >
          <div style={{justifyContent:"center", color: "white"}}><FaInstagram/></div>
        </div>
        <div className='i1' >
          <div style={{justifyContent:"center", color: "white"}}><FaLinkedinIn/></div>
        </div>
        <div className='i1'>
          <div style={{justifyContent:"center", color: "white"}}><FaFacebookF/></div>
        </div>
      </div>
      </div>
      <p className="e1">© 2022 - Coursewhiz By Kryptonyte</p>
    </div>
    </div>
  )
}

export default Footer