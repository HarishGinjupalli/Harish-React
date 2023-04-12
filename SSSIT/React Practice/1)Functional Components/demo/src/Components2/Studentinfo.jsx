import React, { useState } from "react";
import Student3 from "./Student3";

let Studentinfo=()=>{
    let [state,setState]=useState({
        data:[
            {sid:"101",name:"harish",course:"Reactjs",fees:"6000"},
            {sid:"102",name:"vikas",course:"js",fees:"5000"},
            {sid:"103",name:"sai",course:"css",fees:"4000"},
            {sid:"104",name:"harsha",course:"html",fees:"3000"},
            
        ]
    })

    return (
    <React.Fragment>
            <Student3 studentdata={state.data}></Student3>
    </React.Fragment>)
    
}

export default Studentinfo;