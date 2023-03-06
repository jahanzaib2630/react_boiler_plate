import React from "react";
import { useSelector } from "react-redux";
export const Card = (props) => {
 
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.getData.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {props.getData.firstName} {props.getData.lastName}
        </h5>
        <p className="card-text">{props.getData.email}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
