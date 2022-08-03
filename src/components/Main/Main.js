import ListItem from "./ListItem";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <section className={classes.main}>
      <ul className={classes.mainList}>
        <ListItem />
      </ul>
    </section>
  );
};

export default Main;
