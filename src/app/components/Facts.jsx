import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHandsHelping, faDollarSign, faDonate } from '@fortawesome/free-solid-svg-icons';

const Facts = () => {
  return (
    <div className="facts" data-parallax="scroll" data-image-src="images/facts.jpg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <FontAwesomeIcon icon={faHome} size="3x" />
              <div className="facts-text">
                <h3 className="facts-plus" data-toggle="counter-up">150+</h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <FontAwesomeIcon icon={faHandsHelping} size="3x" />
              <div className="facts-text">
                <h3 className="facts-plus" data-toggle="counter-up">400+</h3>
                <p>Volunteers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <FontAwesomeIcon icon={faDollarSign} size="3x" />
              <div className="facts-text">
                <h3 className="facts-dollar" data-toggle="counter-up">10,000+</h3>
                <p>Our Goal</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <FontAwesomeIcon icon={faDonate} size="3x" />
              <div className="facts-text">
                <h3 className="facts-dollar" data-toggle="counter-up">5,000+</h3>
                <p>Raised</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
