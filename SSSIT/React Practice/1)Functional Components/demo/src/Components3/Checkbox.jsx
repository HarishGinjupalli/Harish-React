import React, { useState } from "react";

let Checkbox=()=>{

    let[state,setState]=useState({
        html:"false",
        css:"false",
        js:"false"
    })

    let updateInput=(event)=>{
        setState({
            ...state,
            [event.target.name]:event.target.checked

        })
    }

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="html" onChange={updateInput} value="" />
                                            <label class="form-check-label">HTML</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="css" onChange={updateInput} value="" />
                                            <label class="form-check-label">CSS</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="js" onChange={updateInput} value="" />
                                            <label class="form-check-label">JS</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                {
                                                    state.html?
                                                    <div className="container">
                                                        <div className="row">
                                                            <p>HTML----Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic ipsum totam qui eligendi quod praesentium repudiandae ducimus, possimus cum obcaecati recusandae pariatur ad nesciunt distinctio quibusdam! Ullam, qui explicabo.</p>
                                                        </div>
                                                    </div>:null
                                                }
                                                {
                                                    state.css?
                                                    <div className="container">
                                                        <div className="row">
                                                            <p>CSS----Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic ipsum totam qui eligendi quod praesentium repudiandae ducimus, possimus cum obcaecati recusandae pariatur ad nesciunt distinctio quibusdam! Ullam, qui explicabo.</p>
                                                        </div>
                                                    </div>:null
                                                }
                                                {
                                                    state.js?
                                                    <div className="container">
                                                        <div className="row">
                                                            <p>JS----Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic ipsum totam qui eligendi quod praesentium repudiandae ducimus, possimus cum obcaecati recusandae pariatur ad nesciunt distinctio quibusdam! Ullam, qui explicabo.</p>
                                                        </div>
                                                    </div>:null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Checkbox