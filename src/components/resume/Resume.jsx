import React, { useState, useEffect } from "react";
import resume from "../../Assets/Resume.pdf";
import resumedownload from "../../Assets/ResumeDownload.pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import "./style.css";
import ParticleComponent from "../ParticleComponent";

function Resume() {
  const [width, setWidth] = useState(120);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <Container fluid className="resume-section">
        <ParticleComponent />
        <Row className="resume">
          <Document file={resume} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumedownload}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
