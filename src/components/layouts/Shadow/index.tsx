// Use layout context or somethign here later.

import { useShadow } from "../../../contexts/shadow";

import React from "react";
import ShadowContainer from "./ShadowCSS";

const Shadow = () => {
  // @ts-ignore
  const { showShadow } = useShadow();
  // alert(showShadow);

  return showShadow ? <ShadowContainer id="shadow" /> : null;
};

export default Shadow;