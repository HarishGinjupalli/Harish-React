import React, { useState } from "react";
import img1 from '../Images/Image1.jpg';
import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpg';
import img4 from '../Images/Image4.jpg';



let Cards=()=>{

let [state,setState]=useState({

data:[

{
title:'hyderabad',
img:img1,
para:'On the Insert tab, the galleries include items that are designed to coordinate with the overall.'
},

{
title:'pune',
img:img2,
para:'You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document.'
},

{
title:'chennai',
img:img3,
para:'On the Insert tab, overall look of your document.'
},


{
title:'vizag',
img:img4,
para:'The galleries include items of your document. '

},

]

})

return(

<React.Fragment>

<div className="container mt-5 mb-5">
    <div className="row">

        {

            state.data.map((d)=>{

            return(
            <div className="col-lg-3">  
                <div className="card shadow">
                    <img src={d.img}></img>
                    <div className="card-body">
                        <h2 className="bg-danger">{d.title}</h2>
                        <p>{d.para}</p>
                        <button className="btn btn-dark">Book Now</button>
                    </div>
                </div>
            </div>)
            })
        }
    </div>
</div>

</React.Fragment>
)

}

export default Cards;