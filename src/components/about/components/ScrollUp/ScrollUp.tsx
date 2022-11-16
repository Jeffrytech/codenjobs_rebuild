import React from "react";
import classes from "./ScrollUp.module.scss";

const ScrollUp = ({ text }) => {
  return (
    <div className={classes.scroll_up}>
      <h2 className={classes.scroll_up_text} >{text}</h2>
      <h2 className={classes.scroll_up_text} >{text}</h2>
    </div>
  );
};

export default ScrollUp;
