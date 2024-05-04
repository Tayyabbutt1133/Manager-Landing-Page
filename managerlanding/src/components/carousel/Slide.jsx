import React from "react";
import "./slide.css";
import avatar1 from "../../assets/images/avatar-ali.png";

import avatar2 from "../../assets/images/avatar-anisha.png";

import avatar3 from "../../assets/images/avatar-richard.png";

const Slide = () => {
  return (
    <div>
      <section className="slider">
        <h2 className="fs-secondary-heading">What they've said</h2>

        {/* carousel    */}
            <div className="card-wrapper">
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={avatar1} alt="" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">David Bell</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo hic aliquid dolorum officiis id in?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={avatar2} alt="" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">David Bell</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo hic aliquid dolorum officiis id in?
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={avatar3} alt="" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">David Bell</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo hic aliquid dolorum officiis id in?
                  </p>
                </div>
                  </div>
                  <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={avatar3} alt="" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">David Bell</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo hic aliquid dolorum officiis id in?
                  </p>
                </div>
                  </div>
                  <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={avatar3} alt="" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">David Bell</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo hic aliquid dolorum officiis id in?
                  </p>
                </div>
                  </div>
               
            </div>

        <button className="buttonSlide">Get Started</button>
      </section>
    </div>
  );
};

export default Slide;
