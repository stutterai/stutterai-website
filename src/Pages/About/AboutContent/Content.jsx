import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Content.css";

const Content = () => {
  return (
    <section className="about-content-sec">
      <Container>
        <Row>
          <Col md={12} lg={{ order: 2 }} className="text-center">
            <div className="section-title">
              <h1>About Our Stuttering Treatment Chatbot</h1>
            </div>
            <p className="w-50 m-auto content-inner">
              Since 2023, StutterAI has been proud to combine modern
              technologies and high-tech equipment. Dr. John Dae, Micha and his
              team deliver a personalized and comfortable stuttering treatment
              Experience unlike any other traditional speech therapists.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
