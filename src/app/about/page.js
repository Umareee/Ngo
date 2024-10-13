import React from 'react'
import AboutParallex from '../components/AboutParallex'
import ServiceArea from '../components/ServicesArea'

const About = () => {
  return (
    <>
    <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>About Us</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </div>
        <AboutParallex/>
        <ServiceArea/>
        </>
  )
}

export default About
