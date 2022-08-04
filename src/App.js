import { useContext } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Admin from "./components/Admin/Admin";
import FoodContext from "./context/items-context";

import "./App.css";

function App() {
  const foodCtx = useContext(FoodContext);
  return (
    <div className="App">
      <Header />
      {foodCtx.isAdmin ? (
        <Admin />
      ) : (
        <>
          {" "}
          <Banner />
          <Main />{" "}
        </>
      )}
    </div>
  );
}

export default App;
