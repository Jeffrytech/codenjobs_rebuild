import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import UpdatePortfolioForm from "./UpdatePortfolioForm";
import usePortfolioForm from "./useUpdatePortfolioForm";

// import { findPortfolioByIdForOwner } from "../../../api/privatePortfolio";
import axios from "axios";
import { findPortfolioByIdForOwner } from "../../../api/privatePortfolio";
import useDebouncedEffect from "../../../useDebouncedEffect";
// import useDebouncedEffect from "../../useDebouncedEffect";

const UpdatePortfolio = ({
  username,
  profile_image,

  portfolioIdToUpdate,
  setPortfolioIdToUpdate,

  showUpdatePortfolioForm,
  setShowUpdatePortfolioForm,
}) => {
  const [profileImageThumbnail, setProfileImageThumbnail] = useState(null);
  // const portFolioFormContent = useRef(null);

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
  } = usePortfolioForm(
    setShowUpdatePortfolioForm,
    portfolioIdToUpdate,
    setPortfolioIdToUpdate
    // setPortfolioIdToUpdate,

    // showUpdatePortfolioForm,
    // setShowUpdatePortfolioForm,
  );
  // } = useUpdatePortfolioForm(email, setChangeEmail);

  useDebouncedEffect(
    async () => {
      // If I make it work, others will work also?

      try {
        if (portfolioIdToUpdate === null) {
          return;
        }

        const { data, error } = await findPortfolioByIdForOwner(
          portfolioIdToUpdate
        );

        if (error) {
          console.log("error");
          console.error(error);

          return;
        }

        if (data) {
          const response = await axios.get(data.image, {
            responseType: "blob",
          });
          // console.log(response); // Use this to set the file extension below
          // console.log(response.data.type);

          // eslint-disable-next-line no-undef
          const previousPortfolioImage = new File(
            [response.data],
            `portfolio.${response.data.type.split("/")[1]}`,
            { type: response.data.type }
          );
          setFieldValue("image", previousPortfolioImage);
          // document.getElementById("image").currentFiles[0] = previousPortfolioImage;

          setProfileImageThumbnail(data.image);

          setFieldValue("title", data.title);
          setFieldValue("link", data.link);
          setFieldValue("description", data.description);
        }
      } catch (error) {
        console.log("error");
        console.error(error);
      }
    },
    600,
    [portfolioIdToUpdate]
  );

  // useEffect(() => {
  //   // setValues({
  //   //   title: "test",
  //   //   link: "https://www.codenjobs.com",
  //   //   description: "test",
  //   // });

  //   findPortfolioByIdForOwner(portfolioIdToUpdate)
  //     .then(({
  //       data,
  //       // Should handle this correctly.
  //       error
  //     }) => {
  //       if (error) {
  //         console.log("error");
  //         console.error(error);
  //         return;
  //       }

  //       if (data) {
  //         // console.log(data.image);
  //         // http://localhost:8000/public/portfolio/image/Ig9oXcEJB40qkLTjzMqWsgsu8exVkyXy3vAl9jtGbdVSQevj.jpeg

  //         const response = axios.get(data.image, { responseType: "blob" }).t;

  //         // eslint-disable-next-line no-undef
  //         // const logofile = new File([response.data], "logo.png", { type: response.data.type });
  //         // console.log(logofile);

  //         // setFieldValue("image", logofile);

  //         // setLogoThumbnail(logo);
  //         // setLogoThumbnail(`${API}/${logo}`);

  //         // setFileInputId(new Date().toString());

  //         // setValues(data);
  //       }
  //     })
  //     .catch(error => {
  //       console.log("error");
  //       console.error(error);
  //     });
  // }, [portfolioIdToUpdate]);

  const handleClose = () => {
    resetForm();

    setProfileImageThumbnail(null);

    setShowUpdatePortfolioForm(false);
    setPortfolioIdToUpdate(null);
  };

  return (
    <Dialog
      open={showUpdatePortfolioForm}
      onClose={handleClose}
      aria-labelledby="update-portfolio"
    >
      {/* Include image here */}
      <div
        style={{
          minHeight: "18rem",
        }}
      >
        <DialogTitle id="update-porfolio">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // marginTop: "1rem",
              marginLeft: "-0.5rem",
            }}
          >
            <div>
              <Avatar
                alt={username}
                src={profile_image || "/static/logo.svg"}
              />
            </div>

            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Update Portfolio
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <UpdatePortfolioForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            profileImageThumbnail={profileImageThumbnail}
            setProfileImageThumbnail={setProfileImageThumbnail}

            // ref={portFolioFormContent}
          />
        </DialogContent>

        <DialogActions
          style={{
            marginRight: "1rem",
            // marginBottom: "2rem",
          }}
        >
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

              await submitForm();

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

export default UpdatePortfolio;
