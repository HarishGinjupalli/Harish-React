import React from "react";

let Student3=(props)=>{
    

    return (
    <React.Fragment>
            <div className="container">
                <div className="row">
                    <table className="table table-striped shadow">
                        <thead className="table-dark">
                            <tr>
                                <th>Sid</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.studentdata.map((s)=>{
                                    return (
                                        <tr key={s.sid}>
                                            <td>{s.sid}</td>  
                                            <td>{s.name}</td>
                                            <td>{s.course}</td>
                                            <td>{s.fees}</td>      
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    </React.Fragment>)
    
}

export default Student3;