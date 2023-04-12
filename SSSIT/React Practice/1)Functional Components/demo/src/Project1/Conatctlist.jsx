
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Axios from "axios";

let Contactlist=(props)=>{

 let [state,setState]=useState(
  {
   users:[]
  }
 )


useEffect(()=>{

 Axios.get("https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json").
 then((response)=>{

  setState({
   users:response.data
  })

 }).
 
 catch((error)=>{
console.log(error)
 })


},[])



let sendUser=(users)=>{

 props.sendData(users);

}

return(

<React.Fragment>





<table className='table table-hover table-striped shadow'>

    <thead className='table-dark'>
        <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>City</th>
            <th>Pincode</th>
        </tr>
    </thead>

<tbody>

{
 state.users.map((user)=>{
return(

    <tr onMouseOver={sendUser.bind(this,user)}>
        <td>{user.login.uuid.substr(user.login.uuid.length-6)}</td>
        <td>{user.name.first}</td>
        <td>{user.name.last}</td>
        <td>{user.location.city}</td>
        <td>{user.location.postcode}</td>
    </tr>

)

 })
}


</tbody>

</table>







</React.Fragment>

)


}


export default Contactlist;