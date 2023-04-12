import React, { useEffect, useState } from "react";

import Axios from 'axios'
import { Link } from "react-router-dom";

let User1 =()=>{


  let [user,setUser]=useState([]);


  useEffect(()=>{
Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{

setUser(response.data)

}).catch((error)=>{


  console.log(error);
})


  },[])

 return(


  <React.Fragment>

  <h3>User menu</h3>


  <div className="container mt-5">

    <div className="row">

      <div className="col">

        <table className="table table-striped">

          <thead className="table-dark">
            <tr>
              <th>sid</th>
              <th>name</th>
              <th>username</th>
            </tr>
          </thead>

          <tbody>

            {

            user.map((u)=>{
          return(

            <tr>

              <td>{u.id}</td>
              <td>
                <Link to={`/user/${u.id}`}>
                {u.name}
                </Link>
              </td>
              <td>{u.username}</td>
            </tr>
          )

            })
            }

          </tbody>

        </table>

      </div>

    </div>

  </div>

  </React.Fragment>

 )

}


export default User1;