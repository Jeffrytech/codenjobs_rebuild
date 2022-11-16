import React from "react";
import { Tooltip } from "@material-ui/core";

const Required = ({
  color = "#ff7676",
}) => {
  return (
    <Tooltip title="This is required field." arrow>
      <span style={{
        color,
      }}>*</span>
    </Tooltip>
  );
};

export default Required;