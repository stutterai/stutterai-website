import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import donto from "../../../Images/about-banner1.png";
import dontoAnimated from "../../../Images/cleaner.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="about-wrapper">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="about-left">
              <img src={donto} alt="donto" className="img-fluid donto" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                <h1>Welcome to the StutterAI Family</h1>
                <p>
                  Step into a realm of empowered communication with our
                  stuttering treatment app. Guiding you towards confident
                  speech, we're here to support your journey, provide
                  personalized solutions, and celebrate your progress every step
                  of the way.
                </p>
                <a href="/page/about">About Us</a>
              </div>
              <div className="fun-fact-sec" data-aos="fade-right">
                <div className="single-fun">
                  <span>500</span>
                  <span>+</span>
                  <p>Happy Patients</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-right">
                  <span>88</span>
                  <span>+</span>
                  <p>Qualified Doctors</p>
                </div>
                <div className="single-fun" data-aos="fade-left">
                  <span>25</span>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-left">
                  <span>50</span>
                  <span>+</span>
                  <p>Dental Awards</p>
                </div>
                <span className="line"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr
        style={{
          border: "none",
          borderTop: "3px solid blue",
          margin: "10px 0",
        }}
      />
    </section>
  );
};

export default About;
