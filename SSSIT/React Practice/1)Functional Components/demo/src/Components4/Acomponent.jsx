import React, { useState } from "react";
import Bcomponent from "./Bcomponent";
import Usercontext from "./Usercontext";

let Acomponent=()=>{

   let [state,setState]=useState({
      employee:{
         empno:101,
         name:"harish",
         sal:"6000"
      }
   })
   
   return  (
      <React.Fragment>
         <div className="container mt-5">
            <div className="row">
               <div className="card shadow bg-danger">
                  <div className="card-body">
                     <pre>
                        {
                           JSON.stringify(state.employee)
                        }
                     </pre>
                     <h1>I am A component</h1>
                     <p>{state.employee.empno}</p>
                     <Usercontext.Provider value={state.employee}>
                        <Bcomponent></Bcomponent>                              
                     </Usercontext.Provider>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )

}

export default Acomponent