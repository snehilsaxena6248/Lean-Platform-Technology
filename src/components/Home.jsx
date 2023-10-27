import React from 'react';
import{Link} from "react-router-dom";
import "../styles/home.css"



const Home = () => {



  return (
    <div>
      <div className='fix' >
        <div className='try'>
        <Link to={'/subject'}>SubjectSelection</Link>
        </div>
        <div className='try'>
        <Link to={'/privacy'}>Privacy</Link>
        </div>
        <div className='try'>
        <Link to={'/music'}>Music and Audio</Link>
        </div>
        <div className='try'>
        <Link to={'/account'}>Your Account</Link>
        </div>



      </div>
      
      
    </div>
  )
}

export default Home