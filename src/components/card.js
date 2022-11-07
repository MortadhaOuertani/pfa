import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProfile } from "../redux/action/profileactions";
import "./css/card.css";

const Card = ({id,bio, img, user, title, city }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const authUser={
    id:auth.user.id
  }
  const DeleteHandler = (__id)=>{
      dispatch(DeleteProfile(__id))
    }
useEffect(()=>{
  console.log(id)
})
  return (
    <div id="container">
      <div id="growth" class="product-details">
        <h1>{title}</h1>
        <h2>{city}</h2>
        <p class="information">{bio}</p>
        <div class="control">
        </div>
      </div>

      <div class="product-image">
        <img src={img} alt="" />

        <div class="info">
          <h2> Submited By:</h2>
          <ul>
            <li>
              <strong>Name : </strong>
              {user.name}{" "}
            </li>
            <li style={{ whiteSpace: "nowrap" }}>
              <strong>Email : </strong>
              {user.email}
            </li>
            {(authUser.id==user._id)?
            <li>
              <button style={{height:"60px",marginTop:"20px"}} onClick={() => DeleteHandler(id)}>Delete Post</button>
            </li>:null
  }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
