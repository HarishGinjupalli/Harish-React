import React,{useState} from "react";

let Message1=()=>{

let [msg,setMsg]=useState({
    displaymsg:"Hello Harish"
})

let updatemsg=()=>{
    setMsg({
        displaymsg:"You have enrolled in Reactjs"
    })
}

let html=()=>{
    setMsg({
        displaymsg:"HTML stands for Hyper text markup language"
    })
}



let js=(msg)=>{
    setMsg({
        displaymsg:msg
    })
}

return (
<React.Fragment>
    <div className="container">
        <p>{msg.displaymsg}</p>
        <button onClick={updatemsg}>Refresh</button>
        <button onClick={html}>html</button>
        <button onClick={()=>{
    setMsg({
        displaymsg:"Css Stands for cascading style sheets"
        })
    }}>css</button>
        <button onClick={js.bind(this,"java script is used for dyamic web pages creation")}>js</button>
    </div>
</React.Fragment>
    
)



}

export default Message1;