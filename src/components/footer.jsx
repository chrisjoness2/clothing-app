import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";



const date = new Date().getFullYear();

function Footer() {
    return (
        <div className='footer'>
              <div>
                <div>
                    <p className="icons"> <FontAwesomeIcon icon={faInstagram} /> </p>
                    <p className="icons"> <FontAwesomeIcon icon={faSquareFacebook} /> </p>
                    <p className="icons"> <FontAwesomeIcon icon={faYoutube} /> </p>
                </div>
                
                <p className="footerCopyright"> Copyright ΌMΟRFΟ {date} </p>


              </div>
        </div>
    )
}

export default Footer;