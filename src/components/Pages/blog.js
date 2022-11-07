import React, { useEffect, useState } from "react";
import Card from "../card";
import Navbarloggedin from "../navbarLoggedin";
import "../css/blog.css";
import { useDispatch, useSelector } from "react-redux";
import { GetProfiles } from "../../redux/action/profileactions";
import Sidebar from "../sidebar";
const Blogs = ({ user }) => {
  const dispatch = useDispatch();

  const profiles = useSelector((state) => state.profiles);
  const profile = profiles.profiles;
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  useEffect(async () => {
    await dispatch(GetProfiles());
  }, []);

  return (
    <div className="body">
      <Navbarloggedin user={user} toggle={toggle} />
      {profile.map(({_id,img, title, bio, user, city }) => (
        <Card
          key="s"
          className="s"
          user={user}
          title={title}
          img={img}
          id={_id}
          bio={bio}
          city={city}
        />
      ))}
    </div>
  );
};

export default Blogs;
