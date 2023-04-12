import React, { useEffect, useState } from "react";

import Axios from 'axios';


let Users=()=>{


 let [state,setState]=useState({

  user:[]
 })

 useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      setState({
        user:response.data
      })
    }).catch((error)=>{
      console.log(error)
    })
 },[])

return(


<React.Fragment>

 <div className="container mt-5">
  <div className="row">
 

<table className="table table-striped shadow">


<thead className="table-dark">
 <tr>
  <th>Id</th>
  <th>Name</th>
  
  <th>Email</th>
  <th>city</th>
 </tr>
</thead>
  <tbody>
    {
      state.user.map((u)=>{
        return (
          <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.address.city}</td>
        </tr>
        )
      })
    }
  </tbody>
</table>

<h1>{console.log(" hello")}</h1>

  </div>
 </div>

</React.Fragment>


)


}

export default Users;