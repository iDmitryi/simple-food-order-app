import React, { useState } from "react";

const FoodContext = React.createContext();

export const FoodProvider = (props) => {
  const [food, setFood] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <FoodContext.Provider
      value={{
        food,
        setFood,
        price,
        setPrice,
        description,
        setDescription,
        amount,
        setAmount,
        isAdmin,
        setIsAdmin,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
