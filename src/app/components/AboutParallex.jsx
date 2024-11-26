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
                Communilearn Foundation (CLF) is a non-profit organization dedicated to transforming lives by addressing poverty through education, skills training, and community-based development. We empower underserved individuals to overcome barriers, unlocking their full potential and building self-reliant communities.
                </div>
                <div id="tab-content-2" className="container tab-pane fade">
                To empower communities to tackle local challenges, educate individuals, and elevate livelihoods through practical skills, entrepreneurship, and community-driven solutions.
                </div>
                <div id="tab-content-3" className="container tab-pane fade">
                To create a world where underprivileged communities are empowered and interconnected, fostering self-reliant neighborhoods that drive positive change and sustainable development.
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
