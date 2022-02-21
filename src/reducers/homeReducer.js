import * as actionType from "constants/actionTypes";
const initialState = {
    counter: 0
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}
export default homeReducer;