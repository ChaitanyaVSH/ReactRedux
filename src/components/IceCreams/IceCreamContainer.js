import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../../redux/icecream/IceCreamActions"
import styles from "./IceCream.module.css";

const IceCreamContainer = () => {

    // useSelector to get the NumberOfIceCreams
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)

    // useDispatch to get the reference to the dispatch method of the store
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of IceCreams {numberOfIceCreams}</h2>
            <button className={styles.btn} onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer;
