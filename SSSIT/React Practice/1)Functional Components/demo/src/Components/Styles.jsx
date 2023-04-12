import React from "react";

let Styles=()=>{

let myStyles={
    color:"green",
    backgroundColor:"lightgreen",
    padding:"20px"
};

return(
<React.Fragment>
    <p style={{backgroundColor:"lightblue",color:"red",padding:"10px"}}>Welcome to Reactjs</p>
    <p style={myStyles}>Welcome to Andhra Pradesh State</p>
    <p className="myextStyles">Vizag Rushikonda is one of the best place to be Seen in AP</p>
</React.Fragment>

);
}

export default Styles;
