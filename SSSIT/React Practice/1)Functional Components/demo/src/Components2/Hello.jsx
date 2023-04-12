import React from "react";

let Hello=(props)=>{
    console.log(props)
    return (
        <React.Fragment>
            <ul>
                <li>{props.msg}</li>
                <li>{props.msg}</li>
            </ul>
        </React.Fragment>
    )
}

export default Hello;