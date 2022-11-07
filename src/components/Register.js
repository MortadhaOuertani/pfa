import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Registration } from "../redux/action/authactions";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const errors = useSelector((state) => state.errors);
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(form, Navigate));
  };
  return (
    <>
      <div className="container">
        <form action="#" onSubmit={onSubmit}>
          <p>Welcome</p>
          <input
            name="email"
            onChange={onChangeHandler}
            placeholder="Email"
          />
          <br />
          {errors.email && (
          <>  <div style={{marginTop:"-20px",color:"#f70031",fontWeight:"600"}}>{errors.email}</div><br/></> )}
          <input
            type="name"
            name="name"
            onChange={onChangeHandler}
            placeholder="name"
          />
          <br />
          {errors.name && (
          <>  <div style={{marginTop:"-20px",color:"#f70031",fontWeight:"600"}}>{errors.name}</div><br/></> )}
          <input
            name="password"
            type="password"
            onChange={onChangeHandler}
            placeholder="Password"
          />
          <br />
          {errors.password && (
          <>  <div style={{marginTop:"-20px",color:"#f70031",fontWeight:"600"}}>{errors.password}</div><br/></> )}
              <input
            name="confirm"
            type="password"
            onChange={onChangeHandler}
            placeholder="confirm password"
          />
          <br />
          {errors.confirm && (
          <><div style={{marginTop:"-20px",color:"#f70031",fontWeight:"600"}}>{errors.confirm}</div> <br/></> )}
          <button type="submit" onChange={onChangeHandler} value="Sign in">
            Sign Up
          </button>
          <br />
          <Link to="/signin">Signin Here!</Link>
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

export default Register;
