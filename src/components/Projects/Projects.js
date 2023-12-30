import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import absence from "../../Assets/Projects/absence.png";
import buma_approval from "../../Assets/Projects/buma_approval.png";
import klikdiabetes from "../../Assets/Projects/klikdiabetes.png";
import intiwi from "../../Assets/Projects/intiwi.png";
import siap from "../../Assets/Projects/siap.png";

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
              imgPath={klikdiabetes}
              isBlog={false}
              title="Klik Diabetes"
              description="Klikdiabetes build with React Native, a popular framework for building cross-platform mobile applications. The application leverages the capabilities of React Native, Material-UI components, and Firebase services to provide a seamless and feature-rich user experience for individuals managing diabetes. "
              imgst
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={absence}
              isBlog={false}
              title="Absence"
              description="Project Absence build with Flutter, features that include location detection, digital signatures, and the capture of user photos during the attendance process. solution for companies or organizations aiming to automate and simplify attendance processes. this project becomes an indispensable tool for efficient attendance management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buma_approval}
              isBlog={false}
              title="Buma Approval"
              description="Buma Approval application built with Flutter, is designed for the approval process of Material and Purchase Requests within a company. It comes equipped with features such as material approval and purchase request approval. Additionally, the application includes a realtime notification feature to alert users when approvals have been completed."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intiwi}
              isBlog={false}
              title="Intiwi"
              description="Intiwi is developed using Java and is utilized in the production process with key features including barcode scanning and printing. The application is also seamlessly integrated with the company's ERP system."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siap}
              isBlog={false}
              title="SIAP"
              description="SIAP is an integrated application program created using Java to all cargo processing through one system, covering everything from Data Collection, Weight and Volume Processing, Payment and Tracking System."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
