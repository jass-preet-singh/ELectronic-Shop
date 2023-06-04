import React from 'react'
import ArrowImg from "../assets/images/arrow.png";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Electronic Shop</h3>
                <p>
                  Karachi <br />
                  Sindh <br />
                  Pakistan <br />
                </p>
                <strong>Phone:</strong> +000000000000000 <br />
                <strong>Email:</strong> electronicshop@.com <br />
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Usefull Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><a to="#">Services</a></li>
                  <li><a to="#">Terms of service</a></li>
                  <li><a to="#">Privacy policey</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">PS 5</a></li>
                  <li><a href="#">Computer</a></li>
                  <li><a href="#">Gaming Laptop</a></li>
                  <li><a href="#">Mobile Phone</a></li>
                  <li><a href="#">Gaming Gadget</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.</p>

                <div className="socail-links mt-3">
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-skype"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>Electronic Shop</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">SA coding</a>
          </div>
        </div>
      </footer>
      <a href="#" className="arrow"><i><img src={ArrowImg} alt="" /></i></a>
    </div>

  )
}
