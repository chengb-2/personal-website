import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeAbout() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME{" "}
              <span className="purple"> INTRODUCE </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at
              least learnt something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, and Javascript{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage
                  Processing.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        {/* find me on  */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chengb-2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chengyu-andy-bao-072739192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bcyhy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <br />
              <br />
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeAbout;
