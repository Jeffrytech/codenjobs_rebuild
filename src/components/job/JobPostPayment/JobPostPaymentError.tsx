import React from "react";

import { Box } from "@mui/material";

import Modal from "@mui/material/Modal";

// require("@solana/wallet-adapter-react-ui/styles.css");

import Typography from "@mui/material/Typography";
import { red, white } from "../../../design/colors";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "18rem",
  // bgcolor: "background.paper",
  background: white,
  border: `1px solid ${red}`,
  borderRadius: "0.5rem",
  // borderRadius: "0.1rem",
  boxShadow: 12,
  // boxShadow: 24,
  p: 5,

  minWidth: "12rem",
  padding: "2rem",
  maxWidth: "18rem",
};

// Extract this?
function JobPostPaymentError({ 
  showError,
  closeModal,
  title, message, open, 
  button = null,
}) {
  // alert(button);

  if (showError) {

    return (
      <div>
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="job-post-payment-error"
          aria-describedby="job-post-payment-error"
        >
          <Box sx={modalStyle}>
            <Typography
              color={red}
              id="job-post-payment-error-title"
              variant="h6"
              component="h2"
            >
              {title}
            </Typography>

            <Typography
              color="black"
              id="job-post-payment-error-message"
              sx={{ 
                mt: 2,
                wordBreak: "break-all",
              }}
            >
              {message}
            </Typography>

            {button}
          </Box>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
}

export default JobPostPaymentError;

