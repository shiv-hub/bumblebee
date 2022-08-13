import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({name:"",pwd:""});
  const validationHanlder = (e) => {
    e.preventDefault();
    console.log("validationHanlder called",inputs);
    setInputs(values=>({...values,name : "",pwd : ""}));
  };

  const handleInputs=(event)=>{
     const name = event.target.name;
    const value = event.target.value;
    // console.log("HandleInputs target : ",event.target);
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={validationHanlder}>
      <label>UserName : </label>
      <input type="text" name="name" value={inputs.name} onChange={handleInputs}/>
      <br />
      <label>Password : </label>
      <input type="text" name="pwd" value={inputs.pwd} onChange={handleInputs}/>
      <br />
      <input type="submit"/>
    </form>
  );
};

export default Form;