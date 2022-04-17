import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import covid_sim from "../../Assets/Projects/covid_sim.jpg";
import crwn_clothing from "../../Assets/Projects/crwn_clothing.png";
import panorama_stitching from "../../Assets/Projects/panorama_stitching.png";
import toxic_language from "../../Assets/Projects/toxic_language.png";
import tsp from "../../Assets/Projects/tsp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toxic_language}
              isBlog={false}
              title="Toxic Language Detection Model"
              description="Leveraged SBF-GPT based classification model to detect toxic language on social platforms like Twitter, Facebook, and Instagram."
              link="https://github.com/chengb-2/CSE6242-Final-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panorama_stitching}
              isBlog={false}
              title="Panorama Stitching"
              description="Implemented a Panorama Stitching app based on Python. Utilized Harris Corner Detector to extract features and RANSAC to establish geometric correspondences."
              link="https://github.gatech.edu/cbao37/project-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid_sim}
              isBlog={false}
              title="Covid Simulation"
              description="Simulated the spread of COVID-19 in a locked-down city with consideration of the impacts of age, geographic location, mask wearing and public policies."
              link="https://github.com/fishsoup/covidsim"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsp}
              isBlog={false}
              title="Travelling Salesman Problem"
              description="Tackled the Travelling Salesman Problem (TSP) using Simulated Annealing. Performed rigorious analysis compare to other methods like Nearest Neighbour Approximation, Iterative Method, and Branch & Bound."
              link="https://github.com/Lziwen/TSP_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crwn_clothing}
              isBlog={false}
              title="Crown Clothing Web App"
              description="Implemented an e-commerce website based on JavaScript, React.js, and HTML. Styled the front-end using Bootstrap CSS, implemented user registration & authentication using Firebase, handled payments using Stripe API."
              link="https://github.com/chengb-2/crwn-clothing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
