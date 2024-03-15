import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Martin Hernandez</h1>
          <p>Train Today, See Results Tomorrow</p>
        </div>
        <div>
          <a href="https://www.facebook.com/MLRPTAEP/">
            <FontAwesomeIcon className="fa-icon" icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/8_martin_?igsh=MTE0bWs2enhkMGlnbQ==">
            <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="fa-icon" icon={faXTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
