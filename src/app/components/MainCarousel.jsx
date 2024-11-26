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
          <h1>Empowering Communities, One Family at a Time</h1>
          <p>
          Join us in transforming lives through education, skills development, and community empowerment.
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
          <h1>Empowering Communities, One Family at a Time</h1>
          <p>
          Join us in transforming lives through education, skills development, and community empowerment.
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