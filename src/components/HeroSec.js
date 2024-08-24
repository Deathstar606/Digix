import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { useRef } from "react";
import { useInView } from "framer-motion";
import dem from "../images/demo.mp4"
import "./video.css"
import arrow from "../images/arrow.gif"

const VideoBackground = ({ videoSource, children }) => (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
        <div className="centered-text">
            {children}
        </div>
    </div>
  );

const HeroSec = () => {

    return(
        <VideoBackground videoSource={dem}>
            <h1>Insperation Text</h1> 
            <p>
              Strategic marketing plans.
              Creative designs. Stunning
              videos
            </p>
            <div className="scroll-container">
              <h4>Scroll</h4>
              <img style={{ height: 50, width: 50 }} src={arrow} />
            </div>
        </VideoBackground>
    );
}

export default HeroSec;