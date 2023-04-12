import React from "react";


import Card from "./Components/Card";
import Cards from "./Components/Cards";
import Dropdown from "./Components/Dropdown";
import Emp from "./Components/Emp";
import Empdata from "./Components/Empdata";
import Employees from "./Components/Employees";
import Navbar from "./Components/Navbar";
import Student from "./Components/Student";
import Student1 from "./Components/Student1";
import Styles from "./Components/Styles";
import Technologies from "./Components/Technologies";


import CityCards from "./Components2/CityCards";
import Studentinfo from "./Components2/Studentinfo";
import Message from "./Components2/Message";
import Likes from "./Components2/Likes";
import Message1 from "./Components2/Message1";
import Product from "./Components2/Product";
import Printname from "./Components2/Printname";
import Userform from "./Components2/Userform";
import Smsapp from "./Components2/Smsapp";
import Card1 from "./Components2/Card1";
import Hello from "./Components2/Hello";
import Student3 from "./Components2/Student3";


import Student4 from "./Components3/Student4";
import Message3 from "./Components3/Message3";
import Product1 from "./Components3/Product1";
import Parent from "./Components3/Parent";
import Child from "./Components3/Child";
import Radio from "./Components3/Radio";
import Checkbox from "./Components3/Checkbox";


import Usercontext from "./Components4/Usercontext";
import Acomponent from "./Components4/Acomponent";


import Message4 from "./Components5/Message4";
import Users from "./Components5/Users";
import Parent2 from "./Components5/Parent2";


import Contactapp from "./Project1/Contactapp";


import Navbar1 from "./Project2/Navbar1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Project2/Home";
import About from "./Project2/About";
import Course from "./Project2/Course";
import Contact from "./Project2/Contact";
import Online from "./Project2/Online";
import Offline from "./Project2/Offline";


import Navbar2 from "./Project3/Navbar2";
import Home2 from "./Project3/Home2";
import User1 from "./Project3/User1";
import Userinfo1 from "./Project3/Userinfo1";


import Messsage5 from "./Project4/Message5";


import Messsage6 from "./Project5/Message6";
import Checkbox1 from "./Project5/Checkbox1";
import Login1 from "./Project5/Login1";


let App=()=>{

  return(
  <React.Fragment>
  {/* <Card></Card> */}

  {/* <Cards></Cards> */}
  
  {/* <Dropdown></Dropdown> */}

  {/* <Emp></Emp> */}  

  {/* <Empdata></Empdata> */}
  
  {/* <Employees></Employees> */}
  
  {/* <Navbar></Navbar> */}
  
  {/* <Student></Student> */}
  
  {/* <Student1 name="Harish" course="Reactjs" fees="6000"></Student1>
  <Student1 name="Vikas" course="Expressjs" fees="5000"></Student1>
  <Student1 name="Sai" course="Nodejs" fees="4000"></Student1>
  <Student1 name="Kiran" course="javascript" fees="7000"></Student1> */}
  
  {/* <Styles></Styles> */}
    
  {/* <Technologies></Technologies> */}
 
  {/* $$$$$$$$$-----------------------------------Components2----------------------------------------$$$$$$$$$ */}

  {/* <Card1></Card1> */} {/*its parent and child is CityCards*/}

  {/* <CityCards></CityCards> */}

  {/* <Studentinfo></Studentinfo> */}
    
  {/* <Hello></Hello> */} {/*its parent and child is Message*/}

  {/* <Message></Message>  */}

  {/* <Likes></Likes> */}

  {/* <Message1></Message1> */}

  {/* <Printname></Printname> */}

  {/* <Product></Product> */}

  {/* <Smsapp></Smsapp> */}

  {/* <Student3></Student3> */}  {/*its parent and child is Studentinfo*/}

  {/* <Studentinfo></Studentinfo> */}
  
  {/* <Userform></Userform> */}

  {/* $$$$$$$$$-----------------------------------Components3----------------------------------------$$$$$$$$$ */}
 
  {/* <Student4></Student4> */}
   
  {/* <Message3></Message3> */}

  {/* <Product1></Product1> */}

  {/* <Parent></Parent> */}   {/*to send info from child to parent use props with events *   <child></child>/}

  {/* <Child></Child> */}

  {/* <Radio></Radio> */}

  {/* <Checkbox></Checkbox> */}


  {/* $$$$$$$$$-----------------------------------Components4----------------------------------------$$$$$$$$$ */}

  {/* <Usercontext></Usercontext> */}

  {/* <Acomponent></Acomponent> */}

  {/* $$$$$$$$$-----------------------------------Components5----------------------------------------$$$$$$$$$ */}

  {/* <Message4></Message4> */}

  {/* <Users></Users> */}

  {/* <Parent2></Parent2> */}

{/* $$$$$$$$$-----------------------------------Project1----------------------------------------$$$$$$$$$ */}

{/* <Contactapp></Contactapp> */}

{/* $$$$$$$$$-----------------------------------Project2----------------------------------------$$$$$$$$$ */}

{/* 
  <BrowserRouter>
    <Navbar1></Navbar1>
    <Routes>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="course" element={<Course></Course>}></Route>
      <Route path="contact" element={<Contact></Contact>}>
        <Route path="online" element={<Online></Online>}></Route>
        <Route path="offline" element={<Offline></Offline>}></Route>
      </Route>
    </Routes>
  </BrowserRouter> */}

  {/* $$$$$$$$$-----------------------------------Project3----------------------------------------$$$$$$$$$ */}

{/* <BrowserRouter>
  <Navbar2></Navbar2>
  <Routes>
    <Route path="/" element={<Home2></Home2>}></Route>
    <Route path="/user" element={<User1></User1>}></Route>
    <Route path="/user/:userid" element={<Userinfo1></Userinfo1>}></Route>
  </Routes>
</BrowserRouter> */}


{/* $$$$$$$$$-----------------------------------Project4----------------------------------------$$$$$$$$$ */}

  {/* <Messsage5></Messsage5> */}

{/* $$$$$$$$$-----------------------------------Project5----------------------------------------$$$$$$$$$ */}  
  
  {/* <Messsage6></Messsage6> */}

  {/* <Checkbox1></Checkbox1>   */}

  <Login1></Login1>
  </React.Fragment>
  )
}

export default App