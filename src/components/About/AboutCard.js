import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kannan K </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />I completed my BCA degree in Sree Saraswathi Thayagaraja College,Pollachi
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Netflix
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Stop Grinding!"{" "}
          </p>
          <footer className="blockquote-footer">Kannan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
