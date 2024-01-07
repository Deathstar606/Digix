import React from "react";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { StaggeredText } from "./TextAnimate";
import fard from "../images/fardin.png"
import noyo from "../images/noyon.png"
import { InfoMod } from "./InfoModal";

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  bottom: 107%;
  left: 10%;
  opacity: 0;
  transition: opacity 0.3s;
`;

function People() {
    return (
      <div>
          <div className="d-flex justify-content-center">
              <h2 className="mb-1 mt-5"><StaggeredText text="Our Team"/></h2>
          </div>
        <MediaQuery minWidth={720}>
          <Container className="p-4">
              <Row className="d-flex justify-content-center">
                  <Col sm={6} className="section-hero-data mb-3">
                      <div><hr/></div>
                  </Col>                
              </Row>
              <Row className="mb-1">
                  <Col md={4} className="d-flex justify-content-center">
                      <Tooltip>
                          <InfoMod img={fard} />
                          <div className="d-flex justify-content-center mt-2">Name</div>
                          <TooltipText className="tooltiptext">Demo Text</TooltipText>
                      </Tooltip>
                  </Col>
                  <Col md={4} className="d-flex justify-content-center mt-4">
                      <Tooltip>
                        <InfoMod img={noyo} />
                          <div className="d-flex justify-content-center mt-2">Name</div>
                          <TooltipText className="tooltiptext">Demo Text</TooltipText>
                      </Tooltip>
                  </Col>
                  <Col md={4} className="d-flex justify-content-center mt-5">
                      <Tooltip>
                        <InfoMod img={fard} />
                          <div className="d-flex justify-content-center mt-2">Name</div>
                          <TooltipText className="tooltiptext">Demo Text</TooltipText>
                      </Tooltip>
                  </Col>
              </Row>
{/*               <Row className="mb-1">
                  <Col md={9} xs={5}></Col>
                  <Col md={3} xs={3}>
                  <Tooltip>
                          <CardImg className='denim' src={noyo} />
                          <div className="d-flex justify-content-center mt-2">Name</div>
                          <TooltipText className="tooltiptext">Demo Text</TooltipText>
                          <TooltipText2 className='tooltiptext'>Demo Text2</TooltipText2>
                      </Tooltip>
                  </Col>
              </Row> */}
          </Container>
        </MediaQuery>
{/*         <MediaQuery maxWidth={719}>
          <Container className="p-4">
              <Row className="d-flex justify-content-center">
                  <Col sm={6} className="section-hero-data mb-3">
                      <div><hr/></div>
                  </Col>                
              </Row>
              <Row className="mb-1">
                  <Col md={1}></Col>
                  <Col md={3} xs={5}>
                      <Tooltip>
                          <CardImg className='denim' src={fard} />
                          <div className="d-flex justify-content-center mt-2">Name</div>
                      </Tooltip>
                  </Col>
                  <Col xs={7} className="mt-4"><div>Designation</div></Col>
              </Row>
              <Row className="mb-1 ml-4">
                  <Col md={9} xs={7}><div className="small-dis mt-4">Designation</div></Col>
                  <Col md={3} xs={3}>
                      <Tooltip>
                          <CardImg className='denim' src={noyo} />
                          <div className="d-flex justify-content-center mt-2">Name</div>
                      </Tooltip>
                  </Col>
              </Row>
          </Container>
        </MediaQuery> */}
      </div>
    );
}

export default People