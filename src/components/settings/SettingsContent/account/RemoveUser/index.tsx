import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import useRemoveUserForm from "./useRemoveUserForm";
import RemoveUserForm from "./RemoveUserForm";
import { COMPANY_NAME } from "../../../../../config/environment";

const RemoveUser = ({
  removeUser,
  setRemoveUser,
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
  } = useRemoveUserForm(setRemoveUser);

  const handleClose = () => {
    resetForm();
    setRemoveUser(false);
  };

  return (
    <Dialog open={removeUser} onClose={handleClose} aria-labelledby="Delete account">
      {/* Include image here */}
      <div style={{
        minHeight: "21rem",
      }}>
        <DialogTitle id="delete-account">
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
              Delete Your Account
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Type your username and password to remove your account.
          </DialogContentText>

          {/* Extract this to change password form */}
          {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */}

          <RemoveUserForm
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
            color="secondary"
          >
            Confirm
          </Button>
        </DialogActions>
      </div>
      
    </Dialog>
  );
};

export default RemoveUser;

// variant="Standard"
// variant="filled"