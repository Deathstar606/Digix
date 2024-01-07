import { useState, useRef } from 'react';
import { useInView } from "framer-motion";
import { CardImg } from "react-bootstrap";
import styled from 'styled-components';

function ModSec({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span className="animeZ"
                style={{
                  transform: isInView ? "none" : "translateY(-100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
          {children}
        </span>
      </section>
    );
  }

const TooltipText2 = styled.span`
  position: absolute;
  left: -35%;
  width: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

export const InfoMod = ({img}) => {
const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div onClick={() => setShowPopup(true)}><CardImg className='denim' src={img} /></div>
      {showPopup ? (
          <ModSec>
            <TooltipText2>
                <h1>Popup content goes here</h1>
                <button onClick={() => setShowPopup(false)}>Close</button>
            </TooltipText2>
          </ModSec>
      ) : null}
    </div>
  );
}
