import React from "react";
import "./superoverleague.css"
import csk from "../Images/csk-img.jpg"
import rcb from "../Images/rcb-img.jpg"

class SuperOverLeague extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="bg-container d-flex flex-column justify-content-center">
                    <h1 className="heading text-center">Super Over League</h1>
                    <div className="container">
                        <div className="d-flex flex-row justify-content-center">
                            <img className="image" src={rcb}></img>
                            <img className="image" src={csk}></img>
                        </div>

                    </div>    
                </div>
            </React.Fragment>
        )
    }
}

export default SuperOverLeague