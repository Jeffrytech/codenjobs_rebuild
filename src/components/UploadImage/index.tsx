import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { RiImageFill, RiFileCopy2Fill } from "react-icons/ri";
import { FileListButton, PreviewTheImage, ToClipboard, UploadImageContainer, UploadImageInput, UploadImageLabel } from "./UploadImageCSS";

import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ViewListIcon from '@material-ui/icons/ViewList';

import ExternalLink from "../ExternalLink";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Button } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";

import useUploadImageForm from "./useUploadImageForm";
import UploadImageErrorMessage from "../error/UploadImageErrorMessage";
import { useAuth } from "../../contexts/auth";
import { useSavedLinkToClipboard } from "../../contexts/savedLinkToClipboard";
import SavedLinkToClipboard from "../SavedLinkToClipboard";
import { uploadFile } from "../../api/privateFile";
import FileListSidebar from "../file/FileListSidebar";
import copyToClipboard from "../../browser/copyToClipboard";

const UploadImage = ({
  useMarkdown,
  showFileListSidebar, setShowFileListSidebar,
}) => {
  // @ts-ignore
  const { user } = useAuth();

  // @ts-ignore
  const { setSnackbarOpen } = useSavedLinkToClipboard();

  const {
    // handleSubmit,

    // handleChange,
    // handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,
    // setFieldTouched,
    setFieldError,

    isSubmitting,
    submitForm,
  } = useUploadImageForm();

  const {
    imageFile,
    imagePath,
    imageId,
  } = values;

  const [fileIsLarge, setFileIsLarge] = useState(false);
  const [fileSize, setFileSize] = useState(null);

  const handleDialogClose = () => {
    setFileIsLarge(false);
  };

  const imageFileLimit = 10; // 10MB
  // const [imagePath, setImagePath] = useState(null);
  // const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleUploadImage = async (e) => {
    if (e.currentTarget.files[0] && e.currentTarget.files[0].size) {
      // alert(e.currentTarget.files[0].size);
      const fileSize = e.currentTarget.files[0].size / 1024 / 1024; // 1MB

      // alert(fileSize);
      // e.currentTarget.files[0] = null;

      // if (logoSize > 1) { // Limit to 1MB
      if (fileSize > imageFileLimit) { // Limit to 1MB
        // @ts-ignore
        // document.getElementById("image").value = null;
        // setFileInputId(new Date().toString());

        setFileSize(fileSize);
        setFileIsLarge(true);

        // alert("File is too large");
      } else {
        setFieldValue("imageFile", e.currentTarget.files[0]);
        submitForm(); // imagePath should be set here

        // su
        // imagePath
        // const image = e.currentTarget.files[0];
        // console.log(e.currentTarget.files[0]);
        // const { data, error } = await uploadMedia(image);

        // if (error) {
        //     console.log("error");
        //     console.error(error);
        //     return;
        // }

        // if (data) {
        //     // alert(data);
        //     setImagePath(data.media);
        // }

        // setFieldValue("image", e.currentTarget.files[0]);
        // const newProfileImageThumbnail = window.URL.createObjectURL(e.currentTarget.files[0]);
        // Send image to backend and wait for cloudinary here.
        // Save media to database similar to logo
        // setImagePath(newProfileImageThumbnail); // Use what is from 
        // setProfileImageThumbnail(newProfileImageThumbnail);

        // Upload to server right away?

        // setFileInputId(new Date().toString());

        // portFoliofoFormContent.scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // });
      }
    }
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    setFieldValue("imageFile", imageFile);
    submitForm();

    // const loading = toast.loading("Uploading...", {
    //     autoClose: 6000,
    //     position: "bottom-center",
    // });

    // const { data } = await uploadFile(acceptedFiles[0]);

    // if (data) {
    //     console.log(data)
    //     if (data.path_to_file !== "") {
    //         setImageLink(data.path_to_file);
    //         // toast.dismiss(loading);
    //         // toast.success("Upload successful!", {
    //         //     autoClose: 1000,
    //         //     pauseOnFocusLoss: false,
    //         //     pauseOnHover: false,
    //         //     hideProgressBar: true,
    //         //     position: "bottom-center",
    //         // });
    //     }

    //     setImageLink(`![Alt Text](${data.path_to_file})`);

    // }
  }, []);

  // https://react-dropzone.js.org/
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 10 * 1024 * 1024,
    // "image/svg+xml, image/png, image/jpg, image/jpeg, image/gif, image/webp"
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp'],
      'image/svg+xml': ['.svg', '.xml'],
    }
  });


  return (
    <>
      <div>
        <UploadImageContainer
          id="upload-image-form"
        >
          <UploadImageLabel
            htmlFor="upload-image"

            {...getRootProps()}
          >
            {/* <AiTwotoneFileImage /> */}
            {/* <BsCardImage /> */}
            <RiImageFill 
              style={{
                width: "1rem",
                minWidth: "1rem",
              }}
            />
            <span
              style={{
                marginLeft: "0.25rem",
                marginRight: "2.5rem",
              }}
            >
              {/* {isSubmitting ? "Uploading..." : "Upload and include a link to an image to this blog post"} */}
              {/* {isSubmitting ? "Uploading..." : "Upload an image for this blog post"} */}
              <Tooltip title="Upload a file for this blog post" arrow >
                <span>
                  {/* {isSubmitting ? "Uploading..." : "Upload an image"} */}
                  {isSubmitting ? "Uploading..." : "Upload"}
                </span>
              </Tooltip>
                            
              {/* {isSubmitting ? "Uploading..." : "Upload"} */}
              {/* image */}
              <input
                {...getInputProps()}
                style={{
                  display: "none",
                }}

                id="upload-image"
                name="upload-image"
                type="file"
                // allowed_image_types= [".svg", ".png", ".jpg", ".jpeg", ".gif"]
                accept="image/svg+xml, image/png, image/jpg, image/jpeg, image/gif, image/webp"

                multiple={false}

                required

                onChange={async (e) => {
                  await handleUploadImage(e);
                }}

                // hidden
              />
            </span>

          </UploadImageLabel>

          {imagePath && <>
            <UploadImageInput
              id="upload-image-path"
              name="upload-image-path"

              type="url"

              value={useMarkdown ? `![Alt text](${imagePath})` : imagePath}

              readOnly
            />

            <Tooltip title="Image to clipboard" >
              <ToClipboard onClick={(e) => {
                e.preventDefault();

                copyToClipboard(useMarkdown ? `![Alt text](${imagePath})` : imagePath);
                setSnackbarOpen(true);
              }} >
                <RiFileCopy2Fill />
              </ToClipboard>
            </Tooltip>

            {/* <ExternalLink href={imagePath} > */}
            <ExternalLink href={`/user/${user.username}/files?&file_id=${imageId}`} >
              <PreviewTheImage>
                <Tooltip title="Preview the image" >
                  <VisibilityIcon style={{
                    fontSize: "1rem",
                  }} />
                </Tooltip>
              </PreviewTheImage>
            </ExternalLink>
          </>}

          <FileListButton
            onClick={() => {
              // alert("Show file list");
              setShowFileListSidebar(true);
            }}
          >
            <Tooltip
              title="Click to show the files you uploaded previously"
              arrow
            >
              <ViewListIcon style={{
                // fontSize: "1.1rem",
              }} />
            </Tooltip>
          </FileListButton>

        </UploadImageContainer>

        <UploadImageErrorMessage
          formValue={imageFile}
          formError={errors.imageFile}
        />
        {/* Extract this? */}

        <Dialog
          open={fileIsLarge}
          onClose={handleDialogClose}
          aria-labelledby="image-file-size-error"
          aria-describedby="image-file-size-error"
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
              </span>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="portfolio-image-file-size-error-description">
                            Your image file size is {fileSize && fileSize.toFixed(4)}MB. Please, use another file with its size less than {imageFileLimit} MB.
              {/* Your image file size is {fileSize && fileSize.toFixed(4)}MB. Please, use another file with its size less than 1MB. */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary" autoFocus>
                            Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* Extract this? */}
      <SavedLinkToClipboard />
      <FileListSidebar 
        showFileListSidebar={showFileListSidebar}
        setShowFileListSidebar={setShowFileListSidebar}
      />

    </>
  );
};

