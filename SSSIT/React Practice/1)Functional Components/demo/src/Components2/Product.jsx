import React, { useState } from "react";

import img1 from "../Images/camera.jpg"
import img2 from "../Images/watch.jpg"
import img3 from "../Images/mobile.jpg"
import img4 from "../Images/tv.jpg"

let Product=()=>{


 let [state,setState]=useState({

  product:[
    {
   id:'AA01',
   name:'camera',
   img:img1,
   qty:1,
   price:10000
  },
  {
    id:'AA02',
    name:'watch',
    img:img2,
    qty:1,
    price:11000
   },
   {
    id:'AA03',
    name:'mobile',
    img:img3,
    qty:1,
    price:15000
   },
   {
    id:'AA04',
    name:'tv',
    img:img4,
    qty:1,
    price:100000
   },
    ]
 })



 let{id,name,img,qty,price}=state.product;

 let increment=()=>{

  setState({
   product:{
    ...state.product,
    qty:state.product.qty+1
   }
  })

 }


 let decrement=()=>{

  setState({
   product:{
    ...state.product,
    qty:state.product.qty>1?state.product.qty-1:1
   }
  })

 }

 return(

  <React.Fragment>

   <div className="container mt-5">

    <table className="table">
    
    <thead className="table-dark">
     <tr>
      <th>Pid</th>
      <th>Name</th>
      <th>Image</th>
      <th>Qty</th>
      <th>Price</th>
      <th>Total</th>
     </tr>
    </thead>


    <tbody>
        {
            state.product.map((p)=>{
                return (
                    <tr>
                         <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td><img src={p.img} width='50px'></img></td>
                        <td>
                            <i class="fa-solid fa-circle-minus" onClick={decrement}></i>
                            {p.qty}
                            <i class="fa-solid fa-circle-plus" onClick={increment}></i>
                        </td>
                        <td>{p.price}</td>
                        <td>{p.qty*p.price}</td>
                    </tr>
                )
            })
        }
    </tbody>
    </table>
   </div>

  </React.Fragment>

 )


}

export default Product;