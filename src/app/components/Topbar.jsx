
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
    return (
  
              <div className="top-bar d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="top-bar-left">
                  <div className="text">
                    <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color:'#FDBE33' }} /> +123 456 7890</p>
                  </div>
                  <div className="text">
                    <p> <FontAwesomeIcon icon={faEnvelope} style={{ color:'#FDBE33' }} /> info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="top-bar-right">
                  <div className="social">
                    <a href="#">
                    <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    )
  }
  
  export default Topbar
  