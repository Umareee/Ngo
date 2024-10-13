"use client"; // Ensure this is a client component if you're using hooks

import React, { useState } from 'react';

const VolunteerCard = () => {
  const [selectedCause, setSelectedCause] = useState('');

  const handleCauseChange = (e) => {
    setSelectedCause(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="donate">
        <div className="volunteer-img-container">
          <div className="parallax-img" />
          <div className="row align-items-center">
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
                  <select
                      className="form-control styled-select"
                      onChange={handleCauseChange}
                      value={selectedCause}
                      required
                    >
                      <option value="" style={{color:"black"}}>Select a Cause</option>
                      <option value="Other" style={{color:"black"}}>Mentor</option>
                      <option value="Other" style={{color:"black"}}>Teacher</option>
                      <option value="Other" style={{color:"black"}}>Administrative Support</option>
                      <option value="Other" style={{color:"black"}}>Other</option>
                    </select>
                  </div>
                  <div className="control-group">
                    <textarea type='text' className="form-control" placeholder="Why do you want to become a volunteer" required />
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">Become a Volunteer</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="donate-content">
                <div className="section-header">
                  <p>Become A Volunteer</p>
                  <h2>Let’s make a difference in the lives of others</h2>       
                </div>
                <div className="donate-text">
                  <p>
                  At CommuniLearn Foundation, we strongly believe in the power of community participation and the collective effort to make a positive impact on the lives of those in need. We highly value and welcome the involvement of community members like you who are willing to share their time, skills, and resources to bring ease and support to individuals facing challenges. 
                  
                  </p>
                  <li><b> Volunteer as a Mentor : </b>Help train families in life skills, career development, and more.</li>
                    <li><b>Teach Literacy Classes : </b>Become a part of our education mission by teaching language and literacy.</li>
                    <li><b>Administrative Support : </b>Help us organize and plan future programs.</li>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
