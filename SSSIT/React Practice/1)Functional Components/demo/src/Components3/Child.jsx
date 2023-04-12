import React, { useState } from "react";

let Child=(props)=>{

    let [state,setState]=useState({
    msg:'I m child message'
    })


    let clickButton=()=>{

    props.sendData(state.msg)
    }

    return(

        <React.Fragment>
           
            <div className="container mt-5">
                <p>child</p>
                <h1>{state.msg}</h1>
               <button onClick={clickButton}>Send</button>
            </div>
        </React.Fragment>

    )


}
export default Child;