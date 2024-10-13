// components/Marquee.js
"use client"

import React, { useState } from "react";

const images = [
  {
    src: "images/causes-1.jpg",
    alt: "Image 1",
    caption: "This is Success Story 1",
    description: "This is a detailed description for success story",
  },
  {
    src: "images/causes-2.jpg",
    alt: "Image 2",
    caption: "This is Success Story 2",
    description: "This is a detailed description for Success Story 2.",
  },
  {
    src: "images/causes-3.jpg",
    alt: "Image 3",
    caption: "This is Success Story 3",
    description: "This is a detailed description for Success Story 3.",
  },
  {
    src: "images/causes-1.jpg",
    alt: "Image 1",
    caption: "This is Success Story 1",
    description: "This is a detailed description for Success Story 1.",
  },
  {
    src: "images/causes-2.jpg",
    alt: "Image 2",
    caption: "This is Success Story 2",
    description: "This is a detailed description for Success Story 2.",
  },
  {
    src: "images/causes-3.jpg",
    alt: "Image 3",
    caption: "This is Success Story 3",
    description: "This is a detailed description for Success Story 3.",
  },
  // Add more images as needed
];

const Marquee = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {/* Heading placed outside the marquee container */}
      <h2 style={{ textAlign: "center", marginBottom: "100px" }}>Success Stories</h2>

      {/* Marquee Container */}
      <div className="marqueeWrapper">
        <h3>Meet some of the individuals and families who have benefited from our programs.</h3>
        <br />
        <div className="marquee">
          <div className="marqueeContent">
            {images.map((image, index) => (
              <div
                className="imageContainer"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index
                onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
                style={{ position: "relative", overflow: "hidden" }} // Ensure child elements are positioned properly
              >
                <img src={image.src} alt={image.alt} className="image" />
                <div className="caption">{image.caption}</div>
                {hoveredIndex === index && ( // Conditionally render the description
                  <div className="description" style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
                    color: "#fff",
                    padding: "10px",
                    transition: "opacity 0.3s",
                    opacity: 1,
                  }}>
                    {image.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
