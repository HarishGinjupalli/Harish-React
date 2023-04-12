import React, { useState } from "react";
import Contactcard from "./Conatctcard";
import Contactlist from "./Conatctlist";
import { json } from "react-router-dom";

let Contactapp=()=>{

 let [selectedContact, setSelectedContact] =useState({});

 let receiveData=(data)=>{

  setSelectedContact(data)
 }


return(

<React.Fragment>

    <div className="container mt-5">
        <h3 className="text-success">Contact App</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente eveniet natus voluptas quidem veniam atque, neque eaque ea reiciendis modi. Aliquid, cumque iusto quos sequi reiciendis asperiores nobis sit iure voluptatibus in, voluptatem, laudantium enim delectus laborum voluptate mollitia hic!</p>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <Contactlist sendData={receiveData}></Contactlist>
            </div>
            <div className="col-lg-4">
                <Contactcard selectedContacts={selectedContact}></Contactcard>
            </div>
        </div>
    </div>

    </React.Fragment>

)

}


export default Contactapp;