import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  const addItem = function (inputText) {
    setItems((preItem) => [...preItem, inputText]);
  };

  const deleteItem = function (id) {
    setItems((preValue) => {
      return preValue.filter((_, index) => index !== id);
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
