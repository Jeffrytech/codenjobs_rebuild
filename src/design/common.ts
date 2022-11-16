import { DESKTOP, XS } from "./breakpoints";
import { shadowBlue } from "./colors";

const boxShadow = "rgba(0, 0, 0, 0.1) 0px 0 0.1rem 0px";

// Use at /message
const messageBoxShadow = "rgba(0, 0, 0, 0.1) 0px 0.1rem 0.1rem 0px";

const notificationBoxShadow = "rgba(0, 0, 0, 0.1) 0px 0.1rem 0.1rem 0px";

const buttonPad = "1rem 2rem";
const mobileButtonPad = "0.8rem 1.25rem";

const card = {
  boxShadow,
  color: shadowBlue,
    
  flexShrink: 0,
  borderRadius: "0.5rem",
  marginBottom: "2rem",
  backgroundColor: "white",

  [XS]: {
    // [DESKTOP]: {
    marginBottom: "1rem",
  }
};

const hover = {
  cursor: "pointer",
  opacity: 0.7,
  transition: "all 0.2s",
};

const disabled = {
  opacity: "0.7 !important",
  cursor: "not-allowed !important",
};

export {
  boxShadow,
  messageBoxShadow,
  notificationBoxShadow,

  buttonPad,
  mobileButtonPad,

  card,

  hover,
  disabled,
};