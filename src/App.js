import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import styles from "./App.module.css";
import CakeContainer from "./components/Cake/CakeContainer";

const App = () => {
  return(
    <Provider store={store}>
      <div className={styles.App}>
          <h1>Welcome to My world</h1>
          <CakeContainer/>
      </div>
    </Provider>
    
  )
}

export default App;
