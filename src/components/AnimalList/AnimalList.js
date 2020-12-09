import React from "react";
import classes from "./AnimalList.module.css";

const animalList = (props) => {
  return (
    <div className={classes.animalListContainer}>
      {Object.keys(props.emojiDictionary).map((emoji) => (
        <span
          key={emoji}
          onClick={() => props.emojiClicked(emoji)}
          className={classes.emojiStyle}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default animalList;
