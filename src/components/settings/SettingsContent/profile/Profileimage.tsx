import React, { useState } from "react";

import { Avatar } from "baseui/avatar";
// import { StyledSpinnerNext } from "baseui/spinner";

import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// import EmailIcon from "@material-ui/icons/Email";

import Button from "@material-ui/core/Button";

import {
  SettingsContentImageHeader,

  SettingsContentImageDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,

  // SettingsContentDeleteButton,
  ProfileImageDeleteButton,

  ProfileImageInputLabel,
  ProfileImageInput,

  ProfileEditButton,
  // ProfileEditLoading,
} from "../SettingsContentCSS";

import {
  // UpdateImageSpinnerWrapper,
  UpdateImageSpinner
} from "../../../spinners/UpdateImageSpinner";

import { updateProfileImage, deleteProfileImage } from "../../../../api/privateProfile";
import { useAuth } from "../../../../contexts/auth";

// import env from "../../../../config/environment";
// const API = `${env.API}`;

// To update image without any problem
// https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input
const ProfileImage = () => {
  const [fileIsLarge, setFileIsLarge] = useState(false);
  const [fileSize, setFileSize] = useState(null);

  const [fileInputId, setFileInputId] = useState(null);

  const [updating, setUpdating] = useState(false);
  // const [updating, setUpdating] = useState(true);

  const handleClose = () => {
    setFileIsLarge(false);
  };

  const {
    // @ts-ignore
    user,
    // @ts-ignore
    setUser,
  } = useAuth();

  const {
    username,
    image
  } = user;

  // alert(image);

  const handleUpdateProfileImage = async (e) => {
    // console.log("e.currentTarget.files[0]");
    // console.log(e.currentTarget.files[0]);

    if (e.currentTarget.files[0] && e.currentTarget.files[0].size) {
      // alert(e.currentTarget.files[0].size);
      const profileImageSize = e.currentTarget.files[0].size / 1024 / 1024; // 1MB

      // alert(fileSize);
      // e.currentTarget.files[0] = null;

      if (profileImageSize > 1) {
        // @ts-ignore
        document.getElementById("file").value = null;
        setFileInputId(new Date().toString());

        setFileSize(profileImageSize);
        setFileIsLarge(true);

        // alert("File is too large");
      } else {
        setUpdating(true);
        
        const {
          data,
          error,
        } = await updateProfileImage(e.currentTarget.files[0]);

        if (error) {
          console.error("error");
          console.error(error);

          setUpdating(false);
          return;
        }

        if (data) {
          // console.log("data");
          // console.log(data);

          const { new_profile_image } = data;

          console.log("new_profile_image");
          console.log(new_profile_image);

          // alert(new_profile_image);

          // window.location.reload();

          setFileInputId(new Date().toString());

          // setFileInputId(makeid(5));

          setUpdating(false);
          
          setUser({
            ...user,
            image: new_profile_image,
          });
        }
      }
    }
  };

  const handleDeleteProfileImage = async (e) => {
    e.preventDefault();

    // old_profile_image = get_profile_image(
    //   db, user_id = current_user.id
    // )

    // if old_profile_image:
    //   try:
    // os.remove(old_profile_image)
    // no_profile_image(db, user_id = current_user.id)
    // return True

    // except OSError as error:
    // print(f"{current_user.username} profile can not be removed")
    // print(error)

    // raise HTTPException(status_code = 400, detail = "profile_path_error")
    // else:
    //   raise HTTPException(status_code = 400, detail = "no_profile_image")

    setUpdating(true);
    const {
      // data,
      error,
    } = await deleteProfileImage();

    if (error) {
      console.error("error");
      console.error(error);
      
      setUpdating(false);

      return;
    }

    setFileInputId(new Date().toString());
    // setFileInputId(makeid(5));

    setUpdating(false);
    setUser({
      ...user,
      image: null,
    });
  };
  return (
    <>
      <SettingsContentImageHeader>Image</SettingsContentImageHeader>
      <SettingsContentImageDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Edit profile picture
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* It can be .png, .jpg or .jpeg format */}
            {/* .png, .jpg or .jpeg and less than 1MB */}
            It can be .png or .jpg
            {/* and less than 1MB */}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        {
          image && (
            <ProfileImageDeleteButton
              onClick={handleDeleteProfileImage}
            >
              Delete
            </ProfileImageDeleteButton>
          )
        }
      </SettingsContentImageDetailWrapper>

      <ProfileImageInputLabel htmlFor="file" >
        
        {/* <>
          <Avatar
            name={username}
            size="7rem"
            src={image || ""}
          // src={`${API}/${image}`}
          />
          <ProfileEditButton>

            <CreateIcon style={{
              fontSize: "1rem",
            }} />
          </ProfileEditButton>
        </> */}

        {!updating
          ? <>
            <Avatar
              name={username}
              size="7rem"
              src={image || ""}
            />
            <ProfileEditButton>

              <CreateIcon style={{
                fontSize: "1rem",
              }} />
            </ProfileEditButton>
          </>
          : <UpdateImageSpinner />
        }
      </ProfileImageInputLabel>

      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file */}
      <ProfileImageInput
        id="file"
        name="file"
        type="file"
        // accept="image/png, image/jpg, image/jpeg"
        accept="image/png, image/jpg"
        multiple={false}
        onChange={handleUpdateProfileImage}

        key={fileInputId || ""}
        // key={fileInputId || ""}
      />

      <Dialog
        open={fileIsLarge}
        onClose={handleClose}
        aria-labelledby="Profile image file size error"
        aria-describedby="Profile iamge file size error"
      >
        <DialogTitle id="proifle-image">
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
          <DialogContentText id="profile-image-filesize-error-description">
            Your profile image size is {fileSize && fileSize.toFixed(4)}MB. Please, use another file with its size less than 1MB.
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

export default ProfileImage;