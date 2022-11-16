// Extract these later?
import { useEffect, useRef } from "react";

export const useMountEffect = fun => useEffect(fun, []);

export const useOnOutsideClick = handleOutsideClick => {
  const innerBorderRef = useRef();

  const onClick = event => {
    if (
      innerBorderRef.current &&
            // @ts-ignore
            !innerBorderRef.current.contains(event.target)
    ) {
      console.log("event");
      console.log(event);
            
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

