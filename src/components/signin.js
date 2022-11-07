import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../redux/action/authactions";
import "./css/signin.css";
const Signin = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const errors = useSelector((state) => state.errors);
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, Navigate));
  };
  return (
    <>
      <div className="container">
        <form action="#" onSubmit={onSubmit}>
          <p>Welcome</p>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            placeholder="Email"
          />
          <br />
          {errors.email && (
            <div style={{marginTop:"-20px",color:"#f70031",fontWeight:"600"}}>{errors.email}</div>
          )}
          <input
            name="password"
            type="password"
            onChange={onChangeHandler}
            placeholder="Password"
          />
          <br />
          {errors.password && (
            <div style={{marginTop:"-20px",color:"#f70031",fontWeight:"600"}}>{errors.password}</div>
          )}
            <button type="submit" onChange={onChangeHandler} value="Sign in">
            Sign in
          </button>
          <br />
          <Link to="/signup">Signup Here!</Link>
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
