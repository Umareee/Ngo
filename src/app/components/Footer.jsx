import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'; 
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Connect With Us</h2>
                            <p><FontAwesomeIcon icon={faEnvelope} /> info@communilearn.com</p>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://freewebsitecode.com"><FontAwesomeIcon icon={faTwitter}/></a>
                                <a className="btn btn-custom" href="https://facebook.com/freewebsitecode"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a className="btn btn-custom" href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a className="btn btn-custom" href="https://freewebsitecode.com"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a className="btn btn-custom" href="https://freewebsitecode.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <Link href="/"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Home</Link>
                            <Link href="/about"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />About Us</Link>
                            <Link href="/programs"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Our Programs</Link>
                            <Link href="/events"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Upcoming Events</Link>
                            {/* <Link href="/blogs"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Latest Blogs</Link> */}
                            <Link href="/donate"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Donate Us</Link>
                            <Link href="/volunteer"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Become a Volunteer</Link>
                            <Link href="/contact"><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 5 }} />Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className=" footer-link">
                        {/* <h2>Image Gallery</h2>
                        <div className="gallery d-flex flex-wrap  justify-content-between">
                            {['https://i.ibb.co/3pwxsBY/blog-1.jpg','https://i.ibb.co/3pwxsBY/blog-1.jpg', 'https://i.ibb.co/3pwxsBY/blog-1.jpg', 'https://i.ibb.co/3pwxsBY/blog-1.jpg', 'https://i.ibb.co/3pwxsBY/blog-1.jpg','https://i.ibb.co/3pwxsBY/blog-1.jpg', 'https://i.ibb.co/3pwxsBY/blog-1.jpg', 'https://i.ibb.co/3pwxsBY/blog-1.jpg', 'https://i.ibb.co/3pwxsBY/blog-1.jpg'].map((src, index) => (
                                <div key={index} className="col-4 gallery-item p-1">
                                    <img src={src} alt={`Gallery Image ${index + 1}`} className="img-fluid" />
                                </div>
                            ))}
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <Link href="https://freewebsitecode.com">CommuniLearn</Link>, All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;