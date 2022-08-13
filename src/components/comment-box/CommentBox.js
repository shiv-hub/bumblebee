import React, { useState } from "react";
import { connect } from "react-redux";
import addComment from "actions/commentAction";

export function CommentBox(props) {
  const [inputField, setInputField] = useState("");
  const onChangeHandler = (event) => {
    setInputField(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event?.preventDefault();
    setInputField("");
    console.log("formSubmitHandler : ", inputField);
    props.addComment(inputField);
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="Form">Simple Form :</label>
        <br />
        <input type="text" onChange={onChangeHandler} value={inputField} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h3>
        <ul>
          {props &&
            props.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
        </ul>
      </h3>
    </>
  );
}

function mapStateToProps(state) {
  return {
    comments: state.commentReducer.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (data) => dispatch(addComment(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
