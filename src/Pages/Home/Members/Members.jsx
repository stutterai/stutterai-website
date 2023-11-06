import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Members.css";

const Doctors = (props) => {
  const { name, status, img, fb, linkedin } = props.dentist;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <Col md={6} lg={6} xl={4} xs={12} gallery-wrapper text-white>
      <div className="single-feature-box sigle-doctor">
        <div className="doctors-profile" data-aos="fade-down">
          <img src={img} alt="" style={{ width: "110%", height: "110%" }} />
        </div>
        <div className="doctors-info" data-aos="fade-left">
          <h3 className="mb-0">
            <a href=".#">{name}</a>
          </h3>
          <span>{status}</span>
        </div>
        <div className="doctors-social" data-aos="flip-left">
          <a href={fb}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </Col>
  );
};

export default Doctors;
