import React from "react";
import Wap from "../images/whatssapp.png"

const Icon = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-5 p-4">Now your Client is leaving the website say something impressive to hold his attention!!!</div>
            <div className="d-flex justify-content-center">
                <div className="sq-svg">
                <svg viewBox="0 0 189 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="179" height="175" rx="40" stroke="black" stroke-width="10"/>
                </svg>
                </div>
                <div className="square">Thank you</div>
            </div>
            <div className="pl-4 pb-3"><img src={Wap} className="con-i"/></div>
            <div className="pl-4 pb-3"><img src={Wap} className="con-i"/></div>
        </>
    )
}

export default Icon