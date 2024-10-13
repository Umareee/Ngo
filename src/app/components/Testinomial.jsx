// components/TestimonialCarousel.js

"use client"

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Company A",
    feedback: "This product has changed our business entirely. Highly recommended!",
    image: "/images/post-1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, Company B",
    feedback: "Absolutely fantastic! Our team's productivity skyrocketed.",
    image: "/images/post-2.jpg",
  },
  {
    name: "Sam Wilson",
    position: "CTO, Company C",
    feedback: "A great solution to our tech problems. Great value for money!",
    image: "/images/post-3.jpg",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="testimonialCarousel">
      <div className="testimonialWrapper">
        <div className="testimonial">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonialImage"
          />
          <p className="feedback">{testimonials[currentIndex].feedback}</p>
          <h3>{testimonials[currentIndex].name}</h3>
          <h4>{testimonials[currentIndex].position}</h4>
        </div>
        <button onClick={prevTestimonial} className="prevBtn">{"<"}</button>
        <button onClick={nextTestimonial} className="nextBtn">{">"}</button>
      </div>
      <div className="indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
