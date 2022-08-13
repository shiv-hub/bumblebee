import * as actionType from "constants/actionTypes";

const addComment = (data) => {
  return {
    type: actionType.ADD_COMMENT,
    data: data,
  };
};

export default addComment;
