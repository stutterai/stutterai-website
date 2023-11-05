import { Container, Row } from "react-bootstrap";
import { FakeFeatures } from "../../FakeData/Features";
import Features from "../../Pages/Home/Features/Features";

const Feature = () => {
  return (
    <section className="feature-wrapper">
      <Container>
        <Row className="g-3">
          <div className="section-title">
            <h1 className="mb-5 mb-sm-dent">What do we provide?</h1>
          </div>
          {FakeFeatures.map((feature) => (
            <Features key={feature.id} feature={feature}></Features>
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

export default Feature;
