import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.itemInfo}>
      <h4>{props.food}</h4>
      <p>{props.description}</p>
      <div>
        $ <code>{props.price}</code>
      </div>
    </div>
  );
};

export default Item;
