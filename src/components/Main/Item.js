import classes from "./Item.module.css";
import AuthContext from "../../context/items-context";

const Item = (props) => {
  return (
    <div className={classes.itemInfo}>
      <h4>Sushi</h4>
      <p>Finest fish and veggies</p>
      <code>$22.99</code>
    </div>
  );
};

export default Item;
