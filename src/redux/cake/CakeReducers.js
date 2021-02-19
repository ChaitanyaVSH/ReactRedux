import { BUY_CAKE } from "./CakeTypes"



// InitialState
const defaultState = {
    numberOfCakes: 10
}

const cakeReducer = (state = defaultState, action) => {

    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: (state.numberOfCakes ? state.numberOfCakes - 1: 0)
            }
        default:
            return state;
    }

}

export default cakeReducer;
