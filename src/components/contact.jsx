import React from 'react'

export const Contact = () => {
  return (
    <React.Fragment>
      <div className="container" id="contact">
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-phone"> Phone</i>
              <h6>+0000000000000000000</h6>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-envelope"> Email</i>
              <h6>example@gmail.com</h6>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-location-dot"> Address</i>
              <h6>Karachi Sindh Pakistan</h6>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: "30px"}}>
          <div className="col-md-4 py-3 py-md-0">
            <input type="text" className="form-control form-control" placeholder="Name" />
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <input type="text" className="form-control form-control" placeholder="Email" />
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <input type="text" className="form-control form-control" placeholder="Phone" />
          </div>
          <div className="form-group" style={{ marginTop: "30px" }}>
            <textarea className="form-control" id="" rows="5" placeholder="Message"></textarea>
          </div>
          <div className="messagebtn text-center"><button>Message</button></div>
        </div>
      </div>

      {/* <!-- newslater --> */}
      <div className="container" id="newslater">
        <h3 className="text-center">Subscribe To The Electronic Shop For Latest upload.</h3>
        <div className="input text-center">
          <input type="text" placeholder="Enter Your Email.." />
          <button id="subscribe">SUBSCRIBE</button>
        </div>
      </div>
      {/* <!-- newslater --> */}
    </React.Fragment>

  )
}