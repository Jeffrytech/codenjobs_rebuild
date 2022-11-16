import React, { useState } from "react";

import LinkIcon from "@material-ui/icons/Link";

import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarContent } from "@material-ui/core";
import SolanaImage from "../../../../../../crypto/SolanaImage";

const SnackbarNotification = ({
  message = null,
    
  snackbarOpen,
  setSnackbarOpen,
}) => {
    

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}

      open={snackbarOpen}
      autoHideDuration={2800}
      onClose={handleSnackbarClose}
    >
      <SnackbarContent style={{
        // backgroundColor: "#efefef",
        // color: "rgb(17, 160, 245)",
        color: "#efefef",
        backgroundColor: "rgb(17, 160, 245)",
      }}
      message={
        <div id="client-snackbar" style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}>
          {/* @ts-ignore */}
          <LinkIcon
            size={"1rem"}
            round={true}
          />
          <span style={{
            marginLeft: "0.25rem",
            marginRight: "auto",
          }}>
            {message || "Saved it as your main NFT"}
          </span>
        </div>
      }
      />
    </Snackbar>
  );
};

export default SnackbarNotification;