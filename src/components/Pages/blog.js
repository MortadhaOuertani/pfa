import React, { useEffect, useState } from "react";
import Card from "../card";
import Navbarloggedin from "../navbarLoggedin";
import "../css/blog.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProfiles } from "../../redux/action/profileactions";
const Blogs = ({ user }) => {
  const dispatch= useDispatch()
  const profiles = useSelector(state=>state.profiles)
  const [isOpen, setisOpen] = useState(false);
  const [show, setShow] = useState([]);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  useEffect(async ()=>{
    await dispatch(GetProfiles())
    setShow(profiles.profiles)
   },[])
  
  return (
    <>
      <Navbarloggedin user={user} toggle={toggle} />
      <div className="page-container">
        <div className="link-wrapper">
          <Link className="link" to="createcard">
            Talk about your experience
          </Link>
        </div>
        <div style={{height:"100vh",width:"100vh"}} className="card-group">
        {
                        show.map(({_id, user, bio, city})=>(
                          <Card style={{zIndex:"999999"}} className="card" _id={_id} user={user} bio={bio} city={city}/>
                        ))
                      }
        
        </div>
      </div>
    </>
  );
};

export default Blogs;
