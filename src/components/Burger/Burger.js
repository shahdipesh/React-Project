import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
    return [...Array(props.ingredients[igkey])].map((i) => {
      return <BurgerIngredient type={igkey} />
    });
  }) .reduce((arr,el)=>{
   return arr.concat(el)
},[])

if (transformedIngredients.length==0){
    transformedIngredients=(<p>Please add Ingredients</p>)
}

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default Burger;
