import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "reactstrap";
import { StaggeredText } from "./TextAnimate";

const Service = () => {
  // Define the initial and animate states for the path element
  const variants = {
    initial: {
      pathLength: 0,
      pathOffset: 1,
    },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 2,

        ease: "easeInOut",
      },
    },
  };

  // Use the useInView hook to get a ref and an inView value for the SVG tag
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true // The SVG tag is visible when at least 50% of it is in the viewport
  });

  return (
    <>
    <div className="d-flex justify-content-center">
      <h2 className="mb-1 mt-5"><StaggeredText text="Services"/></h2>
    </div>
    <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={6} className="section-hero-data mb-1">
              <div><hr/></div>
          </Col>                
        </Row>
      <Row className="mt-3">
      <Col md={1}></Col>
        <Col md={2} xs={6}>
        <div>
      <motion.svg
      ref={ref} // Pass the ref to the motion.svg component
      viewBox="0 0 573 441" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z"// The d attribute value for the path element
        fill="none"
        stroke="black"
        strokeWidth="10"
        variants={variants} // Pass the variants prop to the motion.path component
        animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
      />
      <motion.path
        d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z"
        fill="none"
        stroke="black"
        strokeWidth="10"
        variants={variants} // Pass the variants prop to the motion.path component
        animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
      />
      <motion.path
        d="M347 267C347 300.738 319.865 328 286.5 328C253.135 328 226 300.738 226 267C226 233.262 253.135 206 286.5 206C319.865 206 347 233.262 347 267Z"
        fill="none"
        stroke="black"
        strokeWidth="10"
        variants={variants} // Pass the variants prop to the motion.path component
        animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
      />
    </motion.svg>
    </div>
        </Col>
        <Col md={3} xs={6}>Description</Col>
        <Col md={2} xs={6}>
        <div>
      <motion.svg
      ref={ref} // Pass the ref to the motion.svg component
      viewBox="0 0 573 441" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z"// The d attribute value for the path element
        fill="none"
        stroke="black"
        strokeWidth="10"
        variants={variants} // Pass the variants prop to the motion.path component
        animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
      />
      <motion.path
        d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z"
        fill="none"
        stroke="black"
        strokeWidth="10"
        variants={variants} // Pass the variants prop to the motion.path component
        animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
      />
      <motion.path
        d="M347 267C347 300.738 319.865 328 286.5 328C253.135 328 226 300.738 226 267C226 233.262 253.135 206 286.5 206C319.865 206 347 233.262 347 267Z"
        fill="none"
        stroke="black"
        strokeWidth="10"
        variants={variants} // Pass the variants prop to the motion.path component
        animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
      />
    </motion.svg>
    </div>
        </Col>
        <Col md={3} xs={6}>Description</Col>
        <Col md={1}></Col>
      </Row>
    </Container>
    </>
  );
};

export default Service;
