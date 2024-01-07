import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import { StaggeredText } from "./TextAnimate";

const AboutUs = () => {
    return(
            <div className="about-dem" id="aboutus">
            <div className="d-flex justify-content-center">
                <h2 className="mb-1 mt-5"><StaggeredText text="About Us"/></h2>
            </div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm={6} className="section-hero-data mb-1">
                    <div><hr/></div>
                    <p className="d-flex justify-content-center p-2">Certainly! XYZ Inc. is a private limited company founded in 2010 in Khulna, Bangladesh. The company provides high-quality software development services, web design, mobile app development, and digital marketing services to businesses of all sizes. The company’s mission is to help businesses achieve their goals by providing innovative and cost-effective solutions that meet their unique needs. XYZ Inc.'s target market includes small and medium-sized businesses in the United States, Europe, and Asia. </p>
                    </Col>                
                </Row>
            </Container>
            </div>                   
    );
}

export default AboutUs