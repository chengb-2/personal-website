import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiJava,
  SiScala,
  SiTensorflow,
  SiSelenium,
} from "react-icons/si";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Techstack() {
  return (
    <container>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiJava />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiScala />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSelenium />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
          </Col>
        </Row>
      </container>
    </container>
  );
}

export default Techstack;
