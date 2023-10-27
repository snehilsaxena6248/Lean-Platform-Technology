import React from 'react'
import '../styles/account.css'
const Account = () => {
  return (
    <div>
      <div className="frame">
      
      <div className="div-3">
        <p className="p">
          <span className="span">Home / My Profile /</span>
          <span className="text-wrapper-4">&nbsp;</span>
          <span className="text-wrapper-5">Privacy</span>
        </p>
        <div className="div-4">
          <div className="div-5">
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">View Profile</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">Edit Profile</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">Account Security</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">Privacy</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-6">Notifications</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-7">Delete Account</div>
            </div>
          </div>
          <div className="div-6">
            <div className="your-account">Your Account</div>
            <div className="div-7">
              <div className="text-wrapper-8">Close Account</div>
              <p className="text-wrapper-9">Christine, we’re sorry to see you go</p>
              <div className="div-8">
                <div className="div-9">
                  <div className="ellipse-2" />
                  <p className="p">
                    <span className="text-wrapper-4">
                      If you’re leaving because you’re receiving too many emails from us, you can{" "}
                    </span>
                    <span className="text-wrapper-10">change your settings.</span>
                  </p>
                </div>
                <div className="div-9">
                  <div className="ellipse-2" />
                  <p className="text-wrapper-11">
                    Deleting your account will remove all access to your courses, programs and degrees. this icludes
                    your progress on cureent courses, any comments you have made, and any digital statements you have
                    bought.
                  </p>
                </div>
                <div className="div-9">
                  <div className="ellipse-2" />
                  <p className="text-wrapper-12">
                    Deleting your account cannot be undone. There is no way to restore your account.
                  </p>
                </div>
              </div>
              <p className="text-wrapper-13">
                You’ll need to confirm your account deletion request. Please click the button below to request an
                account deletion confirmation email. It will be sent to: textxyz@gmail.com
              </p>
            </div>
          </div>
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

export default Account