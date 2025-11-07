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
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div id="services" className="d-flex justify-content-center">
        <h2 className="mt-3 mb-3">
          <StaggeredText text="Our Services" />
        </h2>
      </div>
      <Container style={{ minWidth: "85%" }}>
        <Row className="mt-5 mb-5">
          <Col md={3} xs={12}>
            <div>
              <motion.svg
                style={{ scale: "0.7" }}
                ref={ref} // Pass the ref to the motion.svg component
                viewBox="0 -5 1080 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M859.687 0.00500488C779.041 0.00500488 712.144 64.532 712.144 142.362C712.144 220.173 779.041 284.718 859.687 284.718C940.351 284.718 1007.23 220.172 1007.23 142.362C1007.23 62.636 942.296 0.00500488 859.687 0.00500488Z" // The d attribute value for the path element
                  fill="#DA5359"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M1022.95 284.715H861.643H59.04C27.556 284.715 0 309.388 0 341.662V949.028H5.912H1079.99V339.766C1079.99 309.388 1054.44 284.715 1022.95 284.715Z"
                  fill="#D7DEED"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M600.006 390.999H137.72C116.076 390.999 98.3789 408.093 98.3789 428.957V707.986C98.3789 728.851 116.076 745.944 137.72 745.944H393.463L468.216 865.522L542.95 745.944H601.99C623.615 745.944 641.331 728.85 641.331 707.986V428.957C639.366 408.092 621.65 390.999 600.006 390.999Z"
                  fill="#EF727A"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M442.63 94.902V165.133L344.268 117.681V70.229L442.63 22.776V94.902Z"
                  fill="#414A56"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M196.735 189.808H98.373V0H344.276V70.23V117.682V189.808H196.735Z"
                  fill="#57606F"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M922.625 144.257L832.158 193.605V94.911L922.625 144.257Z"
                  fill="#ECF0F1"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M1080 949.032V1023.05C1080 1053.43 1054.45 1080 1021 1080H59.03C27.566 1080 0.0100098 1055.33 0.0100098 1023.05V949.032H5.92001H1080Z"
                  fill="#57606F"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M922.625 144.257L832.158 193.605V94.911L922.625 144.257Z"
                  fill="#ECF0F1"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M1080 949.032V1023.05C1080 1053.43 1054.45 1080 1021 1080H59.03C27.566 1080 0.0100098 1055.33 0.0100098 1023.05V949.032H5.92001H1080Z"
                  fill="#57606F"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M452.466 558.037L318.692 632.058V485.911L452.466 558.037Z"
                  fill="#ECF0F1"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M983.622 413.776H859.688C845.92 413.776 834.116 402.387 834.116 389.103C834.116 375.818 845.92 364.429 859.688 364.429H983.623C997.39 364.429 1009.17 375.818 1009.17 389.103C1007.23 402.387 997.39 413.776 983.622 413.776Z"
                  fill="#AFB9D2"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M983.622 485.905H859.688C845.92 485.905 834.116 474.516 834.116 461.232C834.116 447.947 845.92 436.558 859.688 436.558H983.623C997.39 436.558 1009.17 447.947 1009.17 461.232C1007.23 474.516 997.39 485.905 983.622 485.905Z"
                  fill="#AFB9D2"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M983.622 556.13H761.308C747.54 556.13 735.755 544.741 735.755 533.352C735.755 520.068 747.54 508.678 761.308 508.678H983.622C997.389 508.678 1009.17 520.067 1009.17 533.352C1007.23 544.741 997.39 556.13 983.622 556.13Z"
                  fill="#AFB9D2"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M983.622 628.261H761.308C747.54 628.261 735.755 616.872 735.755 603.588C735.755 590.303 747.54 578.914 761.308 578.914H983.622C997.389 578.914 1009.17 590.303 1009.17 603.588C1009.18 616.872 997.39 628.261 983.622 628.261Z"
                  fill="#AFB9D2"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M983.622 698.487H761.308C747.54 698.487 735.755 687.098 735.755 673.814C735.755 660.529 747.54 649.14 761.308 649.14H983.622C997.389 649.14 1009.17 660.529 1009.17 673.814C1009.18 687.098 997.39 698.487 983.622 698.487Z"
                  fill="#AFB9D2"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
              </motion.svg>
              <h4 className="text-center mt-3">Video Editing</h4>
              <p className="text-center mt-3">
                Video editing involves cutting, arranging, and enhancing video
                footage to create a cohesive and polished final product.
              </p>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div>
              <motion.svg
                style={{ scale: "0.8" }}
                ref={ref2} // Pass the ref to the motion.svg component
                viewBox="-40 36 603 441"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="orangeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FF5F00" />{" "}
                    {/* Vibrant orange */}
                    <stop offset="100%" stopColor="#FFD700" />{" "}
                    {/* Golden yellow */}
                  </linearGradient>
                </defs>

                <motion.path
                  d="M252.5 471.6C208.5 471.6 174.3 423 173.9 422.5L172.2 420L169.2 420.3C164.8 420.8 160.3 421.1 156 421.1C118.7 421.1 98.4 402.4 98.2 402.2L98 402L97.8001 401.8C49.6001 365.7 67.4 296.8 67.6 296.1L68.3001 293.5L66.5 291.5C41.5 264.1 38.8 231.8 38.8 231.5C36.2 200.4 46.5001 173.7 69.3001 152.1C86.6001 135.8 104.9 128.6 105.1 128.5L107.9 127.4L108.3 124.5C114.9 77.2 148.5 56.8 148.9 56.6L149 56.5L149.1 56.4001C165.2 45.7001 182.4 40.3 200.2 40.3C230.5 40.3 252.2 56.1001 252.4 56.2001L255.1 58.2001L257.9 56.5C275 46.4 293.4 41.3 312.7 41.3C333.1 41.3 347.3 47.2 347.4 47.3H347.5C397.2 67.5 405.3 126.7 405.4 127.3L405.8 130.3L408.7 131.3C453.4 147.3 467.5 188.7 467.6 189.2L467.7 189.4C489.3 247.1 445 288 444.5 288.4L442.3 290.4L443 293.3C455.7 346.1 436.4 375 436.3 375.3L436.1 375.6L435.9 375.9C415.6 414.8 376.7 420.6 355.3 420.6C347.6 420.6 342.7 419.8 342.6 419.8L339.2 419.3L337.5 422.2C325.7 442.2 309.5 456.5 289.4 464.5C274.3 470.6 262.4 470.7 262.3 470.7H261.9L261.5 470.8C258.6 471.3 255.5 471.6 252.5 471.6ZM200.6 420.3L206.1 425.7C222.4 441.8 239.6 449.9 257.2 449.9C287.3 449.9 307.2 426.3 308.1 425.3L313.6 418.6L305 417.2C280.7 413.1 259.5 399.8 259.3 399.7L257.2 398.3L200.6 420.3ZM88.6 319.1C85.5 343.7 90.2001 363.5 102.5 378.1C121.4 400.4 151.1 401.9 152.4 402L161.1 402.4L157 394.7C145.1 372.2 142.8 346.6 142.8 346.3L142.6 343.8L89.6 311.4L88.6 319.1ZM371.1 344L370.9 346.5C370.9 346.7 368.8 371.7 357.5 393.6L353.5 401.3L362.2 400.9C363.4 400.8 392.4 399.2 410.7 377.2C422.6 362.9 427 343.5 423.7 319.6L422.7 312L371.1 344ZM305.1 361.1L281.2 383.1L285.5 386.8C286 387.2 298.8 397.8 327.7 400.8L331.6 401.2L349.6 351.4L305.1 361.1ZM182.1 400.5L186 400.1C215 397.1 227.7 386.5 228.2 386.1L232.5 382.4L208.6 360.4L164.1 350.7L182.1 400.5ZM178 186.9L157.9 270.2L213.5 340.6L256.9 342.4L300.3 340.6L355.9 270.2L335.8 186.9L256.9 148.1L178 186.9ZM388.9 248.2C388.8 248.4 379.2 266 373.9 273.9L373 275.2L374 316.2L420.3 286.9L393.1 240.3L388.9 248.2ZM91.3001 287L137.6 316.3L138.6 275.3L137.7 274C132.4 266.1 122.8 248.5 122.7 248.3L118.5 240.5L91.3001 287ZM409.6 162.7C408.9 187.3 398.6 210.1 398.5 210.4L397.4 212.8L431.3 267.3L435.6 260.5C448.4 240.1 452.8 220.4 448.4 201.8C441.9 173.9 418.3 159.1 417.3 158.5L409.9 154L409.6 162.7ZM95.4001 158.8C94.4001 159.4 70.5001 173.7 63.4001 201.4C58.7001 219.9 62.6 239.7 75 260.4L79.1 267.2L114.1 213.4L113 211C112.9 210.8 103.1 187.7 102.9 163.1L102.8 154.5L95.4001 158.8ZM354.1 177.4L380.7 196.2L383.4 191.2C383.7 190.6 391.4 175.9 388.3 147L387.9 143.1L335.4 135.9L354.1 177.4ZM124.7 143.1L124.3 147C121.2 176 128.8 190.6 129.2 191.2L131.9 196.2L158.5 177.4L177.3 135.9L124.7 143.1ZM218.9 114.9L255.2 125.8L294.4 116.9L256.1 80.5L218.9 114.9ZM315.3 63.1C299 63.1 286.4 68.7 285.8 69L277.9 72.6L285 77.6C305.1 92 318.3 113.2 318.4 113.4L319.7 115.6L380.2 120.6L377.6 113.3C363.1 71.8 335.7 63.1 315.3 63.1ZM196 63.7001C176 63.7001 149.1 72.2001 134 112.8L131.3 120L191.9 116L193.3 113.9C193.4 113.7 207 92.7 227.3 78.7L234.5 73.8001L226.6 70.1C226 69.8 212.9 63.7001 196 63.7001Z" // The d attribute value for the path element
                  fill="none"
                  stroke="url(#orangeGradient)"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView2 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
              </motion.svg>
              <h4 className="text-center mt-3">Video Editing</h4>
              <p className="text-center mt-3">
                Video editing involves cutting, arranging, and enhancing video
                footage to create a cohesive and polished final product.
              </p>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div>
              <motion.svg
                style={{ scale: "0.8" }}
                ref={ref3} // Pass the ref to the motion.svg component
                viewBox="-12 -5 603 441"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z" // The d attribute value for the path element
                  fill="none"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView3 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView3 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M347 267C347 300.738 319.865 328 286.5 328C253.135 328 226 300.738 226 267C226 233.262 253.135 206 286.5 206C319.865 206 347 233.262 347 267Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView3 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
              </motion.svg>
              <h4 className="text-center mt-3">Video Editing</h4>
              <p className="text-center mt-3">
                Video editing involves cutting, arranging, and enhancing video
                footage to create a cohesive and polished final product.
              </p>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div>
              <motion.svg
                style={{ scale: "0.8" }}
                ref={ref4} // Pass the ref to the motion.svg component
                viewBox="-12 -5 603 441"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z" // The d attribute value for the path element
                  fill="none"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView4 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M573 267C573 223.972 561.842 181.582 540.475 143.439C519.109 105.296 488.168 72.5307 450.286 47.9327C412.405 23.3347 368.706 7.63305 322.91 2.16489C277.114 -3.30328 230.579 1.62405 187.267 16.5273C143.955 31.4305 105.149 55.868 74.1542 87.7589C43.1596 119.65 20.8942 158.049 9.25431 199.687C-2.38559 241.325 -3.05523 284.967 7.30242 326.898C17.6601 368.829 38.7382 407.806 68.7417 440.51L210.033 327.929C199.497 316.445 192.095 302.758 188.458 288.034C184.821 273.309 185.056 257.984 189.143 243.363C193.231 228.741 201.049 215.257 211.933 204.058C222.817 192.86 236.444 184.278 251.654 179.045C266.863 173.812 283.204 172.081 299.286 174.001C315.367 175.922 330.712 181.435 344.015 190.073C357.317 198.711 368.182 210.217 375.685 223.611C383.188 237.005 387.106 251.891 387.106 267H573Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView4 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
                <motion.path
                  d="M347 267C347 300.738 319.865 328 286.5 328C253.135 328 226 300.738 226 267C226 233.262 253.135 206 286.5 206C319.865 206 347 233.262 347 267Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="10"
                  variants={variants} // Pass the variants prop to the motion.path component
                  animate={inView4 ? "animate" : "initial"} // Set the animate prop based on the inView value
                />
              </motion.svg>
              <h4 className="text-center mt-3">Video Editing</h4>
              <p className="text-center mt-3">
                Video editing involves cutting, arranging, and enhancing video
                footage to create a cohesive and polished final product.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
