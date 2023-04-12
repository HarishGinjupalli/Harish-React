import React, { useState, useEffect } from 'react';

let Message5=()=>{
  const [state, setState] = useState({
    users:[]
  })

    useEffect(()=>{
        usr();
    },[])

    let usr=async()=>{
        let response=await fetch("https://jsonplaceholder.typicode.com/users")
        let jsonData=await response.json();
        console.log(jsonData)
        setState({
            users:jsonData
        })
    }

  return (
    <div className="container">
       {
        state.users.map((u)=>{
            return(
                <ul>
                    <li key={u.id}>{u.id}   || {u.name}</li>
                </ul>
            )
           
        })
       }
    </div>
  );
}

export default Message5