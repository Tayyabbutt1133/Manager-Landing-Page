import React from 'react'
import './main.css';
import mainrightimg from '../../assets/images/illustration-intro.svg';


const Main = () => {
  return (
      <div>
          <section>
          <div className="container">
              <div className="even-columns">
                  <div className='even-child1'>
                      <h1 className="fs-primary-heading fw-bold">
                         Bring everyone together to build better products.
                      </h1>
                      <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teams goals in view</p>
                     <button className="buttonMain">Get Started</button>
                  </div>
                  <div>
                      <img src={mainrightimg} alt="" />
                  </div>
              </div>
      </div>
      </section>
    </div>
  )
}

export default Main
