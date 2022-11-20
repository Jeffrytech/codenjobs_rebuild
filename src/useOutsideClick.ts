// Extract these later?
import React, { MutableRefObject, useEffect, useRef } from "react";

export const useMountEffect = (fun) => useEffect(fun, []);

export const useOnOutsideClick = (handleOutsideClick) => {
  const innerBorderRef = useRef(null);

  const onClick = (event) => {
    if (
      innerBorderRef.current &&
      !innerBorderRef.current.contains(event.target)
    ) {
      handleOutsideClick();
    }
  };

  useMountEffect(() => {
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  });

  return { innerBorderRef };
};
