import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../../redux";
import styles from "./Cake.module.css";

const HooksCakeContainer = () => {

    // useSelector() takes function called SelectorFunction as a parameter
    // This recieves the redux state as argument, This function can return values
    const numberOfCakes = useSelector(state  => state.cake.numberOfCakes)

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cakes {numberOfCakes}</h2>
            <button className={styles.btn} onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
