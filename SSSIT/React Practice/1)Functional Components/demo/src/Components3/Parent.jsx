import React, { useState } from "react";
import Child from "./Child";

let Parent=(props)=>{

    let [state,setState]=useState({
        pmessage:''

    })

    let receivedData=(data)=>{
        setState({
        pmessage:data
        })

    }
    return(

    <React.Fragment>
        <pre>
            {JSON.stringify(state)}
        </pre>
        <h2>{state.pmessage}</h2>
        <Child  sendData={receivedData}></Child>
    </React.Fragment>
    )
}

export default Parent;