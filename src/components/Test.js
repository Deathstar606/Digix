import React from "react";
import { motion, useScroll, useTransform  } from "framer-motion";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import AboutUs from "./AboutUs";
import People from "./Team";

const dimentions = "M981 0C981 90 981 106 913 106M885 106C762.6 106 612.667 106 553 106H137C119.667 102.333 84.9999 112.2 84.9999 181C84.9999 249.8 84.9999 429.667 84.9999 511C56.6666 512 0.599944 530 2.99994 594C5.39994 658 62.6666 672 91 671C140.333 656 273.4 635 411 671C583 716 864 679 907 715C941.4 743.8 944 773 941 784C941 807.333 925.6 855.4 864 861" 
//const dimentions = "M837 1C835.4 79.4 797.667 105.667 779 109C628.6 109 197.667 109 1 109V519H807V705L57 689V913"

/* function About() {
    return(
            <>
            <div className="d-flex justify-content-center">
                <h2 className="mb-1 mt-5">About Us</h2>
            </div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm={6} className="section-hero-data mb-1">
                    <div><hr/></div>
                    <p className="d-flex justify-content-center p-2">Certainly! XYZ Inc. is a private limited company founded in 2010 in Khulna, Bangladesh. The company provides high-quality software development services, web design, mobile app development, and digital marketing services to businesses of all sizes. The company’s mission is to help businesses achieve their goals by providing innovative and cost-effective solutions that meet their unique needs. XYZ Inc.'s target market includes small and medium-sized businesses in the United States, Europe, and Asia. </p>
                    </Col>                
                </Row>
            </Container>
            </>                   
    );
}

function People() {
    return (
        <>
        <div className="d-flex justify-content-center">
            <h2 className="mb-1 mt-5">Our Team</h2>
        </div>
        <Container className="p-4">
            <Row className="d-flex justify-content-center">
                <Col sm={6} className="section-hero-data mb-1">
                    <div><hr/></div>
                </Col>                
            </Row>
            <Row className="mb-1 mt-2">
                <Col md={4} className="ml-2">
                    <CardImg src={fard} className="denim"/>
                </Col>
            </Row>
            <Row className="ml-auto">
                <Col xs={6} md={9}></Col>
                <Col xs={3} >
                    <CardImg src={noyo} className="denim"/>
                </Col>
            </Row>
        </Container>
        </>
    )
} */

function Show () {
    const { scrollYProgress } = useScroll();
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", dimentions);
  
    const pathLength = path.getTotalLength();
  
    const pathOffset = useTransform(
      scrollYProgress,
      [1, 0.2],
      [1, pathLength]
    );
  
    return (
      <>
      <div className="about-pos">
        <AboutUs/>
        <People/>
      </div>
  
      <div className="svg-container">
        <svg viewBox="0 0 984 864" fill="none" preserveAspectRatio="xMidYMax meet">
          <motion.path
            d={dimentions}
            stroke="#808080"
            strokeWidth="8"
            opacity={0.4}
            strokeDasharray={pathLength}
            style={{ strokeDashoffset: pathOffset }}
        />
        </svg>
      </div>
      </>
    );
}

export default Show