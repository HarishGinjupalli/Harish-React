import React, { useState } from "react";

let Smsapp=()=>{

 let [count,setCount]=useState({
  textcount:0
 })


 let message=(event)=>{
setCount({
 textcount:event.target.value.length
})

 }

return(

<React.Fragment>
<pre>
 {JSON.stringify(count)}
</pre>
<div className="container mt-5">
<div className="row">
<div className="col-lg-5">

<div className="card shadow">

<div className="card-header bg-dark text-white">
 <h1>Sms App</h1>
</div>

<div className="card-body">
<textarea className="form-control" rows={8} placeholder="Type Message" onKeyUp={message} maxLength="100">
</textarea>
</div>


<div className="card-footer">
 <p>Text Remaining:<span>{count.textcount}</span>/100</p>
</div>
</div>


</div>
</div>
</div>


</React.Fragment>

)


}

export default Smsapp;