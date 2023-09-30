import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiwrite from "../../Assets/Projects/aiwrite.jpg";
import human from "../../Assets/Projects/human.jpg";
import retinal from "../../Assets/Projects/retinal.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={human}
              isBlog={false}
              title="Human Activity Recognition"
              description="This project aims to develop a human activity recognition system using deep learning techniques, specifically the Residual Neural Network (ResNet) architecture. The system can analyze input data, such as sensor readings or video frames, and accurately classify the performed human activities."
              ghLink="https://github.com/SivaPhoenix/human_activity_recognition"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retinal}
              isBlog={false}
              title="Retinal Analysis"
              description="It is a web application for retinal anlaysis. Also can view the percentage of diabetic retinopathy and cataract.Doctor can visible the segmented image in tested file."
              ghLink="https://github.com/SivaPhoenix/awesome-retinal-analysis"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiwrite}
              isBlog={false}
              title="AI Writing Assistant"
              description="This is an advanced and versatile writing assistant designed.It provides grammar and spell check, paraphrasing capabilities,and automatic email generator, making it your go-to tool for flawless and efficient."
              ghLink="https://github.com/SivaPhoenix/AI-writing--assistant"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