export default UploadImage;


// {/* <SearchListTextInput>
//     <IconButton type="submit" className={classes.searchButton} aria-label="search" >
//         <SearchIcon />
//     </IconButton>

//     <InputBase
//         id="title"
//         name="title"
//         type="text"

//         className={classes.input}

//         placeholder="Type a job title"
//         // placeholder="Type a job title"
//         // placeholder="Type a title and use the filters below to find the best results"
//         inputProps={{
//             maxLength: jobTitleMaxLength,
//             "aria-label": "Search jobs",
//         }}

//         value={values.title}
//         onChange={handleChange}
//         onBlur={handleBlur}

//         endAdornment={
//             <>
//                 {/* Include search spinenr here later */}
//                 <SearchButton type="submit" aria-label="search" >
//                     {isSubmitting && <SearchListSpinner />}
//                     Search
//                 </SearchButton>

//                 {/* <IconButton type="button" className={classes.setButton} aria-label="menu">
//                   <SettingsIcon />
//                 </IconButton> */}

//                 <IconButton onClick={e => {
//                     e.preventDefault();

//                     // resetForm();
//                     // router.push("/jobs");

//                     window.location.href = "/jobs";
//                     // setFieldValue("title", "");
//                     // submitForm();

//                     // Not working.
//                     // resetForm();
//                 }} type="button" className={classes.clearButton} aria-label="reset form">
//                     <CancelIcon />
//                 </IconButton>
//             </>
//         }

//     // required
//     />
//     {/* <IconButton type="button" className={classes.iconButton} aria-label="menu">
//                         <SettingsIcon />
//                         </IconButton> */}

// </SearchListTextInput> */}