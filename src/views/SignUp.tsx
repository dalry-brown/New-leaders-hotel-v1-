import React from 'react'
import signUpStyle from "../styles/view-styles/signUp.module.css"
import loginImg from "../assets/loginImg.png"
import google from "../assets/google.png"
import { Link } from 'react-router-dom'
import { KeyboardReturn } from '@mui/icons-material'

const SignUp = () => {
  return (
    <main className={signUpStyle.signUp}>
      <div className={signUpStyle.signUpContainer}>
        <section className={signUpStyle.image}>
          {/* <KeyboardReturn style={{color: 'black'}}/> */}
          <img src={loginImg} alt="Swimming pool" />
        </section>
        <section className={signUpStyle.signUpForm}>
          <h2>We're glad to have you</h2>
          <form action="">
            <fieldset>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id='firstname'
              />
            </fieldset>
            <fieldset>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id='lastname'
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id='email'
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id='password'
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                id='confirmPassword'
              />
            </fieldset>
            <fieldset>
              <label htmlFor="verificationCode">Verification code</label>
              <input
                type="text"
                id='verificationCode'
              />
            </fieldset>
            <fieldset className={signUpStyle.newsletter}>
            <div className={signUpStyle.group}>
              <label className={signUpStyle.switch}>
              {/* <input type="checkbox" checked={isChecked} onChange={onToggle} /> */}
              <input type="checkbox" />
              <span className={`${signUpStyle.slider} ${signUpStyle.round}`}></span>
              </label>
              <label>Subscribe to newsletter</label>
            </div>
            <label className={signUpStyle.verify}>Receive verification code</label>
            </fieldset>
            <div className={signUpStyle.btnContainer}>
              <button className={signUpStyle.sign}>Sign Up</button>
              <h3>or</h3>
              <button className={signUpStyle.google}><img src={google} alt="Google icon" />Sign Up with Google</button>
              <span className={signUpStyle.account}><label htmlFor="">Already have an account?</label><label><Link style={{color: '#3B0908', letterSpacing: '0', padding: 0}} to='/login'>Sign in now</Link></label></span>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default SignUp
