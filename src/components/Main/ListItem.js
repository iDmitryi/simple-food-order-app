import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li className={classes.listItem}>
      <div className={classes.listItemContent}>
        <div className={classes.listItemInfo}>
          <h4>Sushi</h4>
          <p>Finest fish and veggies</p>
          <code>$22.99</code>
        </div>
        <div className={classes.listItemShop}>
          <div className={classes.listItemShopLabel}>
            <label>Amount</label>
            <input type="number" value="1" />
          </div>
          <button onClick={() => alert("implement ADD Item logic")}>Add</button>
        </div>
      </div>
      <hr></hr>
    </li>
  );
};

export default ListItem;
