import * as actionType from "constants/actionTypes";

const initialState = {
  comments: [],
};
const commentReducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log("Reducer1 => comment:", action.data);
  switch (action.type) {
    case actionType.ADD_COMMENT:
      console.log("Reducer2 => comment:", action.data);
      newState.comments.push(action.data);
      return { ...newState };
    default:
      return { ...newState };
  }
};
export default commentReducer;
