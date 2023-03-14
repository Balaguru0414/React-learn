import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = function (newNote) {
    setNotes((preNotes) => [...preNotes, newNote]);
  };

  const deleteNote = function (id) {
    setNotes((preNotes) => {
      return preNotes.filter((_, index) => index !== id);
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
