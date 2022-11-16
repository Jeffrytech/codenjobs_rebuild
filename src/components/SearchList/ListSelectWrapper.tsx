import { styled } from "baseui";
import { XXS } from "../../design/breakpoints";

const ListSelectWrapper = styled("div", () => {
  return {
    marginLeft: "0.5rem",
    marginRight: "1rem",

    [XXS]: {
      display: "none",
    }
  };
});

export default ListSelectWrapper;