import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import doctorfinding from "../../../Images/doctorfinding.c2532ac3.png";
import heroTeeth from "../../../Images/hero-theeth.54c2c4e9.png";
import womanbrush from "../../../Images/woman-brush.c4158ac5.png";
import bgimg from "../../../Images/stutterai-background-img-3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <h1>StutterAI</h1>
              <h2>
                Stuttering Identification Using Machine Learning Approaches
              </h2>
              <p className="mb-xs-5">
                Empowering Speech: Your Journey to Fluent Communication Begins
                Here. Discover Confidence, Overcome Challenges, and Unlock the
                Power of Your Voice with Our Dedicated Stuttering Treatment App.
              </p>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} className="mt-sm-5">
            <img
              src={bgimg}
              alt=""
              className="heroTeeth"
              style={{ position: "relative", top: "-45px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
