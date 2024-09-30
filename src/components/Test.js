import React from "react";
import { motion, useScroll, useTransform  } from "framer-motion";
import AboutUs from "./AboutUs";

const dimentions = "M1.01803 0V435.826C0.434679 456.536 13.7935 497.956 71.8956 497.956C129.998 497.956 139.856 456.536 137.523 435.826V364.559C142.773 340.498 167.974 292.561 226.776 293.292C285.578 294.022 488.702 293.596 582.914 293.292H756.171C804.881 294.814 902.301 320.702 902.301 412.07C902.301 503.438 902.301 546.99 902.301 557.345C908.134 575.314 928.727 611.252 964.428 611.252C1000.13 611.252 1340.4 611.252 1506.07 611.252C1530.28 610.643 1578.7 621.851 1578.7 671.555C1578.7 721.26 1578.7 857.946 1578.7 920.077C1580.74 933.782 1573.28 961.009 1527.07 960.279C1480.87 959.548 1132.73 955.71 964.428 953.883C943.719 951.446 902.301 962.289 902.301 1025.15C902.301 1088.01 902.301 1115.91 902.301 1122"

    function Show() {
        const { scrollYProgress } = useScroll();
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", dimentions);
    
        const pathLength = path.getTotalLength();
    
        const pathOffset = useTransform(
          scrollYProgress,
          [0.30, 0.10],
          [1, pathLength]
        );
    
        return (
          <div className="show-container">
            <div className="svg-container">
              <svg viewBox="-5 0 1620 1200" fill="none" preserveAspectRatio="xMidYMax meet">
                <motion.path
                  d={dimentions}
                  stroke="#d4d4d4"
                  strokeWidth="10"
                  opacity={0.6}
                  strokeDasharray={pathLength}
                  style={{ strokeDashoffset: pathOffset }}
                />
              </svg>
            </div>
            <div className="about-pos">
              <AboutUs />
            </div>
          </div>
        );
    }    

export default Show