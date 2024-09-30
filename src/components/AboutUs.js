import { Row, Col } from "react-bootstrap";
import React from 'react';
import { StaggeredText } from "./TextAnimate";
import { motion } from "framer-motion";
import demo from "../images/demo.jpg"
import { CardImg } from "reactstrap";

const AboutUs = () => {
    return(
                <div style={{maxWidth: "100%", overflow: "hidden"}}>
                    <Row className="m-0 g-0">
                        <Col md={7} className="px-0" /* style={{backgroundColor: "#FFFFFF"}} */>
                            <motion.div
                                className="pb-5"
                                style={{backgroundColor: "black", paddingTop: "5%"}}
                                initial = {{x: -100, opacity: 0}}
                                transition={{duration: 1, type: "tween", ease: "easeIn"}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{ once: true, amount: 0.5 }}>
                                <div style={{marginLeft: "10vw"}}>
                                    <h1 className="m-5 text-white"><StaggeredText text="Brand Goals"/></h1>
                                </div>
                            </motion.div>
                            <div style={{marginLeft: "10vw", paddingBottom: "5%", paddingTop: "5%"}} className="pr-5">
                                <h4 className="ml-5 mt-5">Our Goals</h4>
                                <p className="ml-5 pb-5">
                                    To be the premier one-stop destination for
                                    all digital marketing, design and video
                                    needs. Leveraging cutting-edge strategies
                                    and creativity to elevate brands in the digital
                                    world. Seeing the joy of clients who are able
                                    to connect with more customers and better
                                    tell their brand story.
                                </p>
                            </div>
                        </Col>
                        <Col md={5} className="px-0">
                            <CardImg style={{minHeight: "100%"}} src={demo}/>
                        </Col>
                    </Row>
                    <Row className="m-0 g-0">
                        <Col md={7} className="px-0">
                            <div style={{minHeight: "100%",       
                                            backgroundImage: `url(${demo})`, 
                                            backgroundSize: 'fill', 
                                            backgroundRepeat: 'no-repeat',
                                            backgroundAttachment: "fixed",}}/>
                        </Col>
                        <Col md={5} className="px-0" style={{marginTop: "5%", marginBottom: "5%"}}>
                            <div className="pr-5 ml-5">
                                <h2 className="m-4" style={{color: "#f1593a"}}><StaggeredText text="Our Vision"/></h2>
                                <p className="ml-4">
                                    To be the leaders in full-service digital
                                    transformation, empowering businesses of all sizes
                                    to maximize their potential in an evolving
                                    landscape.
                                </p>
                            </div>
                            <div className="pr-5 ml-5">
                                <h2 className="m-4" style={{color: "#f1593a"}}><StaggeredText text="Our Mission"/></h2>
                                <p className="ml-4">
                                    Through strategic marketing, compelling design
                                    and impactful video content, we aim to uplift
                                    brands and help them thrive. Whether launching a
                                    new venture or taking an established company to
                                    new heights, we use our expertise to successfully
                                    tell clients' stories and foster deeper connections
                                    with their audiences.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>                 
    );
}

export default AboutUs