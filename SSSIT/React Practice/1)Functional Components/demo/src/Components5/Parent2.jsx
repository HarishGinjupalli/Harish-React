import React, { useState } from "react";

let Parent2=(props)=>{

    let [state,setState]=useState({
        employee:{
            eno:"1",
            name:"harish",
            sal:"6000"
        }
    })

   
    return(
        <React.Fragment>
            <div className="container mt-5">
                <pre>
                    {
                        JSON.stringify(state)
                    }
                </pre>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h1>I am Parent component</h1>
                            <p>{state.employee.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Parent2