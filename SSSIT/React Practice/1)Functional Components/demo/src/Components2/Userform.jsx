import React, { useState } from "react";

let Userform=()=>{


 let [state,setState]=useState({

  user:{
   fname:'',
   lname:'',
   username:'',
   password:'',
   email:'',
   course:''

  }
 })


 let updateInput=(event)=>{

  setState({

   user:{
    ...state.user,
   [event.target.name] :event.target.value
   }
  })
 }

 let register=(event)=>{

  event.preventDefault();// never refresh application

  console.log(state);

 }

return(

<React.Fragment>

<div className="container mt-5">

<pre>
 {JSON.stringify(state)}
</pre>
<div className="row">
<div className="col-lg-5">


<div className="card shadow">

<div className="card-header">
 <h1>UserForm</h1>
</div>

<div className="card-body">

<form onSubmit={register}>
<div className="mt-2">
<input type="text" placeholder="Firstname" className="form-control" onChange={updateInput} name="fname"></input>
</div>


<div className="mt-2">
<input type="text" placeholder="Lastname" className="form-control" name="lname" onChange={updateInput}></input>
</div>


<div className="mt-2">
<input type="text" placeholder="Username" className="form-control" name="username" onChange={updateInput}></input>
</div>

<div className="mt-2">
<input type="password" placeholder="Password" className="form-control" name="password" onChange={updateInput}></input>
</div>

<div className="mt-2">
<input type="email" placeholder="Email" className="form-control" name="email" onChange={updateInput}></input>
</div>

<div className="mt-2">

<select className="form-select" name="course" onChange={updateInput}>
 <option>Java</option>
 <option>Python</option>
 <option>Ui</option>
 <option>Oracle</option>
</select>
</div>

<div className="mt-2">
<input type="submit" value="Submit" className="btn btn-success"></input>
</div>
</form>


</div>

</div>


</div>
</div>
</div>

</React.Fragment>

)


}

export default Userform;