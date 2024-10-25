import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import absence from "../../Assets/Projects/absence.png";
import buma_approval from "../../Assets/Projects/buma_approval.png";
import klikdiabetes from "../../Assets/Projects/klikdiabetes.png";
import intiwi from "../../Assets/Projects/intiwi.png";
import siap from "../../Assets/Projects/siap.png";
import mytravel from "../../Assets/Projects/my_travel.png";
import bumabarcode from "../../Assets/Projects/buma_barcode.png";
import myquran from "../../Assets/Projects/my_quran.png";
import salesreport from "../../Assets/Projects/sales_report.png";

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
              description="KliDiabetes is an innovative mobile application designed to help people manage their diabetes effectively. It combines advanced tracking features, personalized insights, and educational resources to support users in maintaining optimal blood sugar levels and living a healthier life."
              playStoreLink="https://play.google.com/store/apps/details?id=com.kalbe.klikdiabetes&hl=id&gl=US"
              appStoreLink="https://apps.apple.com/id/app/klik-diabetes/id1541593080"
              isPlayStore="true"
              isAppStore="true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesreport}
              isBlog={false}
              title="Sales Report"
              description="Sales Report App is a comprehensive tool designed for businesses and logistics companies to efficiently track and manage their sales and air waybill (AWB) data. This app offers detailed reporting features, allowing users to monitor AWB activity by agents and airlines."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myquran}
              isBlog={false}
              title="My Quran"
              description="My Quran is a powerful and easy-to-use mobile application designed to provide users with a seamless and enriching experience when reading and interacting with the Holy Quran. It includes a full collection of all 114 surahs, detailed surah information, tracking of your last read surah, and bookmarking features to enhance your spiritual journey."
              appGithubLink="https://github.com/inisialkey/my-quran"
              isGithub="true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bumabarcode}
              isBlog={false}
              title="Product Barcode Scanner"
              description="Product Barcode Scanner App is a versatile and powerful solution designed to streamline the entire product lifecycle, from receiving items to sending them to the final destination (site). This app is built for businesses, warehouses, and logistics teams to ensure efficient tracking, inventory management, and seamless operations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buma_approval}
              isBlog={false}
              title="Approval"
              description="Approval App is a powerful and streamlined solution designed to manage and automate the approval process for Material Requests (MR) and Purchase Requests (PR). It simplifies the workflow for reviewing, approving, or rejecting requests, making procurement and material management efficient and transparent for businesses of all sizes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={absence}
              isBlog={false}
              title="Absence"
              description="Absence App is a comprehensive attendance management solution designed to streamline employee check-ins and check-outs, track attendance history, and monitor locations with geofencing capabilities. It provides an efficient way for businesses to manage and monitor employee attendance, ensuring accuracy and transparency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytravel}
              isBlog={false}
              title="My Travel"
              description="My Travel is a mobile exploration app designed to help users discover exciting destinations, and explore the world with ease. Whether you're planning your next adventure or just exploring new travel ideas, My Travel offers all the tools you need to make your journey memorable and hassle-free."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intiwi}
              isBlog={false}
              title="Intiwi"
              description="Intiwi app is a comprehensive solution for product tracking, quality control, and inventory management within factory environments, fully integrated with ERP systems for seamless data synchronization and process automation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siap}
              isBlog={false}
              title="SIAP"
              description="SIAP app is a powerful tool designed to streamline and enhance the handling, tracking, and management of cargo operations in airport environments. This app facilitates efficient processing, and monitoring of cargo shipments, ensuring compliance with aviation regulations and improving overall cargo throughput."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
