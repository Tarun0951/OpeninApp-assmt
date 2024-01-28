import React, { Component } from 'react';
import './signin.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './log.png'; 
import github from './github.png';
import twitter from './twitter.png';
import linkedin from './linkedin-logo.png';
import discord from './discord.png';
import google from './icons8-google-48.png';
import apple from './icons8-apple-100.png';
import App from './App'; // Import your App component

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }

  handleSignIn = (event) => {
    event.preventDefault();
    this.setState({ isSignedIn: true });
  };

  render() {
    const { isSignedIn } = this.state;

    if (isSignedIn) {
      // If signed in, render the App component or any other content you need
      return <App />;
    }

    return (
      <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>
        
        <div className="left-side">
          {/* Your existing content */}
          <img
              src={logo} 
              alt="BASE"
              className="brand-logo"
            />
        </div>
        
   
        
        
        {/* Right-side content */}
        <div className='right-side'>
          <div>
            <h3 style={{fontWeight:'bolder'}}>Sign In</h3>
            <p>Sign in to your account</p>
          </div>
          
          <div className="google-signin">
            {/* Google icon and "Sign in with Google" */}
            <img src={google} alt="Google Icon" />
            <p>Sign in with Google</p>
          </div>
          
          <div className='apple-signin'>
            {/* Apple icon and "Sign in with Apple" */}
            <img src={apple} alt="Apple Icon" />
            <p>Sign in with Apple</p>
          </div>

          {/* Login Form */}
          <div className="login-form">
            <form>
              <label>Email address:</label>
              <input type="email" name="email" required />
              
              <label>Password:</label>
              <input type="password" name="password" required />
              <br></br>

              <div className="forgot-password">
                <a href="#">Forgot password?</a>
                <br></br>
              </div>
              <br></br>
              {/* Use an onClick handler to call handleSignIn when the button is clicked */}
              <button type="button" className="signin-button" onClick={this.handleSignIn}>
                Sign In
              </button>
            </form>

            <div className="register-link">
              <br></br>
              Don't have an account? <a href="#">Register here</a>
            </div>
          </div>
        </div>

        <div className="bottom" style={{ color: 'white' }}>
          <h3 className='brand-name'>BASE</h3>
          <div className="social-icons">
            <img src={github} alt='' />
            <img src={twitter} alt='' />
            <img src={linkedin} alt='' />
            <img src={discord} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
