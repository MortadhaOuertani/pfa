import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../css/more.scss";
import FileBase64 from "react-file-base64";
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
  const [currentFile, setCurrentFile] = useState(undefined);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const errors = useSelector((state) => state.errors);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(AddProfile(form, setShow, setMessage, Navigate));
  };

  const selectFile = (image) => {
    setForm({
      ...form,
      img: image.base64,
    });
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
        <form action="#" onSubmit={onSubmit} encType="multipart/form-data">
          <p>Share your thoughts on a vacation</p>
          <input
            name="title"
            required
            type="text"
            onChange={onChangeHandler}
            placeholder="title"
          /><br/>
          <input
            name="city"
            required
            type="text"
            onChange={onChangeHandler}
            placeholder="city name"
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
            style={{ width: "80%" }}
            type="textarea"
            required
            name="bio"
            onChange={onChangeHandler}
            placeholder="what are you'r thoughts on the city"
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
          <FileBase64 multiples={false} onDone={selectFile}/><br/>
         
          <button type="submit" onChange={onChangeHandler} value="Sign in">
            Share
          </button>
          <p>{}</p>
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
