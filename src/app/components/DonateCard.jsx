"use client"; // Ensure this is a client component if you're using hooks

import React, { useState } from 'react';
import CausesData from '../programs/causes.json'; // Adjust the path according to your project structure

const DonateCard = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('');

  const handleInputChange = (e) => {
    setDonationAmount(e.target.value); // Update the custom donation state
  };

  const handleCauseChange = (e) => {
    setSelectedCause(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Donating $${donationAmount} to ${selectedCause}`);
  };

  return (
    <div className="container">
      <div className="donate">
        <div className="donate-img-container">
          <div className="parallax-img" />
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="donate-content">
                <div className="section-header">
                  <p>Donate Now</p>
                  <h2>Let's donate for better lives</h2>
                </div>
                <div className="donate-text">
                  <p>
                    Your support can transform lives. By donating, you’re helping to fund education, skill development, and support for families in need.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="donate-form">
                <form onSubmit={handleSubmit}>
                  <div className="control-group">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="control-group mt-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Donation Amount"
                      value={donationAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="control-group mt-2">
                  <select
                      className="form-control styled-select"
                      value={selectedCause}
                      onChange={handleCauseChange}
                      required
                    >
                      <option value="">Select a Cause</option>
                      {CausesData.map((cause) => (
                        <option key={cause.id} value={cause.title} style={{color:"black" , cursor:"pointer"}}>
                          {cause.title}
                          
                        </option>
                      ))}
                      <option value="Other" style={{color:"black" , cursor:"pointer"}}>Other</option> {/* Added "Other" option */}
                    </select>
                  </div>
                  
                                   <div className="btn-group btn-group-toggle">
                    {["10", "20", "50"].map((amount) => (
                      <label
                        key={amount}
                        className={`btn btn-custom ${donationAmount === amount ? 'active' : ''}`}
                      >
                        <input
                          type="radio"
                          name="options"
                          value={amount}
                          onChange={() => setDonationAmount(amount)} // Set selected donation amount
                        />
                        ${amount}
                      </label>
                    ))}
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">Donate Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
