import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import dem from "../images/demo.jpg"

function Footer() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    console.log(email, message)
    e.preventDefault();
    axios.post('http://localhost:9000/send-mail', { email, message })
      .then((response) => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email.');
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#333333",
        backgroundImage: `url(${dem})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      <Container style={{ maxWidth: "85%", position: "relative", zIndex: 2, overflow: "hidden" }}>
        <Row style={{height: "100%"}}>
          <Col md={3} xs={12} className="d-flex align-items-center">
            <ul style={{ listStyleType: 'none', fontSize: '24px', display: 'flex', paddingBottom: "10%" }}>
              <li className='mb-4' style={{ marginRight: '20px' }}>
                <FaFacebook color="#f1593a"/>
              </li>
              <li className='mb-4' style={{ marginRight: '20px' }}>
                <FaInstagram color="#f1593a"/>
              </li>
              <li className='mb-4'>
                <FaTwitter color="#f1593a"/>
              </li>
            </ul>
          </Col>
            <Col md={4} xs={12} className="d-flex align-items-center">
                <div style={{ paddingTop: "15%" }}>
                    <div style={{ marginBottom: "20px" }}>
                    <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>PHONE NUMBER</h5>
                    <p style={{ margin: 0 }}>+88 019 3913 3033</p>
                    </div>
                    <div>
                    <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>LOCATION</h5>
                    <p style={{ margin: 0 }}>Road no 1, Nirala.<br/>Khulna</p>
                    </div>
                </div>
            </Col>
            <Col md={5}>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1, type: "tween", ease: "easeIn" }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}>
                <h1 style={{ padding: "10% 0 10% 10%", backgroundColor: "rgba(241, 89, 58, 0.8)", color: "black" }}>
                  Stay in touch
                </h1>
              </motion.div>
              <Form onSubmit={sendEmail} style={{ paddingBottom: "20%", paddingTop: "5%" }}>
                <Form.Group style={{ marginBottom: "15px" }}>
                  <Form.Control
                    style={{
                      borderWidth: "2px",
                      borderColor: "#909090",
                      height: "40px",
                      backgroundColor: "#2c2c2c",
                      color: "white"
                    }}
                    placeholder="Your Mail Address"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group style={{ marginBottom: "15px" }}>
                  <Form.Control
                    as="textarea"
                    style={{
                      borderWidth: "2px",
                      borderColor: "#909090",
                      backgroundColor: "#2c2c2c",
                      color: "white",
                      width: "100%",
                      height: "150px",
                      resize: "none"
                    }}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <div 
                  className='butt'
                  type="submit" 
                  style={{justifyContent: "flex-end", float: "right" }}>
                  Send
                </div>
              </Form>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
