import { useState, useEffect } from "react";

export default function useOnVisible(options) {
  const [ref, setRef] = useState(false);
  const [appearClass, setAppearClass] = useState("");
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAppearClass("showNow");
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, appearClass];
}
