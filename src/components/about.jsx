import React from 'react'
import { Footer } from './footer';
import { Navbar } from './navbar';
import BackgroundImg from "../assets/images/background.png";

export const About = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="container" id="about">
        <h3>PRODUCT</h3>
        <hr /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit quae modi cumque, dolorum id quaerat repudiandae tenetur facere veritatis inventore nam sequi. Id ipsam, odio rerum doloremque quam natus perferendis saepe est sapiente optio, ab dolore quaerat temporibus quia non, neque mollitia earum? Ab soluta magnam officiis quasi deleniti, tempora in ex vitae praesentium quaerat facere saepe laudantium temporibus nesciunt recusandae voluptas totam, iste nihil amet et. Fugiat iste eaque provident at omnis. Non asperiores rem fuga id vel ipsum libero corporis? Voluptatem, ullam omnis. Assumenda ipsa sunt sit quidem eligendi reiciendis, deleniti voluptatibus, molestias vel, ab ea quam?</p>
        <hr />
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-5 py-3 py-md-0">
            <div className="card">
              <img src={BackgroundImg} alt="" />
            </div>
          </div>
          <div className="col-md-7 py-3 py-md-0">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugit ad impedit libero quis. Ipsam totam accusantium non minima excepturi nemo doloremque, inventore dolores at aperiam voluptates voluptatem maiores odit. Unde dolorum similique facilis veritatis exercitationem excepturi sunt, non at quis deleniti! Mollitia quaerat temporibus reprehenderit neque esse unde minima sed illo, perferendis quidem eum voluptatem ipsam aliquam modi doloremque error. Odit amet veniam necessitatibus quis ad voluptate quidem laudantium, quia vitae quisquam dolorem deleniti temporibus reiciendis, rerum delectus quo cupiditate velit consequuntur neque eum est vero? Perspiciatis architecto provident illo sequi reprehenderit quasi excepturi hic sint perferendis, tempore cupiditate.</p>
            <button>Read More...</button>
          </div>
        </div>
      </div>
      {/* <!-- offer --> */}
      <div className="container" id="offer">
        <div className="row">
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Free Shipping</h3>
            <p>On order over $1000</p>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid fa-rotate-left"></i>
            <h3>Free Returns</h3>
            <p>Within 30 days</p>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid fa-truck"></i>
            <h3>Fast Delivery</h3>
            <p>World Wide</p>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid fa-thumbs-up"></i>
            <h3>Big choice</h3>
            <p>Of products</p>
          </div>
        </div>
      </div>
      {/* <!-- offer --> */}

      {/* <!-- newslater --> */}
      <div className="container" id="newslater">
        <h3 className="text-center">Subscribe To The Electronic Shop For Latest upload.</h3>
        <div className="input text-center">
          <input type="text" placeholder="Enter Your Email.." />
          <button id="subscribe">SUBSCRIBE</button>
        </div>
      </div>
      <Footer />

      <a href="#" className="arrow"><i><img src="./images/arrow.png" alt="" /></i></a>
    </React.Fragment>

  )
}





