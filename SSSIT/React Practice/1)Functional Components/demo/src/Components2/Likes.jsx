import React,{useState} from "react";

let Likes=()=>{

let [state,setState]=useState({
    value:0
})

let increment=()=>{
    setState({
        value:state.value+1
    })
}


let decrement=()=>{
    setState({
        value:(state.value>0)?state.value-1:1
    })
}

return (
    <React.Fragment>
        <div className="container mt-4">
                <p>{state.value}</p>
                <button onClick={increment}>Like</button>
                <button onClick={decrement}>Unlike</button>
         
        </div>
    </React.Fragment>
)

}

export default Likes;