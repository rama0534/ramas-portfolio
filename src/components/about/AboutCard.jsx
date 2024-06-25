import Card from "react-bootstrap/Card";
import "./style.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi buddy, this is <span className="theme-color">Rama</span>.
            <br />
            <br />
            I am passionate about leveraging technology to build innovative
            solutions that solve real-world problems.
            <br />
            <br />
            Beyond my professional pursuits, I find great joy in gardening — a
            hobby that allows me to unwind and cultivate creativity outside of
            coding. Originally from India, I pursued my Masters in Computer
            Science at Southern Arkansas University before settling in Dallas. I
            believe in continuous learning and collaboration, values that drive
            my approach to software engineering.
            <br />
            <br />
            Let's connect and explore how we can create impactful solutions
            together!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
