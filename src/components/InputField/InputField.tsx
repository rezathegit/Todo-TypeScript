import React from 'react';
import "./InputField.css";

const InputField = () => {
  return (
    <form className="input">
        <input className="input__box" type="input" placeholder="What to do?"/>
        <button className="input_submit" type="submit">Add</button>
    </form>
  )
}

export default InputField