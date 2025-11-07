import React, { useState } from 'react';
import { CardImg, Row, Col, Container } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';
import MediaQuery from 'react-responsive';

function RenderLeader({ leader, handleShow }) {

  return (
    <>
      <div id="aboutus" style={{height: "90%", paddingBottom: "50px"}}>
        <div style={{ overflow: "hidden" }}>
            <motion.div
                onClick={() => handleShow(leader)} // Pass the leader as a parameter
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
      </div>
    </>
  );
}

function ShowDescription ({ desp, handleHide }) {  // Fix props destructuring
  return (
    <>
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
                <h2 className="text-center mb-4 text-white">{desp.name}</h2>
                <p className="text-center mb-4 text-white">{desp.designation}</p>
                <h5 className="text-center mb-4 text-white">{desp.description}</h5>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </motion.div>
    </>
  );
}

function Leaders(people) {
  console.log(people.leaders);
  const [modal, setModal] = useState(null);  // Store the selected leader here

  const handleShow = (leader) => setModal(leader);  // Pass the leader object
  const handleHide = () => setModal(null);  // Reset modal state to null

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
                <MediaQuery minWidth={1279}>
                  <Swiper
                    scrollbar={{
                    hide: true,
                    }}
                    modules={[Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={4}
                    className="mySwiper"
                  >
                    {people.leaders.map((leader, index) => (
                      <SwiperSlide key={index}>
                        <RenderLeader leader={leader} handleShow={handleShow} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </MediaQuery>
                <MediaQuery maxWidth={640}>
                  <Swiper
                    scrollbar={{
                    hide: false,
                    }}
                    autoplay={{
                      delay: 3000, // Adjust delay time (in milliseconds) as needed
                      disableOnInteraction: false, // Optional: keeps autoplay running after interactions like swiping
                    }}
                    modules={[Scrollbar, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="mySwiper"
                  >
                    {people.leaders.map((leader, index) => (
                      <SwiperSlide key={index}>
                        <RenderLeader leader={leader} handleShow={handleShow} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </MediaQuery>
              </Row>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Modal for showing leader description */}
      <AnimatePresence>
        {modal && (
          <ShowDescription desp={modal} handleHide={handleHide} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Leaders;
