import React from 'react'
import { Footer } from './footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <React.Fragment>
      <div className="container" id="login">
        <div className="row">
          <div className="col-md-5 py-3 py-md-0" id="side1">
            <h3 className="text-center">Register</h3>
          </div>
          <div className="col-md-7 py-3 py-md-0" id="side2">
            <h3 className="text-center">Create Account</h3>
            <div className="input2 text-center">
              <input type="name" placeholder="Name" />
              <input type="name" placeholder="User Name" />
              <input type="number" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <p className="text-center" id="btnlogin"><Link to="/register">SIGN UP</Link></p>
          </div>
        </div>
      </div>
      <div className="container" id="newslater" style={{ marginTop: "100px" }}>
        <h3 className="text-center">Subscribe To The Electronic Shop For Latest upload.</h3>
        <div className="input text-center">
          <input type="text" placeholder="Enter Your Email.." />
          <button id="subscribe">SUBSCRIBE</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Register
