import classes from "./Banner.module.css";

const Banner = (props) => {
  return (
    <section className={classes.banner}>
      <div className={classes.bannerInfo}>
        <h2>
          <code>Delicious Food, Delivered To You</code>
        </h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default Banner;
