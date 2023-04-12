import React, { useState } from "react";

let Message3=()=>{
let [state,setState]=useState(false)

let logIn=()=>{
    setState(true)
}

let logOut=()=>{
    setState(false)
}


    return (
        <React.Fragment>
            
            <div className="container mt-5">
                <pre>
                    {JSON.stringify(state.msg)}
                </pre>
                <div className="row">
                   {
                    !state?<p>Welcome Harish</p>:<p>Guest login</p>
                   }                    
                   {
                    !state?<button onClick={logIn}>login</button>:<button onClick={logOut}>logout</button>
                   }
                </div>
            </div>
        </React.Fragment>
    )
}


export default Message3