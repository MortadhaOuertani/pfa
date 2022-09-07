import React, { useState } from "react";
import { Button } from "../buttonElement";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginAction, Registration } from "../../redux/action/authactions";
import "../css/more.scss";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWraper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroVideo,
} from "../css/herostyle";
import moreinfovideo from "../moreinfovideo.mp4";
import { AddProfile } from "../../redux/action/profileactions";
const MoreInfo = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const errors = useSelector((state) => state.errors);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(AddProfile(form, setShow, setMessage, Navigate));
  };
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HeroContainer>
      <HeroBg>
        <HeroVideo autoPlay loop muted src={moreinfovideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <form action="#" onSubmit={onSubmit}>
          <p>Share your thoughts on a vacation</p>
          <input
            name="city"
            required
            type="text"
            onChange={onChangeHandler}
            placeholder="city"
          />
          <br />
          {errors.city && (
            <div
              style={{
                marginTop: "-20px",
                color: "#f70031",
                fontWeight: "600",
              }}
            >
              {errors.password}
              <br />
            </div>
          )}
          <input
           style={{width:"80%"}}
            type="textarea"
            required
            name="bio"
            onChange={onChangeHandler}
            placeholder="thoughts"
          />
          <br />
          {errors.bio && (
            <div
              style={{
                marginTop: "-20px",
                color: "#f70031",
                fontWeight: "600",
              }}
            >
              {errors.password}
            </div>
          )}
          <input style={{width:"90%"}} type="text" name="recomended" placeholder=" why recomend this place" onChange={onChangeHandler}/>          
          <br />              
          <button type="submit" onChange={onChangeHandler} value="Sign in">
            Share
          </button>
          <br />
          <Link to="/blog">Go back To The Forum!</Link>
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default MoreInfo;
