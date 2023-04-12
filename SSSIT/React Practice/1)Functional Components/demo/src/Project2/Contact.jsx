import React from "react";
import { Link, Outlet } from "react-router-dom";

let Contact=()=>{


 return(

  <React.Fragment>

    <h1>Contact menu</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas minus ab aspernatur debitis nemo maiores, ipsa ipsam quam laboriosam id laudantium! Iusto praesentium suscipit ratione. Voluptates ex soluta error!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas minus ab aspernatur debitis nemo maiores, ipsa ipsam quam laboriosam id laudantium! Iusto praesentium suscipit ratione. Voluptates ex soluta error!</p>
    <div className="container">
    <div className="row">
      <div className="col-lg-3 bg-info">
        <Link to="online">Onlne</Link><br/>
        <Link to="offline">Offline</Link>
        </div>
        <div className="col-lg-9 bg-success">
        <Outlet></Outlet>
        </div>
        <Link to="/">Back</Link>
      </div>
    </div>
  </React.Fragment>
 )
}

export default Contact;