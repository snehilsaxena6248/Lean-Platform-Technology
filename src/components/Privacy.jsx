import React from 'react'
import '../styles/privacy.css'
const Privacy = () => {
  return (
    <div>
      <div className="f2">
      <p className="h2">
        <span className="text-wrappe">Home / My Profile /</span>
        <span className="span">&nbsp;</span>
        <span className="text-wrapper-2">Privacy</span>
      </p>
      <div className="div">
        <div className="div-2">
          <div className="div-wrapper">
            <div className="text-wrapper-3">View Profile</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Edit Profile</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Account Security</div>
          </div>
          <div className="div-wrapper-2">
            <div className="text-wrapper-4">Privacy</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Notifications</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Delete Account</div>
          </div>
        </div>
        <div className="div-3">
          <div className="privacy">Privacy</div>
          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="div-7">
                  <div className="text-wrapper-5">Profile</div>
                  <p className="p">Who can see your profile?</p>
                </div>
                <div className="div-8">
                <input type="radio" name='check'/>

                  <div className="text-wrapper-6">Everyone</div>
                </div>
                <div className="div-8">
                <input type="radio" name='check'/>

                  <div className="text-wrapper-6">CourseWhiz users</div>
                </div>
                <div className="div-8">
                <input type="radio" name='check'/>

                  <div className="text-wrapper-6">Only me</div>
                </div>
              </div>
              <div className="div-6">
                <div className="div-7">
                  <div className="text-wrapper-5">Name</div>
                  <p className="p">Who can see your name?</p>
                </div>
                <div className="div-8">
                <input type="radio" name='c'/>

                  <p className="text-wrapper-6">Everyone can see my profile</p>
                </div>
                <div className="div-8">
                <input type="radio" name='c'/>

                  <div className="text-wrapper-6">Only me</div>
                </div>
              </div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-7">Save Changes</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="f5">
      <div className="t5">NEWSLETTER</div>
      <p className="d5">Get new offer’s on your email</p>
      <p className="p5">subscribe to get tips and tactics to grow the way you want.</p>
      <div className="d51">
        <div className="p52">
          <div className="p51">Your Email Address</div>
        </div>
        <div className="d52">
          <div className="t51">Subscribe</div>
        </div>
      </div>
    </div> */}
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

export default Privacy