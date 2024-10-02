import React from "react";
import MediaQuery from "react-responsive";

function CaseDeats (props) {

    if (props.case) {
        return (
            <>
                <MediaQuery minWidth={640}>
                    <div style={{backgroundColor: "black"}}>  
                        <div style={{ paddingLeft: "50px", paddingTop: '50px', paddingBottom: "50px", backgroundColor: "black" }}>
                            <div
                                className="embed-responsive embed-responsive-16by9"
                                style={{
                                    maxHeight: '80vh',
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)', // Centers the element horizontally and vertically
                                    width: '90%', // Set fixed width
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <iframe
                                    src={props.case.video}
                                    width="640"
                                    height="480"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        </div>
                        <div 
                            className="text-center"
                            style={{ padding: "80px 150px", marginTop: "100vh", overflowY: 'auto', position: "relative", backgroundColor: "white" }}
                        >
                            <h1>{props.case.name}</h1>
                            <p className="mt-4">{props.case.description}</p>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={639}>
                    <div style={{backgroundColor: "black"}}>  
                        <div style={{ paddingLeft: "50px", paddingTop: '50px', paddingBottom: "50px", backgroundColor: "black" }}>
                            <div
                                style={{
                                    maxHeight: '80vh',
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)', // Centers the element horizontally and vertically
                                    width: '90%', // Set fixed width
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <iframe
                                    src={props.case.video}
                                    style={{border: "none"}}
                                    width="640"
                                    height="480"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        </div>
                        <div 
                            style={{ padding: "80px 50px", marginTop: "100vh", overflowY: 'auto', position: "relative", backgroundColor: "white" }}
                        >
                            <h1 className="text-center">{props.case.name}</h1>
                            <p className="mt-4 text-center">{props.case.description}</p>
                        </div>
                    </div>
                </MediaQuery>
            </>
        )
    }
}

export default CaseDeats