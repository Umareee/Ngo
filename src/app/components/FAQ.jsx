// components/FAQ.js

"use client"
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the mission of CommuniLearn Foundation?",
    answer: "The mission of CommuniLearn Foundation is to empower individuals and communities through quality education, innovative skills training, and necessary resources, ultimately combating poverty and creating a brighter future for all."
  },
  {
    question: "What types of programs does CommuniLearn Foundation offer?",
    answer: "CommuniLearn Foundation offers various programs, including community development, training programs for educators, socioeconomic support, business empowerment initiatives, and global collaboration efforts. Specific initiatives include the Community Tiffin Service, Individual Empowerment Program, and various wellness programs."
  },
  {
    question: "How can I get involved with CommuniLearn Foundation?",
    answer: "You can get involved by volunteering your time, skills, or resources. Opportunities include tutoring, event support, outreach, skill-based volunteering, and fundraising. Interested individuals can fill out a volunteer registration form to indicate their availability and areas of interest."
  },
  {
    question: "How can I donate to support CommuniLearn Foundation's initiatives?",
    answer: "Donations can be made to support the overall operations of the foundation or directed toward specific causes that resonate with you. Your contributions help sustain programs and create a lasting impact on the lives of individuals and communities in need."
  },
  {
    question: "What is the Community Resource Centre (CRC) concept?",
    answer: "The CRC concept harnesses the resources and strengths of local community members to address community needs and create programs that empower individuals. Through online platforms like IdealCommunity.org, CRCs facilitate knowledge sharing and collaboration among communities globally."
  },
  // Add more FAQs dynamically as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqWrapper">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="accordionItem">
            <div
              className="accordionHeader"
              onClick={() => toggleAccordion(index)}
            >
              <h6>{faq.question}</h6>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`accordionBody ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
