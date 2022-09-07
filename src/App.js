import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./components/Pages/blog";
import Home from "./components/Pages/Home";
import Signin from "./components/signin";
import Register from "./components/Register";
import Admin from "./components/Pages/Admin";
import Notfound from "./components/Pages/Notfound";
import Noaccess from "./components/Pages/Noaccess";
import Privetrouter from "./components/Privetrouter";
import Privetroutertwo from "./components/Privetroutertwo";
import AdminRouter from "./components/Adminrouter";
import Forceredirect from "./components/Forceredirect";
import Navv from "./components/nav";
import Sidebar from "./components/sidebar";
import store from './redux/store'
import { setUser } from "./redux/action/authactions";
import jwt_decode from'jwt-decode'
import { useSelector } from "react-redux";
import MoreInfo from "./components/Pages/more-info";
import { setAuth } from "./util/setAuth";


function App() {

  
  
  const auth = useSelector(state => state.auth)
  
  const [isOpen,setisOpen]=useState(false);
  const toggle = () =>{
      setisOpen(!isOpen);
      
  }
  
  const user = {
    isConnected:auth.isConnected,
    role:auth.user.role,
  }  
 useEffect(() => {
  if(localStorage.jwt){
    const decode = jwt_decode(window.localStorage.jwt)
    store.dispatch(setUser(decode))
    setAuth(window.localStorage.jwt)
  }}, [localStorage.jwt]);
  return (
    <BrowserRouter>
     <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navv user={user} toggle={toggle} />
      <Routes>
      <Route path="/more" element={<MoreInfo/>}/>
        <Route path="/blog" element={<Blogs user={user}/>}/>
        <Route path="/signup"element={<Forceredirect user={user}>
          <Register />
        </Forceredirect>} />
        <Route path="/signin" element={<Forceredirect user={user}>
          <Signin />
        </Forceredirect>} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminRouter user={user}>
          <Admin/>
        </AdminRouter>} />
        <Route path="*" element={<Notfound />} />
        <Route path="/noaccess" element={<Noaccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
