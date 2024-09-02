import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siva Sriram </span>
            from <span className="purple"> Kallakurichi, Tamil Nadu, India.</span>
            <br /> I am a final year student pursuing an B.Tech (Information Technology) in Sri Ramakrishna Engineering College,Coimbaore.
            <br />
            <br/>
          </p>
          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
            "I trained 4 years to run 9 seconds and people give up when they don't see results in 2 month"{" "}
          </p>
          <footer className="blockquote-footer">Usain Bolt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
