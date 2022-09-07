import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({user}) => {
  const [cards, setCards] = useState({});

  return (
    <div className="container-cards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
           {user}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
