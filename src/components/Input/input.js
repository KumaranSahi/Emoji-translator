import React from "react";
import classes from "./input.module.css";

const input = (props) => {
  return (
    <input
      placeholder="Type an emoji"
      onChange={(event) => props.emojiAdded(event)}
      className={classes.emojiInput}
    ></input>
  );
};

export default input;
