"use client"; // To use client-side interactivity with hooks

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChalkboardTeacher, faDollarSign, faBriefcase, faGlobe, faBuilding } from '@fortawesome/free-solid-svg-icons';

const ServiceItem = ({ icon, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-item">
        <div className="service-icon">
          <FontAwesomeIcon icon={icon} size="3x" color='#20212B' />
        </div>
        <div className="service-text">
          <h3>{title}</h3>
<p>{description}</p>
          {/* <p>{isExpanded ? description : `${description.substring(0, 70)}...`}</p>
          <button onClick={handleReadMore} className="btn btn-link">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button> */}
        </div>
      </div>
    </div>
  );
};

const ServiceArea = () => {
  const services = [
    { icon: faUsers, title: "Community Development", description: "We are dedicated to developing programs and services that support strength-based community development. By understanding and addressing the unique needs of local communities, we aim to create sustainable solutions that uplift individuals and improve overall community well-being." },
    { icon: faChalkboardTeacher, title: "Training Programs", description: "We collaborate with subject matter experts to develop comprehensive training programs. These programs are designed to equip local teachers and instructors with the necessary skills and knowledge to deliver high-quality education and skills training within their communities. By investing in the development of educators, we ensure that learning opportunities are accessible to all." },
    { icon: faBuilding, title: "Community Infrastructure", description: "We recognize the importance of a supportive environment for learning and growth. That's why we actively contribute to the development of community infrastructure that fosters healthy activities and mutual learning. By creating spaces that inspire collaboration and exploration, we facilitate a positive and inclusive learning environment for all." },
    { icon: faDollarSign, title: "Socioeconomic Support", description: "We understand that access to resources is essential for individuals and organizations to focus on their learning needs. Through our initiatives, we provide socioeconomic resources that empower learners to pursue their educational goals and become independent. By removing barriers and offering support, we enable individuals to unlock their full potential." },
    { icon: faBriefcase, title: "Business Empowerment", description: "We believe in the power of entrepreneurship and self-employment to drive prosperity. To this end, we promote the development of small businesses and provide resources to enhance their business acumen. By fostering entrepreneurial skills and financial success, we contribute to the growth and economic stability of individuals and communities." },
    { icon: faGlobe, title: "Global Collaboration", description: "We believe that societal balance and quality of life can be enhanced through global cooperation. Through our efforts, we bridge communities worldwide, facilitating the exchange of knowledge and resources. By leveraging the collective wisdom of diverse cultures and regions, we strive to create a more equitable and cost-effective approach to improving lives." },    
  ];

  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p>What We Do?</p>
          <h2>Together, we can transform learners into model global citizens.</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
