import React,{useState} from "react";

let Employees=(emp)=>{

let [state,setState]=useState({
    Employee:[
        {empno:101,name:'a',loc:'hyd',sal:20000},
        {empno:102,name:'b',loc:'pune',sal:50000},
        {empno:103,name:'c',loc:'chennai',sal:40000},
        {empno:104,name:'d',loc:'hyd',sal:10000},
        {empno:105,name:'e',loc:'sec',sal:60000},
       
    ]
})

console.log(state.Employee);
return(
    <React.Fragment>
        <table className="table table-striped shadow">
            <thead>
                <th>empno</th>
                <th>name</th>
                <th>loc</th>
                <th>sal</th>
            </thead>
            <tbody>
                {
                    state.Employee.map((emp)=>{
                        return(
                        <tr key={emp.empno}>    
                            <td>{emp.empno}</td>
                            <td>{emp.name}</td>
                            <td>{emp.loc}</td>
                            <td>{emp.sal}</td>
                        </tr>
                        )
                    })
                }
                
            
            </tbody>
        </table>

    </React.Fragment>
)

}

export default Employees;