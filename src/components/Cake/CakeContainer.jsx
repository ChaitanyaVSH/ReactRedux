import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux";
import styles from "./Cake.module.css";

const CakeContainer = (props) => {
    return(
        <div className={styles.div}>
            <h2>Number of Cakes {props.numberOfCakes}</h2>
            <button className={styles.btn} onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      numberOfCakes: state.numberOfCakes
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
