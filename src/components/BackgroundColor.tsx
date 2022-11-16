import { styled } from "baseui";

const BackgroundColor = styled("div", ({
  // @ts-ignore
  $background
}) => {
  return {
    background: $background || "white",
  };
});

export default BackgroundColor;