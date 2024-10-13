"use client";
import React from "react";

const AboutParallex = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Parallax Image Container */}
            <div className="about-img-container">
              <div className="parallax-img" ></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-header">
              <p>Learn About Us</p>
              <h2>Worldwide non-profit charity organization</h2>
            </div>
            <div className="about-tab">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="pill" href="#tab-content-1">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="pill" href="#tab-content-2">
                    Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="pill" href="#tab-content-3">
                    Vision
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="tab-content-1" className="container tab-pane active">
                We are a non-profit dedicated to empowering individuals by fulfilling basic needs and providing skill-based education that helps them thrive independently.
                </div>
                <div id="tab-content-2" className="container tab-pane fade">
                A world where every family has the skills and resources to build a secure future, and where education is accessible to all.
                </div>
                <div id="tab-content-3" className="container tab-pane fade">
                We started with a simple belief—that everyone deserves an opportunity to live with dignity and purpose. Our organization was founded to support underserved families through education and skills training.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutParallex;
