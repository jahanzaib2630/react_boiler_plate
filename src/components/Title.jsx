import React from "react";
import { useSelector } from "react-redux";
export const Title = (props) => {
  
  return (
    <div>
      <h1>{props.getData.domain}</h1>
    </div>
  );
};
