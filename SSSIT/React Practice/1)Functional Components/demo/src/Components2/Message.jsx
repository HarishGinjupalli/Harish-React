import React, { useState } from "react";
import Hello from "./Hello";

let Message=()=>{
    let [state,setState]=useState({
        message:"Hello ,  Harish"
    })

    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <h1>{state.message}</h1>   
                    <Hello msg={state.message}></Hello> 
                </div>                
            </div>
        </React.Fragment>
    )
}

export default Message;