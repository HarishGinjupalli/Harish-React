import React,{useState} from "react";

let Dropdown=()=>{
        let [state,setState]=useState({
            days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        })
        console.log(state);
     
     

    return (
        <React.Fragment>
           
            <select>
                {
                    state.days.map((d)=>{
                        return <option>{d}</option>
                    })
                }
            </select>
           
        </React.Fragment>
    )
}

export default Dropdown;