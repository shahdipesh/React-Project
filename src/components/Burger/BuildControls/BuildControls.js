import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

var controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: {props.price}</p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
          ></BuildControl>
        );
      })}
      <button className={classes.OrderButton} 
      disabled={props.orderBtn} 
      onClick={props.purchaseHandler}
      >ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
