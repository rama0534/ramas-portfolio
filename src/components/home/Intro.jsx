import { Container, Row, Col } from "react-bootstrap";
import ram from "../../Assets/rama.png";
import "./style.css";
import SocialMedia from "./SocialMedial";

function Intro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="theme-color"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              Hello! I'm Rama Nayudu, a{" "}
              <i>
                <b className="theme-color"> Java Full Stack Developer </b>{" "}
              </i>{" "}
              based in Dallas, TX.
              <br />
              <br />
              With over 4 years of hands-on experience in Java/J2EE development,
              I specialize in{" "}
              <i>
                <b className="theme-color">
                  Spring Boot, Selenium, Maven, ReactJs and AWS.
                </b>
              </i>
              <br />
              <br />
              Skilled in building{" "}
              <i>
                <b className="theme-color"> Microservices and RESTful APIs </b>{" "}
              </i>{" "}
              , I thrive in agile environments and enjoy solving complex
              technical challenges. &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={ram} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <SocialMedia />
      </Container>
    </Container>
  );
}

export default Intro;
