import React from 'react'
import './diff.css';


const Diff = () => {
  return (
    <div>
      <section>
              <div className="container">
                  <div className="even-columns">
                      <div className='evendiff-child'>
                          <h2 className="fs-secondary-heading fw-bold">
                           What's different about Manage ?   
                          </h2>
                          <p>Manages provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                      </div>
                      <div>
                          <ul className='numbered-items' role='list'>
                              <li>
                                  <h3 className="fs-600 fw-bold"><span>01</span>Track company wide progress</h3>
                                  <p>See how your day-to-day tasks fit into a wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose of bigger picture again.</p>
                              </li>
                              <li>
                                  <h3 className="fs-600 fw-bold"><span>02</span>Advance Built in reports</h3>
                                  <p>Set Internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you built out the reports you need to keep key stakeholders informed</p>
                              </li>
                              <li>
                                  <h3 className="fs-600 fw-bold"><span>03</span>Everything you need in one place</h3>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, iste beatae distinctio consectetur libero.</p>
                              </li>
                          </ul>    
                      </div>
                  </div>
             </div>
      </section>
    </div>
  )
}

export default Diff
