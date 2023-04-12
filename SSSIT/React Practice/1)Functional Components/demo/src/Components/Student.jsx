import React,{useState} from "react";

let Student=()=>{
   let [state,setState]=useState({
        sid:101,
        name:"harish",
        course:"Reactjs",
        fees:6000
   }) 
   console.log(state);
   let {sid,name,course,fees}=state;

    return(
    <React.Fragment>
        <ul>   
            <li>Sid:{state.sid}</li> 
            <li>Name:{state.name}</li>
            <li>Course:{state.course}</li>
            <li>Fees:{state.fees}</li>
        </ul>

        <ul>
            <li>Sid:{sid}</li>
            <li>Name:{name}</li>
            <li>Course:{course}</li>
            <li>Fees:{fees}</li>
        </ul> 
    </React.Fragment>);
}
export default Student;