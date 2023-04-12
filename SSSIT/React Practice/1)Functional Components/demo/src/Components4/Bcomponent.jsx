import React, { useContext } from "react";
import Ccomponent from "./Ccomponent";
import Usercontext from "./Usercontext";

let Bcomponent=(props)=>{

    let emp=useContext(Usercontext);
   
   return  (
      <React.Fragment>
         <div className="container mt-5">
            <div className="row">
               <div className="card shadow bg-success">
                  <div className="card-body">
                     <pre>
                        {
                           JSON.stringify(props.emp)
                        }
                     </pre>
                     {/* <h1>I am B component  {props.emp}</h1> */}
                     <Ccomponent></Ccomponent>
                  </div>
               </div>
               
              
            </div>
         </div>
      </React.Fragment>
   )

}

export default Bcomponent