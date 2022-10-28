import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className="social-container">
      <div className="box flex">
        <a
          href="https://www.youtube.com/channel/UCQuXntVS0kxBIVfCnkedUYw"
          target="_blank"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/CancelTheTransmissionUK/"
          target="_blank"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com/cttbanduk"
          target="_blank"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/cancelthetransmissionuk"
          target="_blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.tiktok.com/@cancelthetransmissionuk"
          target="_blank"
          className="tiktok social"
        >
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default SocialFollow;
