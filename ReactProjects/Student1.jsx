import React,{useState} from "react";

let Student1=(props)=>{
    let {name,course,fees}=props;
    console.log(props)
    return(
        <React.Fragment>
            <div className="container mt-10">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <p>Name:{name}</p>
                                <p>Course:{course}</p>
                                <p>Fees:{fees}</p>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


}

export default Student1;