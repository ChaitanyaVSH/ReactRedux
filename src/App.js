import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import styles from "./App.module.css";
import CakeContainer from "./components/Cake/CakeContainer";
import HooksCakeContainer from "./components/Cake/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreams/IceCreamContainer";
import Card from "./components/Experimental/Card";

const App = () => {
  return(
    <Provider store={store}>
      <div className={styles.App}>
          <h1>Welcome to My world</h1>
          <CakeContainer/>
          <HooksCakeContainer/>
          <IceCreamContainer/>
          {/* <Card/> */}
      </div>
    </Provider>
    
  )
}

export default App;
