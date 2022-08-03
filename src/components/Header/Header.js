import classes from "./Header.module.css";
import cartIcon from "./shoppingCart.jpeg";

const Header = (props) => {
  const onClickHandler = () => {
    alert("implement MODAL here");
  };
  return (
    <header className={classes.header}>
      <div className="header-logo">
        <h2>ReactMeals</h2>
      </div>
      <div className="header-container"></div>
      <div className={classes.headerCart} onClick={onClickHandler}>
        <img
          src={cartIcon}
          alt="cart image"
          className={`${classes.headerCartIcon}`}
        />
        <p>Your Cart</p>
        <div className={classes.headerCartCount}>5</div>
      </div>
    </header>
  );
};

export default Header;
