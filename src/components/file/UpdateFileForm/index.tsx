import React, { useState } from "react";
// import Link from "next/link";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import useUpdateFileForm from "./useUpdateFileForm";

// import { findPortfolioByIdForOwner } from "../../../api/privatePortfolio";
import useDebouncedEffect from "../../../useDebouncedEffect";
import { findFileForOwner } from "../../../api/privateFile";
import UpdateFileForm from "./UpdateFileForm";
// import useDebouncedEffect from "../../useDebouncedEffect";

const UpdateFile = ({
  username,
  profile_image,

  fileIdToUpdate,
  setFileIdToUpdate,

  showUpdateFileForm,
  setShowUpdateFileForm,

  setFileList,
}) => {
  const [fileThumbnail, setFileThumbnail] = useState(null);

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,
    // setFieldTouched,

    isSubmitting,
    submitForm,

    resetForm,
  } = useUpdateFileForm(
    // showUpdateFileForm,
    fileIdToUpdate,
    setFileList,
    // setFileIdToUpdate,
  );

  useDebouncedEffect(async () => {
    try {
      if (fileIdToUpdate === null) {
        return;
      }
      
      const { data, error } = await findFileForOwner(fileIdToUpdate);

      if (error) {
        console.log("findFileForOwne error");
        console.error(error);

        return;
      }

      // console.log("data");
      // console.log(data);

      // if (data) {
      // console.log("data");
      // console.log(data);

      // alert(fileToUpdate);

      // alert(data.fileList[0].path_to_file);

      setFileThumbnail(data.fileList[0].path_to_file);
      // const response = await axios.get(data.image, { responseType: "blob" });
      // console.log(response); // Use this to set the file extension below
      // console.log(response.data.type);

      // eslint-disable-next-line no-undef
      // const previousFileImage = new File([response.data], `file.${response.data.type.split("/")[1]}`, { type: response.data.type });
      // setFieldValue("image", previousFileImage);
      // document.getElementById("image").currentFiles[0] = previousPortfolioImage;

      // setProfileImageThumbnail(data.image);

      setFieldValue("title", data.fileList[0].title);
      setFieldValue("description", data.fileList[0].description);
      // }
    } catch (error) {
      console.log("error");
      console.error(error);
    }
  }, 600, [fileIdToUpdate]);

  const handleClose = () => {
    resetForm();

    setShowUpdateFileForm(false);
    setFileIdToUpdate(null);
  };

  return (
    <Dialog open={showUpdateFileForm} onClose={handleClose} aria-labelledby="update-file" >
      {/* Include image here */}
      <div style={{
        minHeight: "18rem",
      }}>
        <DialogTitle id="update-file">
          <div style={{
            display: "flex",
            alignItems: "center",
            // marginTop: "1rem",
            // marginLeft: "-0.5rem",
          }}>
            <div>
              <Avatar
                alt={username}
                src={profile_image || "/static/logo.png"}
              />
            </div>

            <span style={{
              marginLeft: "0.5rem"
            }}>
              Update File Details
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <UpdateFileForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}

            values={values}
            fileThumbnail={fileThumbnail}
            // errors={errors}
            // touched={touched}

            setFieldValue={setFieldValue}

            // profileImageThumbnail={profileImageThumbnail}
            // setProfileImageThumbnail={setProfileImageThumbnail}
            // handleClose={handleClose}
          />
        </DialogContent>

        <DialogActions style={{
          marginRight: "1rem",
        }} >
          <Button
            // disabled={isSubmitting}
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>

          <Button
            disabled={isSubmitting}

            onClick={async (e) => {
              e.preventDefault();

              try {
                await submitForm();
                handleClose();
              } catch (error) {
                alert(error);
              }
              // setShowUpdateFileForm(false);

              // resetForm();
              // setUpdatePortfolio(false);
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

export default UpdateFile;