import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { white } from "../../../design/colors";

const JobHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "1.5rem",

  [XS]: {
    flexFlow: "column-reverse",
    alignItems: "flex-start",
  },
});

const JobListState = styled("span", {
  [MOBILE]: {
    display: "none",
  }
});

const JobListForNotOwnerHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    padding: "1rem 0.5rem 1rem 2rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    borderRadius: "0.5rem 0.5rem 0 0",

    [DESKTOP]: {
      textAlign: "center"
    },
    [XS]: {
      padding: "1rem 0 1rem 1.25rem",
    }
  };
});

export {
  JobHeader,

  JobListState,

  JobListForNotOwnerHeader,
};