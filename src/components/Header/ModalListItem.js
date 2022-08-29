import { useContext } from "react";

import Item from "../Main/Item";
import FoodContext from "../../context/items-context";

import classes from "./ModalListItem.module.css";
import { Button } from "antd";

const ModalListItem = (props) => {
  const foodCtx = useContext(FoodContext);

  const onPlusHandler = () => {
    foodCtx.setAmount(parseInt(foodCtx.amount) + 1);
    const foodArray = [];
    foodArray.unshift(foodCtx);
  };

  const onMinusHandler = () => {
    foodCtx.amount < 1 ? null : foodCtx.setAmount(parseInt(foodCtx.amount) - 1);
    const foodArray = [];
    foodArray.unshift(foodCtx);
  };

  return (
    <li className={classes.listItem}>
      <div className={classes.listItemContent}>
        <Item food={foodCtx.food} price={foodCtx.price} />
        <code className={classes.listItemAmount}>{foodCtx.amount}</code>
        <div className={classes.listItemShop}>
          <Button onClick={onMinusHandler}>-</Button>
          <Button onClick={onPlusHandler}>+</Button>
        </div>
      </div>
      <hr></hr>
    </li>
  );
};

export default ModalListItem;
