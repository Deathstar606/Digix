import React, { useState } from 'react';
import { CardImg, Row, Col, Container } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../images/Leaders/asst-chef.jpg";
import img2 from "../images/Leaders/head-chef.jpg";
import img3 from "../images/Leaders/manager.jpg";

function RenderLeader({ leader }) {
  const [modal, setModal] = useState(false);

  const handleShow = () => setModal(true);
  const handleHide = () => setModal(false);

  return (
    <>
      <Col md={3}>
        <div style={{ overflow: "hidden" }}>
            <motion.div
                onClick={handleShow}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                style={{ cursor: 'pointer', position: 'relative' }}
            >
                <CardImg src={leader.image} />
            </motion.div>
        </div>
        <div style={{ backgroundColor: "#000000", color: "#FFFFFF", margin: 0 }}>
            <h2 className='pt-3 pl-2' style={{ margin: 0 }}>
                {leader.name}
            </h2>
            <p className='pb-4 pl-2' style={{ margin: 0 }}>
                {leader.designation}
            </p>
        </div>
      </Col>
      <AnimatePresence>
        {modal && (
          <motion.div
            className='modal-back'
            onClick={handleHide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='d-flex justify-content-center'
              style={{ marginTop: "10vh" }}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
            >
              <Container style={{ position: "absolute" }}>
                <Row className="justify-content-center ml-1 mr-1">
                  <Col md={5} className="p-4">
                    <h2 className="text-center mb-4 text-white">{leader.name}</h2>
                    <p className="text-center mb-4 text-white">{leader.designation}</p>
                    <h5 className="text-center mb-4 text-white">{leader.description}</h5>
                  </Col>
                </Row>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Leaders() {
  const leaders = [
    {
      name: "Assistant Chef",
      designation: "Assistant Chef",
      description: "Responsible for assisting the head chef in daily kitchen operations.",
      image: img1
    },
    {
      name: "Head Chef",
      designation: "Head Chef",
      description: "Leads the kitchen team and oversees all culinary operations.",
      image: img2
    },
    {
      name: "Manager",
      designation: "Manager",
      description: "Ensures smooth operation of the restaurant and manages staff.",
      image: img3
    }
  ];

  return (
    <div className='leader-container'>
      <div className='leader-Img'>
        <div className='pt-4 pb-5' style={{backgroundColor: "#f1593a"}}>
          <div className='text-center'>
            <h1 className='pt-4 row-header' style={{fontSize: "clamp(54px, 4vw, 100px)"}}>Our Team</h1>
            <h5 className='pb-5'>Know About Us</h5>
          </div>
          <Container className="pb-4" style={{maxWidth: "80%"}}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1, type: "tween", ease: "easeIn" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Row className='outer-Img'>
                {leaders.map((leader, index) => (
                  <RenderLeader key={index} leader={leader} />
                ))}
              </Row>
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
