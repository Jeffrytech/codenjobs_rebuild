import React, { useEffect, useState } from "react";
import useOnVisible from "../../hooks/useOnVisible";

import styles from  "./RiseIn.module.scss";

const RiseIn = ({ text, delay }) => {
  const options = {
    rootMargin: "0px 0px -150px 0px",
  };
  const [setRef, appearClass] = useOnVisible(options);
  const [show, setShow] = useState(false);

  useEffect(() => {
    appearClass === "showNow" ? setShow(true): setShow(false);
  },[appearClass]);


  return (
    // @ts-ignore
    <div ref={setRef} className={`${styles.RiseIn}`}>
      <h1 className={` ${styles.RiseIn}  ${show && styles.showNow}`} style={{ animationDelay: delay }}>{text}</h1>
    </div>
  );
};

export default RiseIn;
