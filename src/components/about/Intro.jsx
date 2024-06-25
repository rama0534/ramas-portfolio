import { Row, Col } from "react-bootstrap";
import about from "../../Assets/about.png";
import AboutCard from "./AboutCard";

function Intro() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={6}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <AboutCard />
      </Col>
      <Col
        md={6}
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "20px",
        }}
        className="about-img"
      >
        <img src={about} alt="about" className="img-fluid" />
      </Col>
    </Row>
  );
}

export default Intro;
