import { useRef, useContext } from "react";

import Item from "./Item";
import FoodContext from "../../context/items-context";

import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const inputRef = useRef();
  const foodCtx = useContext(FoodContext);

  const onChangeInputHandler = (e) => {
    console.log(inputRef.current.value);
  };

  const onAddHandler = () => {
    foodCtx.setAmount(
      parseInt(foodCtx.amount) + parseInt(inputRef.current.value)
    );
    const foodArray = [];
    foodArray.unshift(foodCtx);
    console.log({ foodArray });

    inputRef.current.value = "1";
  };

  return (
    <li className={classes.listItem}>
      <div className={classes.listItemContent}>
        <Item
          food={foodCtx.food}
          description={foodCtx.description}
          price={foodCtx.price}
        />
        <div className={classes.listItemShop}>
          <div className={classes.listItemShopLabel}>
            <label>Amount</label>
            <input
              ref={inputRef}
              type="number"
              min="1"
              defaultValue="1"
              onChange={onChangeInputHandler}
            />
          </div>
          <button onClick={onAddHandler}>Add</button>
        </div>
      </div>
      <hr></hr>
    </li>
  );
};

export default ListItem;
