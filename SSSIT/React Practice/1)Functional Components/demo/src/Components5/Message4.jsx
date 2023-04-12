import React, { useEffect, useState } from "react";

let Message4=()=>{

    let [state,setState]=useState(0)

    useEffect(()=>{
       console.log("render")
    },[])
    
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1>Using useEffect hook example</h1>
                            <p>{state}</p>
                            {console.log("component")}
                            <button onClick={()=>{setState(state+1)}}>Click</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Message4