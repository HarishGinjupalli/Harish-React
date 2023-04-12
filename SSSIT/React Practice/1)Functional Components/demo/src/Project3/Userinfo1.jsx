import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Axios from "axios";

let Userinfo1 =()=>{

 let id=useParams().userid;


 let[selecteduser,setSelecteduser]=useState({});


 useEffect(()=>{
  Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
  
 let uid=response.data.find(userdata=>userdata.id===id);


 setSelecteduser(uid);

 console.log(uid);
  
  }).catch((error)=>{
  
  
    console.log(error);
  })
  
    },[id])


 return(


  <React.Fragment>
   <div className="container mt-5">


 

    <h3>Userinfo menu</h3>


    {

      Object.keys(selecteduser).length>0?<div>

      <li>id:{selecteduser.id}</li>

      <li>street:{selecteduser.address.street}</li>

      <li>id:{selecteduser.website}</li>


      </div>:null
    }

    <Link to="/user">Back</Link>

    </div>
  </React.Fragment>

 )

}


export default Userinfo1;