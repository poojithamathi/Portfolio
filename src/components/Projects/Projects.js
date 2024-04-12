import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import safetravels from "../../Assets/Projects/safetravels.png";
import fashiongarments from "../../Assets/Projects/fashiongarments.jpg";
import donationsite from "../../Assets/Projects/donation_site.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safetravels}
              isBlog={false}
              title="Safe Travels"
              description="Safe Travels is a tour management platform that enables users to effortlessly search for flights, hotels, attractions, and restaurants, while also providing seamless booking options for hotels and flights.It is developed using Flask web framework, HMTL, CSS and SqlLite"
              ghLink="https://github.com/poojithamathi/SafeTravels"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashiongarments}
              isBlog={false}
              title="Image Classification of Fashion Garments"
              description="Image Classification of Fashion Garments is a machine learning model developed by leveraging state-of-the-art deep learning architectures such as ResNet, VGGNet, and CNN, which aims to provide accurate predictions while optimizing computational resources and minimizing inference time."
              ghLink="https://github.com/poojithamathi/Image_Classification_Of_FashionGarments"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donationsite}
              isBlog={false}
              title="GoodWill To Give"
              description="Goodwill To Give is a platform for donating used items to support those in need. From clothing and household goods to electronics and furniture, your donations make a meaningful impact on individuals and families in the community. Join us in spreading goodwill and creating positive change today."
              ghLink="https://github.com/poojithamathi/Donate"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
