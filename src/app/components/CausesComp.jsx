"use client"

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CausesData from '../programs/causes.json';

const CausesCarousel = () => {
  const [causes, setCauses] = useState([]);  
  const [expandedStates, setExpandedStates] = useState({});

  useEffect(() => {
    setCauses(CausesData); 
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const toggleDescription = (index) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Function to check if the title exceeds 10 words
  const isLongTitle = (title) => {
    return title.split(' ').length > 10;
  };

  return (
    <div className="causes">
      <div className="container">
        <div className="section-header text-center">
          <p>Popular Programs</p>
          <h2>Lets know about our programs around the world</h2>
        </div>
        <Slider {...settings}>
          {causes.length > 0 ? (
            causes.map((cause, index) => (
              <div className="causes-item" key={index}>
                <div className="causes-img">
                  <img src={`/images/${cause.image}`} alt={`Cause ${index + 1}`} />
                </div>
                <div className="causes-progress">
                  <div className="progress">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${calculateProgress(cause.raised, cause.goal)}%` }} 
                      aria-valuenow={calculateProgress(cause.raised, cause.goal)} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      <span>{`${calculateProgress(cause.raised, cause.goal).toFixed(0)}%`}</span>
                    </div>
                  </div>
                  <div className="progress-text">
                    <p><strong>Raised:</strong> ${cause.raised}</p>
                    <p><strong>Goal:</strong> ${cause.goal}</p>
                  </div>
                </div>
                <div className="causes-text">
                  <h3 className={isLongTitle(cause.title) ? 'long-title' : ''}>{cause.title}</h3>
                  <p>
                    {expandedStates[index] ? cause.description : `${cause.description.substring(0, 70)}...`}
                  </p>
                </div>
                <div className="causes-btn">
                  <button onClick={() => toggleDescription(index)} className="btn btn-custom">
                    {expandedStates[index] ? 'Read Less' : 'Read More'}
                  </button>
                  <a className="btn btn-custom" href='/donate'>Donate Now</a>
                </div>
              </div>
            ))
          ) : (
            <p>Loading causes...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CausesCarousel;
