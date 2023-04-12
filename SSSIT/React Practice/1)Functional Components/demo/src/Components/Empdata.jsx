import React, { useState } from "react";
import Emp from "./Emp";


let Empdata=()=>{

let [state,setState]=useState({

 employee:[

  {empno:101,name:'a',salary:1000},
  {empno:102,name:'b',salary:2000},
  {empno:103,name:'c',salary:3000},
 ]
})


return(

 <React.Fragment>

<Emp  emp={state.employee}></Emp>

 </React.Fragment>

)

}


export default Empdata;