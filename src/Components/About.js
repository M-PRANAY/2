import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'
    // });

    // const [btntext, setbtntext] = useState("Enable Dark Mode");

    
    // const handleModeSwitch = () => {
    //     if (myStyle.color === "white") {
    //         setMyStyle({

    //             color: "black",
    //             backgroundColor: "white",

    //         });
    //         setbtntext("Enable Dark Mode");
    //     } else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: '1px solid white'    
    //         });
    //         setbtntext("Enable Light Mode");
    //     }
    // };

    return (
        <div className="container" style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                            style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body">
                            <strong>😂</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                            style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                    >
                        <div className="accordion-body">
                            <strong>👍</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                            style={{color:props.mode === 'dark'?'white' : 'black', backgroundColor:props.mode ==='dark'?'black':'white'}}
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body">
                            <strong>1</strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button
                    type="button"
                    className={`btn btn-${props.mode ==='dark'?'secondary':'primary'} my-2`}
                    onClick={handleModeSwitch}
                >
                    {btntext}
                </button>
            </div> */}
        </div>
    );
}
