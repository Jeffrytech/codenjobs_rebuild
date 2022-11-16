import React from "react";

import { Box } from "@mui/material";

import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import { red, white } from "../design/colors";

import { useErrorNotification } from "../contexts/errorNotification";

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

  // padding: "1.5rem 1.5rem 1.25rem 1.5rem",
  // padding: "1.5rem 1.5rem 1.5rem 1.5rem",
  padding: "1.5rem 1.5rem 1.5rem 1.5rem",

  minWidth: "16rem",
  maxWidth: "18rem",

  width: "18rem",
};

// Extract this?
function ErrorNotification() {
  // @ts-ignore
  const { errorNotification, setErrorNotification } = useErrorNotification();

  const closeModal = () => {
    setErrorNotification({
      ...errorNotification,
      show: false,
    });
  };

  return (
    <div
      id="error-notification"
    >
      <Modal
        open={errorNotification.show}
        onClose={closeModal}
        aria-labelledby="error-notification"
        aria-describedby="error-notification"
      >
        <Box sx={modalStyle}>
          <Typography
            color={red}
            id="error-notification-title"
            variant="h6"
            component="h2"
            sx={{
              wordBreak: "break-all",
            }}
          >
            {errorNotification.title}
          </Typography>

          <Typography
            color="black"
            id="error-notification-message"
            sx={{ 
              mt: 1,
              wordBreak: "break-all",
            }}
          >
            {errorNotification.message}
          </Typography>
          
          {errorNotification.button}

          {/* <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",

            marginTop: "0.25rem",
          }} >
            <Button
              onClick={closeModal}
              color="primary"
            >
              Close
            </Button>
          </div> */}
        </Box>

      </Modal>
    </div>
  );
}

export default ErrorNotification;

