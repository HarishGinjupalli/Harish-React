import React, { useState } from "react";

let Radio=()=>{

    let[state,setState]=useState({
        course:null
    })

    let updateInput=(event)=>{
        setState({
            ...state,
            course:event.target.value

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
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" value="html" onChange={updateInput} id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">html</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" value="css" onChange={updateInput} id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">css</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" value="js" onChange={updateInput} id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">js</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                {
                                                    state.course==="html"?
                                                    <div className="container">
                                                        <div className="row">
                                                            <p>HTML----Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic ipsum totam qui eligendi quod praesentium repudiandae ducimus, possimus cum obcaecati recusandae pariatur ad nesciunt distinctio quibusdam! Ullam, qui explicabo.</p>
                                                        </div>
                                                    </div>:null
                                                }
                                                {
                                                    state.course==="css"?
                                                    <div className="container">
                                                        <div className="row">
                                                            <p>CSS----Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic ipsum totam qui eligendi quod praesentium repudiandae ducimus, possimus cum obcaecati recusandae pariatur ad nesciunt distinctio quibusdam! Ullam, qui explicabo.</p>
                                                        </div>
                                                    </div>:null
                                                }
                                                {
                                                    state.course==="js"?
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
export default Radio