import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setNote((preNote) => {
      return { ...preNote, [name]: value };
    });
  };

  const submitNote = function (e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  };

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
