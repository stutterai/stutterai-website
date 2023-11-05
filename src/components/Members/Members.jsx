import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FakeMembers } from "../../FakeData/Members";
import Members from "../../Pages/Home/Members/Members";

const Member = () => {
  return (
    <section className="doctor-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title">
              <h1 className="mb-5 mb-sm-dent">Team</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {FakeMembers.map((dentist) => (
            <Members key={dentist.id} dentist={dentist} />
          ))}
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

export default Member;
