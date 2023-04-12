import React from "react";

let Card=(props)=>{


 console.log(props);

let{img,title} =props;


//  let{img,title,para}=props.carddata;

 return(

<React.Fragment>

 


  <div className="card shadow">
   <img src={img}></img>
   <div className="card-body">
    <h2>{title}</h2>
    <p>Hello</p>
    <button  className="btn btn-dark">Book Now</button>
   </div>


  </div>
  

{/* <pre>
  {JSON.stringify(props)}
</pre> */}

</React.Fragment>

 )


}



export default Card;