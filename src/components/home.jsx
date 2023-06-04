import React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import BackgroundImg from "../assets/images/background.png";
import p6Img from "../assets/images/p6.png"
import a1Img from "../assets/images/a1.png"
import laptop2Img from "../assets/images/laptop2.png"
import t1Img from "../assets/images/t1.png"
import w1Img from "../assets/images/w1.png"
import pcm1Img from "../assets/images/pcm1.png"
import phone1Img from "../assets/images/phone1.png"
import h1Img from "../assets/images/h1.png"
import c1Img from "../assets/images/c1.png"
import c2Img from "../assets/images/c2.png"
import image1Img from "../assets/images/image1.png"
import pr1Img from "../assets/images/pr1.png"
import pr2Img from "../assets/images/pr2.png"
import pr3Img from "../assets/images/pr3.png"
import pr4Img from "../assets/images/pr4.png"
import c3Img from "../assets/images/c3.png"
import c4Img from "../assets/images/c4.png"
import c5Img from "../assets/images/c5.png"
import pr5Img from "../assets/images/pr5.png"
import pr6Img from "../assets/images/pr6.png"
import pr7Img from "../assets/images/pr7.png"
import pr8Img from "../assets/images/pr8.png"
import pr9Img from "../assets/images/pr9.png"
import pr10Img from "../assets/images/pr10.png"
import pr11Img from "../assets/images/pr11.png"
import pr12Img from "../assets/images/pr12.png"


export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className="home">
        <div className="content">
          <h1> <span>Electronic Products</span>
            <br />
            Up To <span id="span2">50%</span> Off
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
            <br />Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="btn"><button>Shop Now</button></div>

        </div>
        <div className="img">
          <img src={BackgroundImg} alt="" />
        </div>
      </section>

      <div className="container" id="product-cards">
        <h1 className="text-center">PRODUCTS</h1>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={p6Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Iphone 13 pro</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$1000 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={a1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Airpods</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$100 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={laptop2Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Laptop</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$200 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={t1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Ipad</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$300 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={w1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Smart Watch</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$50.60 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pcm1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">PC Moniter</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$600 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={phone1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">iPhone x</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$500 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={h1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Headphone</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$60 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="other-cards">
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={c1Img} alt="" />
              <div className="card-img-overlay">
                <h3>Best Laptop</h3>
                <h5>Latest Collection</h5>
                <p>Up To 50% Off</p>
                <button id="shopnow">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={c2Img} alt="" />
              <div className="card-img-overlay" >
                <h3>Best Headphone</h3>
                <h5>Latest Collection</h5>
                <p>Up To 50% Off</p>
                <button id="shopnow">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="banner">
        <div className="content">
          <h1> <span>Electronic Gadget</span>
            <br />
            Up To <span id="span2">50%</span> Off
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
            <br />Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="btn"><button>Shop Now</button></div>

        </div>
        <div className="img">
          <img src={image1Img} alt="" />
        </div>
      </section>
      <div className="container" id="product-cards">

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr1Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Washion Machine</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$100.50 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr2Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">AC</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$500 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr3Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Microwave Oven</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$200.30 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr4Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Fridge</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$300 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="other">
          <div className="row">
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={c3Img} alt="" />
                <div className="card-img-overlay">
                  <h3>Home Gadget</h3>
                  <p>Latest collection Up To 50% Off</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={c4Img} alt="" />
                <div className="card-img-overlay">
                  <h3>Gaming Gadget</h3>
                  <p>Latest collection Up To 50% Off</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={c5Img} alt="" />
                <div className="card-img-overlay">
                  <h3>Electronic Gadget</h3>
                  <p>Latest collection Up To 50% Off</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr5Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Fan</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$50.60 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr6Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Fridge</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$1500 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr7Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Gaming PC</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>500.60 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr8Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Moniter</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$250 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
        </div>



        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr9Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Smart Watch</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$30.20 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr10Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Power Bank</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$100.50 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr11Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Gaming Mouse</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$30 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={pr12Img} alt="" />
              <div className="card-body">
                <h3 className="text-center">Joysticks</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>$150 <span><li className="fa-solid fa-cart-shopping"></li></span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="container" id="newslater">
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





