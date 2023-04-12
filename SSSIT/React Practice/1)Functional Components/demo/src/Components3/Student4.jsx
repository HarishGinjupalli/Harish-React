import React, { useState } from "react";

let Student4=()=>{
    let [state,setState]=useState({
        stu:[{sno:1,name:"Harish",course:"Reactjs",fees:"6000",feespay:"paid"},
        {sno:2,name:"Vinay",course:"html",fees:"3000",feespay:""},
        {sno:3,name:"Sai",course:"Reactjs",fees:"6000",feespay:""},
        {sno:4,name:"saikiran",course:"js",fees:"8000",feespay:"paid"},
        {sno:5,name:"Sairam",course:"Reactjs",fees:"6000",feespay:"paid"},
        {sno:6,name:"jashuva",course:"css",fees:"4000",feespay:""},
        {sno:7,name:"jayanth",course:"js",fees:"8000",feespay:""},  
        {sno:8,name:"jaya",course:"mernstack",fees:"15000",feespay:"paid 6000"}  ]      
  
    })

    return (
        <React.Fragment>
                <div className="contaier mt-5">
                    <pre>
                        {JSON.stringify(state.stu)}
                    </pre>
                    <div className="row">
                        <div className="card shadow">
                            <div className="card-header">
                                <h1>Student Course Register Details</h1>
                            </div>
                            <div className="card-body">
                                <table className="table shadow">
                                    <thead>
                                        <tr>
                                            <th>sno</th>
                                            <th>name</th>
                                            <th>course</th>
                                            <th>fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            state.stu.map((s)=>{
                                                
                                                return (
                                                    <tr>
                                                        <td>{s.sno}</td>
                                                        <td>{s.name}</td>
                                                        <td>
                                                            {
                                                            (s.course==="Reactjs")?<p className="bg-info">{s.course}</p>:(s.course==="js")?<p className="bg-success">{s.course}</p>:<p className="bg-warning">{s.course}</p>
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                (s.fees<5000)?<p style={{color:"red"}}>{s.fees}</p>:(s.fees>5000 && s.fees<=8000)?<p style={{color:"green"}}>{s.fees}</p>:<p style={{color:"purple"}}>{s.fees}</p>        
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                (s.feespay==="")?<p>not paid</p>:<p>{s.feespay}</p>
                                                            }        

                                                            {
                                                                (s.feespay==="paid")?<p style={{backgroundColor:"blue"}}>{s.feespay}</p>:<p>{s.feespay}</p>
                                                            }
                                                        </td>
                                                    </tr>
                                                )   
                                            })
                                        }     
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Student4