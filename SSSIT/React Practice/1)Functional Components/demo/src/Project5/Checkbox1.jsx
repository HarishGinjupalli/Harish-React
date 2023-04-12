import React, { useRef } from "react";

let Checkbox1=()=>{

    let submitBtn=useRef()

    let updateInput=(event)=>{
       submitBtn.current.disabled=!event.target.checked;
    }

    return(
        <React.Fragment>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={updateInput}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Register
                </label>
            </div>
            <div>
                <button className="btn btn-primary" ref={submitBtn} disabled>Submit</button>
            </div>
        </React.Fragment>
    )
}

export default Checkbox1