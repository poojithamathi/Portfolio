import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/coder.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ABOUT <strong className="pink">MYSELF</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid"  style={{ maxHeight: "450px",borderRadius:"50%"}} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="pink">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="pink">Tools & Platforms</strong> I use
        </h1>
        <Toolstack />
  
      </Container>
    </Container>
  );
}

export default About;
