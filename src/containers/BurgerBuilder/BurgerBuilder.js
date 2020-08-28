import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 2,
  bacon: 2,
  cheese: 1,
  meat: 3,
};


class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    price: 3,
    orderDisabled : true
  };

  disabler=(totalPrice)=>{
    if (totalPrice>3){
        this.setState({orderDisabled : false})
        }  
        else {
            this.setState({orderDisabled : true})
        }
}


  addIngredientHandler = (type) => {
    var oldCount = this.state.ingredients[type];
    var updatedCount = oldCount + 1;
    var updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    var oldPrice = this.state.price;
    var itemPrice = INGREDIENT_PRICES[type];
    var totalPrice = oldPrice + itemPrice;
    this.setState({ ingredients: updateIngredients, price: totalPrice });
    this.disabler(totalPrice)
  };

  removeIngredientHandler = (type) => {
    var oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
        return;
    }
    var updatedCount = oldCount - 1;
      var updateIngredients = { ...this.state.ingredients };
      updateIngredients[type] = updatedCount;
      var oldPrice = this.state.price;
      var itemPrice = INGREDIENT_PRICES[type];
      var totalPrice = oldPrice - itemPrice;
      this.setState({ ingredients: updateIngredients, price: totalPrice });
      this.disabler(totalPrice);
  };


  render() {

    var disabledInfo = {...this.state.ingredients}

    for (let x in disabledInfo){
        disabledInfo[x]= disabledInfo[x]<=0;
    }

    return (
      <React.Fragment>
         
        <Burger ingredients={this.state.ingredients}></Burger>
        Price: {this.state.price}
        <BuildControls
          price={this.state.price}
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled = {disabledInfo}
          orderBtn = {this.state.orderDisabled}
        ></BuildControls>
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
