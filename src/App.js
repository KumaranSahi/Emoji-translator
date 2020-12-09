import React, { useState } from "react";
import "./styles.css";

import Input from "./components/Input/input";
import AnimalList from "./components/AnimalList/AnimalList";

const emojiDictionary = {
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐖": "Pig",
  "🐐": "Goat",
  "🐘": "Elephant"
};

export default function App() {
  const [animalName, setAnimalName] = useState("");

  const emojiAdded = (event) => {
    if (event.target.value !== "") {
      if (emojiDictionary[event.target.value])
        setAnimalName(emojiDictionary[event.target.value]);
    }
  };

  const emojiClicked = (emoji) => {
    if (emojiDictionary[emoji]) setAnimalName(emojiDictionary[emoji]);
  };

  return (
    <div className="App">
      <h1>The animal guide</h1>
      <h2>Confused with animal emojis?</h2>
      <h2>Lemme help you out! </h2>
      <h3>
        Just drop your emoji down bellow or click on any emoji bellow that!
      </h3>
      <Input emojiAdded={(event) => emojiAdded(event)} />
      {animalName.length !== 0 ? <h3>Its a {animalName} !</h3> : null}
      <AnimalList
        emojiDictionary={emojiDictionary}
        emojiClicked={(emoji) => emojiClicked(emoji)}
      />
      <button className="clear-button" onClick={() => setAnimalName("")}>
        Clear
      </button>
    </div>
  );
}
