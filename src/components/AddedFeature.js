import React from "react";
import { removeItem } from "../actions/action";

const AddedFeature = props => {
  console.log(props);
  const handleClick = e => {
    e.preventDefault();
    props.removeItem(props.feature);

    //remove item
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
