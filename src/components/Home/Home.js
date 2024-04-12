import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my_photo.jpeg";
import Type from "./Type";
import LinksPreset from "../GeometricParticles"
function Home() {
  return (
    <div>
       <LinksPreset/>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}     
        <Container className="home-content">   
          <Row>
          </Row>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> POOJITHA MATHI</strong>
              </h1>
             
              <div style={{ padding: 50, textAlign: "left" }}> 
                <Type />
               </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px",borderRadius:"100%",zIndex: 1 }}
              />
     
            </Col>
          </Row>
        
        </Container>
      </Container>  
    </div>

  );
}

export default Home;
