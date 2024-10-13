"use client";
import React, { useState } from "react";
import causesData from "../programs/causes.json"; // Adjust the path if needed

const Programs = () => {
  // State to manage donation progress for each cause
  const [donationProgress, setDonationProgress] = useState(
    causesData.map((cause) => (cause.raised / cause.goal) * 100) // Initialize with actual progress
  );

  // State to manage expanded descriptions for each cause
  const [expandedStates, setExpandedStates] = useState({});

  const handleDonate = (index) => {
    const newProgress = [...donationProgress];
    const donationAmount = 100; // Example fixed donation amount

    // Increase the raised amount for the cause
    const newRaised = causesData[index].raised + donationAmount;
    causesData[index].raised = newRaised;

    // Recalculate the progress percentage
    const newProgressPercentage = (newRaised / causesData[index].goal) * 100;
    newProgress[index] = Math.min(newProgressPercentage, 100); // Ensure it doesn't go beyond 100%

    setDonationProgress(newProgress);
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

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Programs</h2>
            </div>
            <div className="col-12">
              <a href="/">Home</a>
              <a href="#">Programs</a>
            </div>
          </div>
        </div>
      </div>

      {/* Causes Grid */}
      <div className="container">
        <div className="row">
          {causesData.map((cause, index) => (
            <div key={cause.id} className="col-md-4 mb-4">
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
                  <h3>{cause.title}</h3>
                  <p>
                    {expandedStates[index] ? cause.description : `${cause.description.substring(0, 120)}...`}
                  </p>
                </div>
                <div className="causes-btn">
                  <button onClick={() => toggleDescription(index)} className="btn btn-custom">
                    {expandedStates[index] ? 'Read Less' : 'Read More'}
                  </button>
                  <a className="btn btn-custom" href='/donate'>Donate Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
