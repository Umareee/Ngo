"use client"
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

  

function MainCarousel() {
  return (
    <Carousel fade className='carousel container-fluid'>
    <Carousel.Item interval={3000} className='carousel-item'>
      <div className="carousel-img">
        <img
          src="/images/carousel-1.jpg"
          alt="First slide"
          
        />
      </div>
      <Carousel.Caption className='carousel-caption'>
        <div className="carousel-text">
          <h1>Empowering Lives through Skills Training</h1>
          <p>
          Our mission is to uplift underserved communities through financial support, education, and skill-building. 
          </p>
          <div className="carousel-btn">
          <Link className="btn btn-custom" href="/volunteer">Get Involved</Link>
            <Link className="btn btn-custom" href="/donate">Donate Now</Link>
            <Link className="btn btn-custom" href="/about">Learn More</Link>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item  className='carousel-item'>
      <div className="carousel-img">
        <img
          src="/images/carousel-2.jpg" 
          alt="Second slide"
        />
      </div>
      <Carousel.Caption>
        <div className="carousel-text">
          <h1>Empowering Lives through Education</h1>
          <p>
          Through our innovative programs, we aim to empower individuals to create sustainable futures for themselves and their families.
          </p>
          <div className="carousel-btn">
          <Link className="btn btn-custom" href="/volunteer">Get Involved</Link>
            <Link className="btn btn-custom" href="/donate">Donate Now</Link>
            <Link className="btn btn-custom" href="/about">Learn More</Link>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  );
}

export default MainCarousel;