import { useContext, useState } from "react";

import classes from "./Header.module.css";
import cartIcon from "./shoppingCart.jpeg";
import ModalListItem from "./ModalListItem";
import FoodContext from "../../context/items-context";

import { Button, Modal } from "antd";

const Header = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const foodCtx = useContext(FoodContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("Order Confirmed...");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickHandler = () => {
    showModal();
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
        <div className={classes.headerCartCount}>{foodCtx.totalAmount}</div>
      </button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="Cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="Order"
            type="primary"
            onClick={handleOk}
            loading={loading}
            disabled={foodCtx.amount === 0}
          >
            Order
          </Button>,
        ]}
      >
        <ModalListItem />
      </Modal>
    </header>
  );
};

export default Header;
