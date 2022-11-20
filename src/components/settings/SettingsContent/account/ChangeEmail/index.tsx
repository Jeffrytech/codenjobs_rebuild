import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import useChangeEmailForm from "./useChangeEmailForm";
import ChangeEmailForm from "./ChangeEmailForm";

import { COMPANY_NAME } from "../../../../../config/environment";

const ChangeEmail = ({ email, changeEmail, setChangeEmail }) => {
  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    // setFieldValue,
    // setValues,
    // setFieldTouched,

    isSubmitting,
    submitForm,

    resetForm,
  } = useChangeEmailForm(email, setChangeEmail);

  const handleClose = () => {
    resetForm();
    setChangeEmail(false);
  };

  // Refer to its API
  // https://material-ui.com/pt/components/dialogs/
  return (
    <Dialog
      open={changeEmail}
      onClose={handleClose}
      aria-labelledby="change-email"
      // fullScreen={true}

      // style={{
      //   minHeight: "8rem",
      // }}
    >
      <div
        style={{
          minHeight: "16rem",
          // minHeight: "21rem",
        }}
      >
        {/* Include image here */}
        <DialogTitle id="change-email">
          <div
            style={{
              //  display: "flex",
              //  alignItems: "center",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar alt={COMPANY_NAME} src="/static/logo.svg" />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Update Your Email
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {/* You will need to login again with a new password after you change your current one. */}
            Saving your new email will log you out. Then, we will send a
            notification to it in a few minutes.
            {/* Please, confirm it and login again. */}
          </DialogContentText>

          {/* Extract this to change password form */}
          {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */}

          <ChangeEmailForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={isSubmitting} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={isSubmitting}
            onClick={(e) => {
              e.preventDefault();

              submitForm();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default ChangeEmail;

// variant="Standard"
// variant="filled"
