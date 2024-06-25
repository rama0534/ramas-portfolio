import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SWE from "../../Assets/swe.png";
import PreIntro from "./PreIntro";
import Intro from "./Intro";
import "./style.css";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} style={{ paddingBottom: 10 }}>
              <img
                src={SWE}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px", opacity: 0.5 }}
              />
            </Col>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Rama</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <PreIntro />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Intro />
    </section>
  );
}

export default Home;
