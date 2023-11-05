import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import client from "../../../Images/testi1.png";
import client9 from "../../../Images/MicrosoftTeams-image (9).png";
import client10 from "../../../Images/MicrosoftTeams-image (10).png";
import client11 from "../../../Images/MicrosoftTeams-image (11).png";
import client12 from "../../../Images/MicrosoftTeams-image (12).png";
import "./Testimonial.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="testimonial-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title">
              <h1>Our Domain</h1>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} lg={4} sm={12}>
            <div className="client-box text-center" data-aos="fade-right">
              <div className="client-img">
                <img
                  src={client9}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Col>
          <Col md={6} lg={8} sm={12}>
            <div className="review-item text-start" data-aos="zoom-out">
              <h5>Background</h5>
              <p>
                This study will involve implementing the proposed “StutterAI”
                application which acts as a knowledgebase system that helps the
                user from identifying the core stuttering issue and giving
                personalized treatment. This proposal report describes a
                component aimed at implementing and evaluating predictive models
                that use features to classify people as stuttering or
                non-stuttering and predictive modeling techniques for the
                stuttering likelihood of words and phrases using ML and
                identified key factors that influence speech rate, speaking
                context, and emotional state. The data will be evaluated and
                trained using advanced ML and DL algorithms to develop ML models
                that can accurately identify words and phrases that are likely
                to cause stuttering. Moreover, using likelihood information this
                research gives the potential to advance our understanding of
                treatments and speech therapy exercises.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} lg={4} sm={12}>
            <div className="client-box text-center" data-aos="fade-right">
              <div className="client-img">
                <img
                  src={client10}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Col>
          <Col md={6} lg={8} sm={12}>
            <div className="review-item text-start" data-aos="zoom-out">
              <h5>Research Gap</h5>
              <p>
                The current stuttering diagnosis and treatment process relies on
                manual, time-consuming, and subjective assessments by
                speech-language pathologists. There is a significant need for
                more objective, automated, and real-time methods for diagnosing
                stuttering, which can be achieved through machine learning, deep
                learning, and natural language processing. These technologies
                can enable fine-grained diagnosis at the syllable level and
                offer personalized treatment plans through AI-driven virtual
                assistants. Bridging the gap between current applications and
                user-friendly knowledge base systems can empower individuals to
                self-manage their condition. Advanced machine learning models
                are crucial for understanding stuttering severity and its
                influencing factors, while innovative methods like interactive
                platforms and AI-driven assistance bots can enhance speech
                therapy. Addressing these research gaps is essential to improve
                our understanding of stuttering and enhance the quality of life
                for those affected by this speech disorder.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} lg={4} sm={12}>
            <div className="client-box text-center" data-aos="fade-right">
              <div className="client-img">
                <img
                  src={client11}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Col>
          <Col md={6} lg={8} sm={12}>
            <div className="review-item text-start" data-aos="zoom-out">
              <h5>Research Problem</h5>
              <p>
                The research addresses the challenges of stuttering, a speech
                disorder affecting many individuals globally and impacting their
                lives. Traditional treatments involve costly and time-consuming
                in-person sessions with speech therapists. To improve diagnosis
                and treatment precision, the study explores machine learning
                (ML) and natural language processing (NLP) to distinguish
                stuttering types, even at the syllable level, with the need for
                extensive datasets and feature extraction. Ethical
                considerations are vital. The research also proposes a virtual
                assistant for personalized treatments using transformer
                technology to make therapy more efficient. Overall, this
                research aims to advance stuttering understanding and treatment,
                enhancing the quality of life for those with this speech
                disorder.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} lg={4} sm={12}>
            <div className="client-box text-center" data-aos="fade-right">
              <div className="client-img">
                <img
                  src={client12}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Col>
          <Col md={6} lg={8} sm={12}>
            <div className="review-item text-start" data-aos="zoom-out">
              <h5>Research Objectives</h5>
              <p>
                • Analyze user-generated speech for stuttering severity, types,
                and syllable-level detection.
              </p>
              <p>
                • Develop predictive models using acoustic and linguistic
                features to categorize individuals based on stuttering severity
                and predict stuttering likelihood.
              </p>
              <p>
                • Utilize AI to offer personalized treatments for repetitions
                and prolongations stuttering types through a virtual assistant.
              </p>
              <p>
                • Integrate speech therapy expertise into the application using
                a Large Language Model (LLM) to tailor treatments and provide
                ongoing support for individuals with single-type stuttering.
              </p>
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

export default Testimonial;
