import '../styles/music.css'
import {FaRegFileAlt, FaArrowRight, FaRegClock, FaStar, FaArrowLeft} from 'react-icons/fa'
import React from "react";
import img from '../assets/2.png'
import img2 from '../assets/3.png'
import img3 from '../assets/4.png'
const Music = () => {


  return (
    <div>
      <div className="frame">
      
      <div className="div-3">
        <p className="p">
          <span className="span">Home / My Profile /</span>
          <span className="text-wrapper-4">&nbsp;</span>
          <span className="text-wrapper-5">My Course</span>
        </p>
        <div className="div-4">
          <div className="div-5">
            <div className="div-wrapper-2">
              <div className="text-wrapper-62"> &#60; Back to Profile </div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-61">Your Lists</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">Design</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">Digital Margeting</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">UI/UX</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-7">Music and Audio</div>
            </div>
          </div>
          <div className="div-6">
            <div className="your-account">Music and Audio</div>
            <div className="div-7">
             <div className="ss1"> <FaRegFileAlt className='ss' /></div>
              <p className="text-wrapper-90">You haven't added any courses to your Wishlist yet</p>
              <p className='text-wrapper-100' >Start learning from over 123000 courses today. You will find a lot of interesting courses.</p>
              <p className="text-wrapper-110">View all courses <FaArrowRight/></p>
            </div>
          </div>
        </div>
        <div style={{display:'inline-flex', marginLeft:'300px', alignItems:'center' }}>
        <div style={{display:'flex',justifyContent:'center', alignItems:'center',height:'40px', width:'40px', borderRadius:'50%', background:'blue'}}><FaArrowLeft style={{color:'white'}}/></div>
        <div class="card">
    <img src={img} alt="Course Image"/>
    <div class="card-content">
    <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title">Development</p>
                
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value">4.5<FaStar style={{color:'orange'}} /> (24)</p>
            </div>
        </div>
        <h3 class="card-title">The Complete Graphic Design Theory for Beginners Course</h3>
        
        <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title"><FaRegFileAlt style={{color:'orange'}}/>24 Lessons</p>
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value"><FaRegClock style={{color:'orange'}}/>30 min</p>
            </div>
        </div>
        <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title">by John Doe</p>
                
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value" style={{fontWeight:'1000'}}>$49.99</p>
            </div>
        </div>
    </div>
</div>
<div class="card">
    <img src={img2} alt="Course Image"/>
    <div class="card-content">
    <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title">Development</p>
                
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value">4.5<FaStar style={{color:'orange'}} /> (24)</p>
            </div>
        </div>
        <h3 class="card-title">The Complete Graphic Design Theory for Beginners Course</h3>
        
        <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title"><FaRegFileAlt style={{color:'orange'}}/>24 Lessons</p>
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value"><FaRegClock style={{color:'orange'}}/>30 min</p>
            </div>
        </div>
        <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title">by John Doe</p>
                
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value" style={{fontWeight:'1000'}}>$49.99</p>
            </div>
        </div>
    </div>
</div>
<div class="card">
    <img src={img3} alt="Course Image"/>
    <div class="card-content">
    <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title">Development</p>
                
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value">4.5<FaStar style={{color:'orange'}} /> (24)</p>
            </div>
        </div>
        <h3 class="card-title">The Complete Graphic Design Theory for Beginners Course</h3>
        
        <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title"><FaRegFileAlt style={{color:'orange'}}/>24 Lessons</p>
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value"><FaRegClock style={{color:'orange'}}/>30 min</p>
            </div>
        </div>
        <div class="card-meta">
            <div class="card-meta-item">
                <p class="card-meta-title">by John Doe</p>
                
            </div>
            <div class="card-meta-item">
                
                <p class="card-meta-value" style={{fontWeight:'1000'}}>$49.99</p>
            </div>
        </div>
    </div>
</div>
<div style={{display:'flex',justifyContent:'center', alignItems:'center',height:'40px', width:'40px', borderRadius:'50%', background:'blue'}}><FaArrowRight style={{color:'white'}}/></div>

</div>


      </div>
      <div className="frame-wrapper">
        <div className="frame-wrapper-2">
          <div className="div-10">
            <div className="text-wrapper-14">NEWSLETTER</div>
            <p className="text-wrapper-15">Get new offer’s on your email</p>
            <p className="text-wrapper-16">subscribe to get tips and tactics to grow the way you want.</p>
            <div className="div-11">
              <div className="placeholder-wrapper">
                <input type='text' placeholder='Your Email Address' className="placeholder"/>
              </div>
              <div className="div-wrapper-4">
                <div className="text-wrapper-17">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Music