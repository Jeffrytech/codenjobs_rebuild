import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import useChangePasswordForm from "./useChangePasswordForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { COMPANY_NAME } from "../../../../../config/environment";

const ChangePassword = ({
  changePassword,
  setChangePassword,
}) => {
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
  } = useChangePasswordForm(setChangePassword);

  const handleClose = () => {
    resetForm();
    setChangePassword(false);
  };

  return (
    <Dialog open={changePassword} onClose={handleClose} aria-labelledby="change-password">
      {/* Include image here */}
      <div style={{
        // minHeight: "18rem",
        minHeight: "21rem",
        // minHeight: "25rem",
      }}>
        <DialogTitle id="change-password">
          <div style={{
            //  display: "flex",
            //  alignItems: "center",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}>
            <Avatar
              alt={COMPANY_NAME}
              src="/static/logo.png"
            />
            <span style={{
              marginLeft: "0.5rem"
            }}>
              Update Password
              {/* New Password */}
              {/* Update Your Password */}
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {/* You will need to login again with a new password after you change your current one. */}
            Saving your new password will log you out. Please, login again after that.
          </DialogContentText>

          {/* Extract this to change password form */}
          {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */}

          <ChangePasswordForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}

            values={values}
            errors={errors}
            touched={touched}
          />

        </DialogContent>
        <DialogActions>
          <Button
            disabled={isSubmitting}
            onClick={handleClose}
            color="primary"
          >
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

export default ChangePassword;

// variant="Standard"
// variant="filled"