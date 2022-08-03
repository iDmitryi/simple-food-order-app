import { useRef } from "react";

import Item from "./Item";

import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const inputRef = useRef();

  const onChangeInputHandler = (e) => {
    console.log(inputRef.current.value);
  };

  const onClickEventHandler = () => {
    alert(inputRef.current.value);

    inputRef.current.value = "1";
  };

  return (
    <li className={classes.listItem}>
      <div className={classes.listItemContent}>
        <Item />
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
          <button onClick={onClickEventHandler}>Add</button>
        </div>
      </div>
      <hr></hr>
    </li>
  );
};

export default ListItem;
