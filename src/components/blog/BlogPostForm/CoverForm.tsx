// Extract this file from the current folder and reuse?

import React, {
  useState,
  // useEffect
} from "react";

import { Avatar } from "baseui/avatar";

import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";

import axios from "axios";

// import {
//   nameMaxLength,
//   companyDescriptionMaxLength,
//   locationMaxLength,
//   urlMaxLength,

// } from "../../validators";

import {
  CoverInputLabel,
  CoverInput,
  CoverEditButton,

  BlogPostFormDetailText,
  // JobPostFormButton,
  BlogPostFormDeleteButton,

  CoverDetailWrapper,
  CoverDetail,
  CoverLabel,
  CoverImage,
} from "./BlogPostFormCSS";

// import { charactersLeft } from "../../form";
// import UrlOrEmailFormErrorMessage from "../../UrlOrEmailFieldErrorMessage";
// // import { API } from "../../../config/environment";

// import { findCompanyByNameForOwner } from "../../../api/privateCompany";
// import useDebouncedEffect from "../../useDebouncedEffect";

// // import { apiRequest } from "../../../../api/requests";

// import { COMPANY_NAME, COMPANY_WEBSITE } from "../../../config/environment";
import { useEffect } from "react";
import BlackPreview from "../../BlackPreivew";

const CoverForm = ({
  // handleChange,
  // handleBlur,
  // errors,
  // touched,
  setFieldValue,

  // id,
  cover, // This is from the server if it were not null
}) => {
  // if (cover === undefined) {
  //   return null;
  // }
  // alert(`server(${cover})`);

  const [fileIsLarge, setFileIsLarge] = useState(false);
  const [fileSize, setFileSize] = useState(null);

  const [fileInputId, setFileInputId] = useState(null);

  const handleClose = () => {
    setFileIsLarge(false);
  };

  const [coverThumbnail, setCoverThumbnail] = useState(null);

  const handleUpdateCoverThumbnail = async (e) => {
    // if (e.currentTarget.files.length > 0) {
    //   // Search more about this.
    //   const newLogoThumbnail = window.URL.createObjectURL(e.currentTarget.files[0]);
    //   setLogoThumbnail(newLogoThumbnail);
    // }
    if (e.currentTarget.files[0] && e.currentTarget.files[0].size) {
      // alert(e.currentTarget.files[0].size);
      const coverSize = e.currentTarget.files[0].size / 1024 / 1024; // 1MB

      // alert(fileSize);
      // e.currentTarget.files[0] = null;

      if (coverSize > 1) {
        // @ts-ignore
        document.getElementById("cover").value = null;
        setFileInputId(new Date().toString());

        setFileSize(coverSize);
        setFileIsLarge(true);

        // alert("File is too large");
      } else {
        setFieldValue("cover", e.currentTarget.files[0]);
        const newCoverThumbnail = window.URL.createObjectURL(e.currentTarget.files[0]);
        setCoverThumbnail(newCoverThumbnail);

        setFileInputId(new Date().toString());
      }
    }
  };

  const handleDeleteCoverThumbnail = async (e) => {
    // alert("delete called");
    
    // Should remvoe files also.
    e.preventDefault();
    // @ts-ignore
    document.getElementById("cover").value = null;
    setFieldValue("cover", null);
    setCoverThumbnail(null);

    setFileInputId(new Date().toString());
  };

  useEffect(() => {
    if (cover !== null && cover !==undefined) {
      // alert(cover);
    // if (cover !== null && cover !==undefined) {
    // if (cover !== null && cover !== null) {
      axios.get(cover, { responseType: "blob" }).then(response => {
        console.log(response);

        const coverfile = new File([response.data], "cover.png", { type: response.data.type });
        setFieldValue("cover", coverfile);
        setCoverThumbnail(cover);

        // setLogoThumbnail(`${API}/${logo}`);
        setFileInputId(new Date().toString());
      }).catch(error => {
        console.log("error");
        console.error(error);

        setFileInputId(new Date().toString());
      });
    }
  }, [cover]);

  // alert(cover); // url 
  // alert(coverThumbnail); // null;

  const showImage = (coverThumbnail || cover);
  
  // logo to cover later.
  return (
    <>
      <CoverDetailWrapper>
        <CoverDetail style={{
          marginRight: "auto",
        }}>
          <CoverLabel htmlFor="logo" >
            Cover
          </CoverLabel>
          <BlogPostFormDetailText>
            It can be .svg, .png or .jp(e)g
            {/* It can be .png, .jpg or .jpeg format */}
          </BlogPostFormDetailText>
        </CoverDetail>
        {
          // logo to cover
          (cover || coverThumbnail) && (
            // type="button" not to make cover deleted
            <BlogPostFormDeleteButton type="button" onClick={async (e) => {
              // setFieldValue("logo", null);
              handleDeleteCoverThumbnail(e);
            }} >
              Delete
            </BlogPostFormDeleteButton>
          )
        }
      </CoverDetailWrapper>

      <CoverInputLabel htmlFor="cover" >
        {showImage ? <CoverImage src={coverThumbnail || cover} /> : 
          <BlackPreview />
        }

        <CoverEditButton>
          <CreateIcon style={{
            fontSize: "1rem",
          }} />
        </CoverEditButton>
      </CoverInputLabel>

      <CoverInput
        id="cover"
        name="cover"
        type="file"
        accept="image/svg+xml, image/png, image/jpg, image/jpeg"
        multiple={false}

        onChange={async (e) => {
          // console.log(e.currentTarget.files[0]);
          
          handleUpdateCoverThumbnail(e);
        }}

        key={fileInputId || ""}
      />

      <Dialog
        open={fileIsLarge}
        onClose={handleClose}
        aria-labelledby="cover-file-size-error"
        aria-describedby="cover-file-size-error"
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
          <DialogContentText id="cover-file-size-error-description">
            Your cover file size is {fileSize && fileSize.toFixed(4)}MB. Please, use another file with its size less than 1MB.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CoverForm;