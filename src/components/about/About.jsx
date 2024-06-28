import { Container } from "react-bootstrap";
import Intro from "./Intro";
import Technologies from "./Technologies";
import Tools from "./Tools";
import ActivityCalendar from "./ActivityCalendar";
import ParticleComponent from "../ParticleComponent";

function About() {
  const githubUrl =
    "https://github-contributions-api.jogruber.de/v4/rama0534?y=last";
  const leetcodeUrl = "https://leetcode-stats-api.herokuapp.com/rama545";

  return (
    <Container fluid className="about-section">
      <ParticleComponent />
      <Container>
        <Intro />
        <Technologies />
        <Tools />
        <ActivityCalendar title="GitHub" fetchUrl={githubUrl} />
        <ActivityCalendar title="LeetCode" fetchUrl={leetcodeUrl} />
      </Container>
    </Container>
  );
}

export default About;
