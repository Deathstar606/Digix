import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { useRef } from "react";
import { useInView } from "framer-motion";
import arrow from "../images/arrow.gif"


function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span className="animeY"
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
          {children}
        </span>
      </section>
    );
  }

const HeroSec = () => {

    return(
        <>
            <Section>
                <div className="jumbotron">
                    <Container style={{minWidth: "93%"}}>
                        <Row className="mt-4">
                            <Col sm={12} md={6} className="section-hero-data">
                                <h1>Insperation Text</h1> 
                                    <p>
                                        Strategic marketing plans.
                                        Creative designs. Stunning
                                        videos
                                    </p>
                                    <div className="d-flex mt-4">
                                        <h4 className="mt-1">Scroll</h4>
                                        <img className="ml-4" style={{height: 50, width:50}} src={arrow}/>   
                                    </div>                                                   
                            </Col>
                        </Row>
{/*                         <Row  className="mt-5">
                            <Col xs={10} md={11}>
                                <div></div>
                            </Col>
                            <Col xs={1} md={1}>
                                <h3 className="sc">Scroll</h3>
                                <img style={{height: 50, width:50}} src={arrow}/>
                            </Col>
                        </Row> */}
                    </Container>
                </div>
            </Section>
        </>
    );
}

export default HeroSec;