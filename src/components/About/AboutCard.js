import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="pink">Poojitha Mathi </span>
            from <span className="pink"> Bloomington, Indiana, USA.</span>
            <br />
            I'm currently pursuing my Master's in Computer Science at Indiana University Bloomington.
            With over 3 years of work experience as a Software Developer, I've contributed to various projects involving the development of web applications. 
            My expertise lies in utilizing technologies such as Java, AngularJs, SQL, and front-end development with Angular. I'm passionate about leveraging my skills and knowledge to create innovative solutions and enhance user experiences.
            <br />
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying different food cuisines
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
{/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "It's never too late to make difference"{" "}
          </p>
          <footer className="blockquote-footer">Poojitha Mathi</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
