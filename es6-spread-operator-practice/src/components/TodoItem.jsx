import React from "react";

const TodoItem = function (props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.item}</li>
    </div>
  );
};

export default TodoItem;
