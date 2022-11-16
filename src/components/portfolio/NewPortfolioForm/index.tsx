import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogContentText from "@material-ui/core/DialogContentText";

import DialogTitle from "@material-ui/core/DialogTitle";

// import CreateIcon from "@material-ui/icons/Create";

import {
  NewPortfolioButton,
  NewPortfolioButtonText,
} from "./NewPortfolioCSS";

import PortfolioForm from "./NewPortfolioForm";
import usePortfolioForm from "./useNewPortfolioForm";

import { findTotalPortfolios } from "../../../api/user";
import CentralizeChildren from "../../CentralizeChildren";

const Portfolio = ({
  username,
  profile_image,
}) => {
  // const portFolioFormContent = useRef(null);

  const maxTotalPortfolio = 10;
  const [totalPortfolio, setTotalPortfolio] = useState(0);

  useEffect(() => {
    findTotalPortfolios(username)
      .then(({ data, error }) => {
        if (data) {
          // alert(data);
          setTotalPortfolio(data);
          return;
        }

        if (error) {
          console.log("error");
          console.error(error);
        }
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  // const [portfolioList, setPortfolioList] = useState([]);

  // useEffect(() => {
  //   findPortfolioListByUsername(username)
  //     .then(({ data, error }) => {
  //       if (data) {
  //         setPortfolioList(data);
  //         return;
  //       }

  //       if (error) {
  //         console.log("error");
  //         console.error(error);
  //       }
  //     })
  //     .catch(error => {
  //       console.log("error");
  //       console.error(error);
  //     });

  //   // return () => {
  //   //   setPortfolioList([]);
  //   // };
  // }, []);

  const [showPortfolioForm, setShowPortfolioForm] = useState(false);

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    // setValues,
    // setFieldTouched,

    isSubmitting,
    submitForm,

    resetForm,
  } = usePortfolioForm(setShowPortfolioForm);
  // } = useNewPortfolioForm(email, setChangeEmail);

  const handleClose = () => {
    resetForm();
    setShowPortfolioForm(false);
  };

  return (
    // <Link href={"/job/post"}>
    <>
      <NewPortfolioButton 
        // disabled={totalPortfolio === maxTotalPortfolio}

        onClick={(e) => {
          e.preventDefault();

          if (totalPortfolio <= maxTotalPortfolio) {
            setShowPortfolioForm(true);
          } else {
            alert("Please, remove a portfolio first before you upload new one.");
            // alert("Only 10 portfolios are allowed currently. Please, remove a portfolio first before you upload new one.")
          }
        }}
      >
        <CentralizeChildren >
          {/* <CreateIcon /> */}
          <NewPortfolioButtonText>
            New Portfolio
          </NewPortfolioButtonText>
        </CentralizeChildren>
      </NewPortfolioButton>

      <Dialog open={showPortfolioForm} onClose={handleClose} aria-labelledby="create-new-portfolio">
        {/* Include image here */}
        <div style={{
          minHeight: "18rem",
        }}>
          <DialogTitle id="create-portfolio">
            <div style={{
              //  display: "flex",
              //  alignItems: "center",

              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              // marginTop: "1rem",
              marginLeft: "-0.5rem",
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
                New Portfolio
              </span>
            </div>
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Share your portfoilo to show your skills. ({totalPortfolio}/{maxTotalPortfolio})
              {/* Share your portfoilo to show your ability. */}
              {/* You will need to login again with a new password after you change your current one. */}
              {/* Saving your new email will log you out. Then, we will send a notification to it in a few minutes. Please, confirm it and login again. */}
            </DialogContentText>

            {/* <img src="https://res.cloudinary.com/codenjobs/image/upload/v1617125064/profiles/z1zvhhi7fz5fdvlavuxv.png" */}

            <PortfolioForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}

              values={values}
              errors={errors}
              touched={touched}

              setFieldValue={setFieldValue}

            // ref={portFolioFormContent}
            />
          </DialogContent>

          <DialogActions style={{
            marginRight: "1rem",
            // marginBottom: "2rem",
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

                await submitForm();

                // resetForm();
                // setNewPortfolio(false);
              }}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </div>
        
      </Dialog>
    </>
    // </Link>
  );
};

export default Portfolio;