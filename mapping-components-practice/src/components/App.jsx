import React from "react";
import emojiPedia from "../emojipedia";
import Entry from "./Entry";

const createEntry = function (emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiPedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
