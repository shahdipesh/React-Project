import React from "react";

const OrderSummary = (props) => {
  var ingredients = {
    ...props.ingredients,
  };

  return (
    <div>
      Your Order Summary:
      <ul>
          {Object.keys(ingredients).map((ingredientName)=>{
              return <li>{ingredientName}: {ingredients[ingredientName]}</li>
          })}
          
          </ul>
    </div>
  );
};

export default OrderSummary;
