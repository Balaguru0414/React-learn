import React, { useState } from "react";

const InputArea = function (props) {
  const [inputText, setInputText] = useState("");

  const handleChange = function (e) {
    const { value } = e.target; // newValue = e.target.value
    setInputText(value);
  };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
