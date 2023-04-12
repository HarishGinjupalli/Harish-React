import React,{ useState } from "react";

let Printname=()=>{

    let [state,setState]=useState({
      msg:"Harish"
    })
    
    let hello=(event)=>{
        setState({
            msg: event.target.value
        })
    }

    return(
        <React.Fragment>
            <div className="container">           
                <pre>
                {JSON.stringify(state.msg)}
                </pre>
                <div className="row">
                    <input type="text" onKeyUp={hello}/>
                    <h1>Enter your name:<span>{state.msg}</span></h1>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Printname;