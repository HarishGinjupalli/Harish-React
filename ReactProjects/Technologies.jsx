import React,{useState} from "react";

let Technologies=()=>{
    let [state,setState]=useState({
        tech:["html","css","bootstrap","python","javascript","sql","mongodb","node js","express js","react js"]
    })
    console.log(state);
    return (
     <React.Fragment>
        <ul>
            {
                state.tech.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
     </React.Fragment>   
    );
}

export default Technologies;