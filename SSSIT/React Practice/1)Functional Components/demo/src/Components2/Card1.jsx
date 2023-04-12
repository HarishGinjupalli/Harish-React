import React from "react";

let Card1=(props)=>{

 console.log(props);

 console.log(props.children);
 

return(
<React.Fragment>

 <div className="card shadow">
  <img src={props.img}></img>
  <div className="card-body">
   <h3>{props.city.toUpperCase()}</h3>
    <p>{props.children}</p>

  </div>

 </div>

</React.Fragment>
)


}

export default Card1;