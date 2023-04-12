import React from "react";

let Emp=(props)=>{
    console.log(props)
    return (
        <React.Fragment>
            <div className="container mt-10">
                <table className="table table-striped shadow">
                    <thead className="table-dark">
                        <tr>
                            <th>empno</th>
                            <th>name</th>
                            <th>salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.emp.map((e)=>{
                                return (<tr>
                                    <td>{e.empno}</td>
                                    <td>{e.name}</td>
                                    <td>{e.salary}</td>
                                </tr>)
                            })
                        }
                    </tbody>                     
                </table>
            </div>
        </React.Fragment>
        )

}

export default Emp;