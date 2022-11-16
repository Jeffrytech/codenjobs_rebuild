import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from '@mui/icons-material/Error';

import CloseIcon from "@mui/icons-material/Close";
import { MOBILE } from "../design/breakpoints";
import { useSolanaNotification } from "../contexts/solanaNotification";
import SolanaImage from "./SolanaImage";

// type Props = {
//   title: string;
//   message?: any;
// };

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    
    bottom: "2rem",

    // You can edit CSS of it by commenting these two
    // right: "-100%",
    // animation: "$slideIn ease-in 5s forwards",
    right: "-100%",
    animation: "$slideIn ease-in 5s forwards",

    zIndex: 9999,
    border: "2px solid #71CBD5",
    display: "flex",
    backgroundColor: "#512DA8",
    // padding: "1.3rem 3rem 1.3rem 2rem",
    padding: "1.25rem 1.5rem",
    borderRadius: "0.7rem",
    overflow: "hidden",

    [MOBILE]: {
      right: "5%",
      left: "5%",
      // top: "4.5rem",

      animation: "$slideInMobile ease-in 5s forwards",
      maxWidth: "100%",
      padding: "1rem 1.25rem",
    }


  },
  cancel: {
    position: "absolute",
    top: "0.25rem",
    right: "0.1rem",
    color: "rgb(101,106,167)",
    fontSize: "0.85rem",

    cursor: "pointer",
    transition: "all 0.2s",
    "&:hover": {
      opacity: 0.7,
    }
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "3px",
    backgroundColor: "#71CBD5",
    width: "0%", 
    animation: "$fillUp linear 4.5s forwards"
  },
  // message: {
  //   // marginLeft: "1rem",
  // },
  image: {
    color: "#71CBD5",
    display: "flex",
  },
  title: {
    color: "rgb(236,233,255)",
    // fontSize: "1.2rem",
    fontSize: "1rem",
    margin: "0 0 0 0.25rem",
    // marginBottom: ".5rem",
  },
  message: {
    color: "rgb(151,156,217)",
    margin: "0.5rem 0 0 0.25rem",
    fontSize: "0.85rem",
  },

  "@keyframes slideIn":{
    "0%":{
      right: "-100%",
    },
    "10%":{
      right: "2rem"
    },
    "90%":{
      right: "2rem"
    },
    "100%":{
      right: "-100%"
    }
  },

  "@keyframes slideInMobile":{
    "0%":{
      bottom: "-100%",
    },
    "10%":{
      bottom: "2rem"
      // bottom: "4.5rem"
    },
    "90%":{
      bottom: "2rem"
      // bottom: "4.5rem"
    },
    "100%":{
      bottom: "-100%"
    }
  },

  "@keyframes fillUp":{
    "to":{
      width: "100%"
    }
  }

  
}));

// export default function SolanaNotification({ message, walletAddress }: Props) {
// Move this to Context also?
// export default function SolanaNotification({ title, message }: Props) {
export default function SolanaNotification() {
 
  const classes = useStyles();

  // @ts-ignore
  const { solanaNotification, setSolanaNotification } = useSolanaNotification();

  useEffect(() => {
    const solanaNotificationTimeout = 5000;
    const solanaNotificationTimer = setTimeout(() => {
      setSolanaNotification({
        show: false,
        title: "",
        message: "",
      });
    }, solanaNotificationTimeout);

    return () => {
      clearTimeout(solanaNotificationTimer);
    };
  }, [solanaNotification.show]);

  if (solanaNotification.show) {
    return (<section>
      <div className={classes.wrapper}>
        <div onClick={() => setSolanaNotification({
          show: false,
          title: "",
          message: "",
        })} className={classes.cancel}>
          <CloseIcon />
        </div>
        <div className={classes.loading}></div>
        <div className={classes.message}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} >
            <div className={classes.image}>
              <ErrorIcon style={{
                fontSize: "1.25rem",
              }} />
              {/* <SolanaImage /> */}
              {/* <CheckCircleOutlineIcon /> */}
            </div>
            <h2 className={classes.title}>{solanaNotification.title}</h2>
          </div>
          <h3 className={classes.message}>{solanaNotification.message}</h3>
        </div>
      </div>
    </section>
    );
  } else {
    return null;
  }
}
