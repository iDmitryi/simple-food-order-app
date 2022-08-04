import React, { useRef, useContext } from "react";
import FoodContext from "../../context/items-context";

import { Button, Form, Input, InputNumber, message } from "antd";
import classes from "./Admin.module.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Admin = (props) => {
  const formRef = useRef();
  const foodCtx = useContext(FoodContext);

  const onFinish = (values) => {
    console.log(values);
    foodCtx.setFood(values.food);
    foodCtx.setDescription(values.description);
    foodCtx.setPrice(values.price);
    message.info("Food Added");
    onReset();
  };

  const onReset = () => {
    formRef.current.resetFields();
  };
  const onFill = () => {
    formRef.current.setFieldsValue({
      food: "Pomana Porcului",
      description: "Ceva gen la friptura, nu am mai inteles pana la urma",
      price: 20.22,
    });
  };

  return (
    <section className={classes.admin}>
      <h1>Administration</h1>
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
        <Form.Item
          name="food"
          label="Food"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          className={classes.price}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Admin;
