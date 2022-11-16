import React, { useState } from "react";

import ErrorIcon from "@material-ui/icons/Error";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";
import { 
  Button, 
  // InputLabel 
} from "@material-ui/core";

import { portfolioDescriptionMaxLength, portfolioTitleMaxLength } from "../../../validators/maxLengths";

import {
  PortfolioImageWrapper,
  PortfolioImage,
} from "./UpdatePortfolioCSS";

const PortfolioForm = ({
  handleSubmit,
  handleChange,
  handleBlur,

  values,
  touched,
  errors,

  setFieldValue,

  profileImageThumbnail,
  setProfileImageThumbnail,

  // portFoliofoFormContent,
}) => {
  const {
    image,
    title,
    link,
    description,
  } = values;

  // alert(image);

  const [fileIsLarge, setFileIsLarge] = useState(false);
  const [fileSize, setFileSize] = useState(null);

  // const [fileInputId, setFileInputId] = useState(null);

  const handleClose = () => {
    setFileIsLarge(false);
  };

  const handleUpdatepPortfolioImage = async (e) => {
    if (e.currentTarget.files[0] && e.currentTarget.files[0].size) {
      // alert(e.currentTarget.files[0].size);
      const logoSize = e.currentTarget.files[0].size / 1024 / 1024; // 1MB

      // alert(fileSize);
      // e.currentTarget.files[0] = null;

      if (logoSize > 1) {
        // @ts-ignore
        document.getElementById("image").value = null;
        // setFileInputId(new Date().toString());

        setFileSize(logoSize);
        setFileIsLarge(true);

        // alert("File is too large");
      } else {
        setFieldValue("image", e.currentTarget.files[0]);
        const newProfileImageThumbnail = window.URL.createObjectURL(e.currentTarget.files[0]);
        setProfileImageThumbnail(newProfileImageThumbnail);

        // setFileInputId(new Date().toString());

        // portFoliofoFormContent.scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <label style={{
        display: "flex",
        // margin: "0.5rem 0 0.25rem 0",
        opacity: "0.7",
      }} htmlFor="image" >
        Portfolio Image *
      </label>
      
      <input
        id="image"
        name="image"
        type="file"
        accept="image/svg+xml, image/png, image/jpg, image/jpeg"
        multiple={false}

        required

        onChange={async (e) => {
          handleUpdatepPortfolioImage(e);
        }}

        hidden
      />

      {profileImageThumbnail && <label htmlFor="image" >
        <PortfolioImageWrapper>
          <PortfolioImage
            // id="portfolio-image-thumbnail"
            // name={name || ""}
            // name={""}
            // size="7rem"
            // Should handle later image was updated or not to save money.
            src={profileImageThumbnail}
          // src={logoThumbnail === null ? (logo || "") : logoThumbnail}
          />
        </PortfolioImageWrapper>
      </label>}

      <TextField
        placeholder="Your portfolio title"
        // autoFocus
        autoComplete="off"
        required

        inputProps={{
          maxLength: portfolioTitleMaxLength,

          pattern: "[a-zA-Z_]+",
        }}

        // error={(!!(email && email.length > 4 && touched.email && errors.email))}

        id="title"
        label="Title"
        type="text"

        onChange={handleChange}
        onBlur={handleBlur}
        value={title}

        // inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          marginTop: "1rem",
          // background: "#efefef",
        }}
      />

      <TextField
        placeholder="https://www.codenjobs.com"
        // autoFocus
        autoComplete="off"
        required

        error={(!!(link && link.length > 8 && touched.link && errors.link))}

        id="link"
        label="Link"
        type="url"

        onChange={handleChange}
        onBlur={handleBlur}
        value={link}

        // inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          // background: "#efefef",
        }}
      />

      {/* <LinkFieldErrorMessage
        formValue={link}
        formError={errors.link}
        formTouch={touched.link}
      /> */}

      <TextField
        placeholder="Help others find what it does"
        multiline
        rows={4}
        rowsMax={4}

        // autoFocus
        autoComplete="off"
        required

        inputProps={{
          maxLength: portfolioDescriptionMaxLength,

          pattern: "[a-zA-Z_]+",
        }}

        // error={(!!(email && email.length > 4 && touched.email && errors.email))}

        id="description"
        label="Description"
        type="text"

        onChange={handleChange}
        onBlur={handleBlur}
        value={description}

        // inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          // background: "#efefef",
        }}
      />

      {/* <label style={{
        display: "flex",
        margin: "0.5rem 0 0.25rem 0",
        opacity: "0.7",
      }} htmlFor="image" >
        Portfolio Image *
      </label>

      <Button
        style={{
          marginTop: "0.5rem",
          width: "100%",
        }}
        variant="contained"
        component="label"
      >
        <input
          id="image"
          name="image"
          type="file"
          accept="image/svg+xml, image/png, image/jpg, image/jpeg"
          multiple={false}

          required

          onChange={async (e) => {
            handleUpdatepPortfolioImage(e);
          }}
        />
      </Button> */}

      <Dialog
        open={fileIsLarge}
        onClose={handleClose}
        aria-labelledby="portfolio-image-file-size-error"
        aria-describedby="portfolio-image-file-size-error"
      >
        {/* Extract this and reuse RegisterEmailSend/index.tsx? */}
        <DialogTitle id="support-email">
          <div style={{
            display: "flex",
            alignItems: "center",
          }}>
            <ErrorIcon style={{
              fontSize: "1.5rem",
              color: "#ff1676",
            }} />
            <span style={{
              marginLeft: "0.25rem",
              color: "#ff1676",
            }} >
              File Size
              {/* Its filesize should be less than 1MB */}
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="portfolio-image-file-size-error-description">
            Your portfolio image file size is {fileSize && fileSize.toFixed(4)}MB. Please, use another file with its size less than 1MB.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default PortfolioForm;