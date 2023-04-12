import React, { useRef } from "react";

let Login1=()=>{

    let pInput=useRef()

    let showPassword=()=>{
        let getPassword=pInput.current.type
        if (getPassword==="password"){
            pInput.current.setAttribute("type","text")
        }else{
            pInput.current.setAttribute("type","password")
        }
    }

    return(
        <React.Fragment>
            <div className="mt-5">
                <div className="card">
                    <div className="card-header bg-danger">
                        <h1>Login Page</h1>
                    </div>
                    <div className="card-body">
                    
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Username"/>                     
                        </div>
                        <div className="form-group mb-2">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={pInput}/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={showPassword}/>
                            <label className="form-check-label" htmlFor="defaultCheck1">show password</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">login</button>
                    </div>
                </div>
            </div>       
        </React.Fragment>
    )

}

export default Login1