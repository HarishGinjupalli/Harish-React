import React, { useContext } from "react";
import Usercontext from "./Usercontext";

let Ccomponent=()=>{

    let emp=useContext(Usercontext)
   
   return  (
      <React.Fragment>
         <div className="container mt-5">
            <div className="row">
                <div className="card shadow bg-warning">
                    <div className="card-body">
                        <pre>
                            {
                                JSON.stringify(emp)
                            }
                        </pre>
                        <h1>I am C component</h1>
               
                    </div>
                </div>
               
              
            </div>
         </div>
      </React.Fragment>
   )

}

export default Ccomponent