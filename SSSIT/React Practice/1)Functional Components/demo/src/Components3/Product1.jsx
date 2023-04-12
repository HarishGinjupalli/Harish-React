import React, { useState } from "react";

let Product1=()=>{
let [state,setState]=useState({
    products:[

        {
        pname:'HP Chromebook',
        img:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61d1xNY54HL._AC_UY218_.jpg',
        price:21490,
        qty:20
        },
        
        
        {
        pname:'Dell Vostro',
        img:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51bqpP0jb5L._AC_UY218_.jpg',
        price:42490,
        qty:8
        },
        
        
        {
        pname:'HP 14s,',
        img:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91d75JiCH9L._AC_UY218_.jpg',
        price:24990,
        qty:0
        }
        ]
        
})

return (
<React.Fragment>
 <div className="container shadow">
    <div className="row">
        {
         state.products.map((p)=>{
            return(
                <div className="col-lg-12">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={p.img} className="img-fluid"></img>
                                </div>
                                <div className="col-lg-8">
                                    <p>name:{p.pname}</p>
                                    <p>price:&#8377;{p.price}</p>
                                    <p>
                                        {
                                            (p.qty>=20)?<p className="text-success">Availablle</p>:null
                                        }

                                        {
                                            (p.qty<10 && p.qty>1)?<p className="text-primary">Almost Completed</p>:null
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
         })
        }
    </div>
 </div>
</React.Fragment>)
}

export default Product1