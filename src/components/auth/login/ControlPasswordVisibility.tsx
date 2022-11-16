import React from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ControlPasswordVisiblityWrapper } from "./LoginCSS";

const ControlPasswordVisiblity = ({
  handleClickShowPassword,
  // handleMouseDownPassword,
  showPassword,
}) => {
  return (
  // <IconButton
  //   aria-label="toggle password visibility"
  // onClick={handleClickShowPassword}
  // onMouseDown={handleMouseDownPassword}
  //   edge="end"
  // >
    <ControlPasswordVisiblityWrapper
      // $showPassword={showPassword}
      onClick={handleClickShowPassword}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </ControlPasswordVisiblityWrapper>
  // {showPassword ? <Visibility /> : <VisibilityOff />}

  // </IconButton>
  );
};

export default ControlPasswordVisiblity;
