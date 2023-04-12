import React, { useState } from "react";
import Card1 from "./Card1";

import img1 from '../Images/Image1.jpg';
import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpg';



let CityCards=()=>{

 let [state,setState]=useState({

  citynames:['hyderabad','pune','chennai']
 })

return(
<React.Fragment>

<div className="container mt-4">
<div className="row">

<div className="col-lg-4">

 <Card1 img={img1} city={state.citynames[0]}>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, corporis repellendus quam veniam esse dolore nisi provident praesentium sapiente vel? Magnam voluptas voluptates porro, iste sapiente pariatur a inventore.</p>

  <button className="btn btn-danger">Book Now</button>
 </Card1>
</div>

<div className="col-lg-4">
<Card1 img={img2} city={state.citynames[1]}>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nisi voluptatum quia velit non architecto libero nemo consequuntur molestias laboriosam obcaecati nesciunt natus iste omnis quae. Quaerat omnis laudantium accusantium?</p>
 
 <button className="btn btn-danger">Book Now</button>
</Card1>
</div>


<div className="col-lg-4">
<Card1 img={img3} city={state.citynames[2]}>
 
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequatur nihil aperiam? Ad obcaecati consequatur ab debitis corrupti modi exercitationem omnis, aperiam recusandae dolorum fugit quia quod iste quae quasi.</p>

<button className="btn btn-danger">Book Now</button>

</Card1>
</div>

</div>
</div>

</React.Fragment>

)


}

export default CityCards;