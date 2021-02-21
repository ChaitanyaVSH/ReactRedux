import { BUY_ICECREAM } from "./IceCreamTypes"

// InitialState
const defaultState = {
    numberOfIceCreams: 200
}

const iceCreamReducer = (state = defaultState, action) => {

    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1,
            }
        default:
            return state
    }

}

export default iceCreamReducer;
