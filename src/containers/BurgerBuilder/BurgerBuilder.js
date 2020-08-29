import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/orderSummary/orderSummary";

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
    orderDisabled: true,
    purchasing: false,
  };

  disabler = (totalPrice) => {
    if (totalPrice > 3) {
      this.setState({ orderDisabled: false });
    } else {
      this.setState({ orderDisabled: true });
    }
  };

  addIngredientHandler = (type) => {
    var oldCount = this.state.ingredients[type];
    var updatedCount = oldCount + 1;
    var updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    var oldPrice = this.state.price;
    var itemPrice = INGREDIENT_PRICES[type];
    var totalPrice = oldPrice + itemPrice;
    this.setState({ ingredients: updateIngredients, price: totalPrice });
    this.disabler(totalPrice);
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

  purchaseHandler = () => {
    console.log(this.setState({ purchasing: true }));
  };
  closePurchaseHandler = () => {
    console.log(this.setState({ purchasing: false }));
  };
  orderConfirmationHandler=()=>{
      alert("Success")
  }

  render() {
    var disabledInfo = { ...this.state.ingredients };

    for (let x in disabledInfo) {
      disabledInfo[x] = disabledInfo[x] <= 0;
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}></Burger>
        {this.state.purchasing ? (
          <Modal modalClosed={this.closePurchaseHandler}>
            <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
            <button onClick={this.closePurchaseHandler}>Cancel</button>
            <button onClick={this.orderConfirmationHandler}>Purchase</button>
          </Modal>
        ) : null}
        Price: {this.state.price}
        <BuildControls
          price={this.state.price}
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          orderBtn={this.state.orderDisabled}
          purchaseHandler={this.purchaseHandler}
        ></BuildControls>
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
