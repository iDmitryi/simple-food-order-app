import { useContext, useEffect } from "react";

import classes from "./Header.module.css";
import cartIcon from "./shoppingCart.jpeg";
import FoodContext from "../../context/items-context";
import Admin from "../Admin/Admin";

const Header = (props) => {
  const foodCtx = useContext(FoodContext);

  const onClickHandler = () => {
    alert("implement MODAL here");
  };

  const onAdminClickHandler = () => {
    foodCtx.setIsAdmin(true);
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
        <button onClick={() => foodCtx.setIsAdmin(false)}>
          <h2>ReactMeals</h2>
        </button>
      </div>
      <div className={classes.headerContainer}>
        <button onClick={onAdminClickHandler}>admin</button>
      </div>
      <button className={classes.headerCart} onClick={onClickHandler}>
        <img
          src={cartIcon}
          alt="cart image"
          className={`${classes.headerCartIcon}`}
        />
        <p>Your Cart</p>
        <div className={classes.headerCartCount}>{foodCtx.amount}</div>
      </button>
    </header>
  );
};

export default Header;
