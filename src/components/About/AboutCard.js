import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chengyu Bao </span>
            from <span className="purple"> Wuxi, China.</span>
            <br />
            I am a Computer Science grad student at Georgia Institute of
            Technology.
            <br />
            <br />
            I enjoyed the process of building an idea from scratch and I am
            passionate about writing code and solving complex problems. I have
            experience as a Java Backend developer, and I enjoy working
            with all layers of the stack and enjoy building out user friendly,
            efficient websites.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImCheckmark /> Watching Movies
            </li>
            <li className="about-activity">
              <ImCheckmark /> Working Out
            </li>
            <li className="about-activity">
              <ImCheckmark /> Cooking
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "some quote!"
          </p>
          <footer className="blockquote-footer">Chengyu</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
