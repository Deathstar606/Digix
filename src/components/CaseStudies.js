import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CaseCard = ({ca}) => {
    return (
        <Col md={6} className="py-2">
            <motion.div 
                className="catcard"
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1, type: "tween", ease: "easeIn" }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}>
                <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/home/${ca.id}`}>
                    <div>
                        <CardImg className="catimg" src={ca.image} alt="case image" />
                        <div className="cat-body">
                            <h4 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>{ca.name}</h4>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </Col>
    );
}
 
function Case (casefile) {

    const caseStudies = casefile.casefile.ct.map((c) => {
        return (
            <CaseCard ca={c}/>
        )
    })

    if (casefile) {
        return (
            <Container className="pb-5" style={{minWidth: "95%"}}>
                <h1 className='pt-4 mt-4 pb-1 mb-1 row-header text-center' style={{fontSize: "clamp(54px, 4vw, 100px)", color: "#F1593A"}}>Case Studies</h1>
                <h5 className='pb-3 text-center' style={{color: "#F1593A"}}>Our Creations</h5>
                <Row className="mt-5 justify-content-center text-center">
                    {caseStudies}
                </Row>
            </Container>
        )
    }
}

export default Case;