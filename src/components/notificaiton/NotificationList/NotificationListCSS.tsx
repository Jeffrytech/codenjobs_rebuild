import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { blue } from "../../../design/colors";
import { 
  hover,
  notificationBoxShadow
} from "../../../design/common";

// Extract this?
const NotificationSectionContainer = styled("section", {
  // margin: "2rem auto 0 auto",
  margin: "2rem auto auto",

  // margin: "1rem auto 0 auto",
  maxWidth: "44rem",
  // maxWidth: "1024px",
  // backgroundColor: "white",

  // padding: "0.5rem 1rem",
  // boxShadow: messageBoxShadow,

  // Use this because there will be no pagination?
  paddingBottom: "2rem",

  [MOBILE]: {
    margin: "0 auto",
  }
});

const NotificationPageTitle = styled("h1", {
  margin: "1rem",

  [MOBILE]: {
    fontSize: "1.25rem",
  }
});

const NotificationSettingsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  marginLeft: "auto",
  marginRight: "1.5rem",
  opacity: 0.7,

  cursor: "pointer",
});

const NotificationListButtonsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const DeleteNotificationList = styled("span", {
  margin: "0 1rem 1rem 1.1rem",
  opacity: "0.5",
  cursor: "pointer",
});

const NotificationSettingsText = styled("span", {
  marginLeft: "0.1rem",
  [XS]: {
    display: "none",
  }
});

const NotificationListContainer = styled("ul", {
  listStyle: "none",
  padding: 0,

  border: "1px solid #efefef",
  borderRadius: "0.5rem",
  // boxShadow: boxShadow,

  margin: "0 1rem"
});

const NotificationListWrapper = styled("li", ({ $last }) => {
  return {
    padding: "1rem",
    boxShadow: notificationBoxShadow,

    display: "flex",
    // alignItems: "center",

    borderRadius: $last ? "0 0 0.5rem 0.5rem" : "0",
  };
});

const NotifierWrapper = styled("span", {
  paddingRight: "0.5rem",
  position: "relative",
  display: "flex",

  ":hover": hover,
});

const NotificationWrapper = styled("span", {
  display: "flex",
  flexFlow: "column",
  width: "100%",
});

const NotificationTitle = styled("span", {
  fontSize: "1.1rem",

  ":hover": {
    ...hover,
    opacity: "inherit",
    color: blue,
  }
});

const NotificationCreated = styled("span", {
  opacity: 0.5,
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  fontSize: "0.85rem",
});

const NotificationMessage = styled("span", {
  opacity: 0.7,
  marginBottom: "0.5rem",
  fontSize: "1rem",
});

// // Remove this?
// // Make this work with pagination and remove this later
// const PaginationBottom = styled("div", {
//   padding: "1rem",

//   [MOBILE]: {
//     display: "none",
//   }
// });

// const NoMessage = styled("h1", {
//   margin: 0,
//   fontSize: "1rem",
//   padding: "1rem",
//   fontWeight: "normal",
// });

// // Extract this?
// const MessageListWrapper = styled("div", {
//   display: "flex",
//   flexFlow: "column",
// });

// const MessageListCardContainer = styled("div", ({
//   // @ts-ignore
//   $index,
// }) => {
//   return {
//     color: "#374252",
//     // border: "1px solid #eee",
//     display: "block",
//     // padding: "0.5rem",
//     position: "relative",
//     // transition: "all 0.2s",
//     textDecoration: "none",
//     // backgroundColor: "white",

//     // padding: "1rem",
//     border: ($index % 2) === 0 ? "1px solid rgb(238, 238, 238)" : "none",
//   };
// });

// const MessageFromContainer = styled("div", {
//   display: "flex",
//   alignItems: "center",
//   opacity: 0.7,

//   fontWeight: 400,
// });

// const MessageFromWrapper = styled("div", {
//   display: "flex",

//   // [XS]: {
//   //   flexFlow: "column",
//   // }
// });

// const MessageFrom = styled("a", {
//   color: "rgb(17, 160, 245)",

//   ":hover": {
//     cursor: "pointer",
//     textDecoration: "underline",
//   }
// });

// const MessageSubject = styled("h1", {
//   fontSize: "1.5rem",
//   fontWeight: 700,
//   // margin: "1rem 0 0 0",
//   // margin: "0.5rem 0 0.5rem 0",
//   margin: "0.25rem 0 0 0",
//   // lineHeight: "25px",
// });

// const ExcludeButtonWrapper = styled("span", {
//   display: "flex",
//   marginLeft: "auto",
//   marginRight: "0.5rem",

//   color: "#ff1676",

//   ":hover": {
//     cursor: "pointer",
//   }
// });

// const Permalink = styled("a", {
//   fontSize: "0.75rem",
//   opacity: 0.7,
//   fontWeight: "bold",

//   textDecoration: "none",
//   color: "rgb(55, 66, 82)",

//   marginRight: "0.5rem",

//   cursor: "pointer",
//   ":hover": {
//     textDecoration: "underline",
//   }
// });

// // Use with Link
// const NewMessageLink = styled("span", {
//   fontSize: "0.75rem",
//   opacity: 0.7,
//   fontWeight: "bold",

//   textDecoration: "none",
//   color: "rgb(55, 66, 82)",

//   marginRight: "0.5rem",

//   cursor: "pointer",
//   ":hover": {
//     textDecoration: "underline",
//   }
// });

// const RefeshButtonContainer = styled("span", {
//   marginLeft: "auto",
//   marginRight: "0.5rem",

//   cursor: "pointer",
//   transition: "all 0.2s",
//   ":hover": {
//     opacity: 0.7,
//     color: blue
//   }
// });

// // const MessageText = styled("section", {
// const MessageText = styled("p", {
//   marginTop: "0.5rem",
//   marginBottom: 0,
//   wordBreak: "break-all",
//   whiteSpace: "pre-line",
// });

// const MessageOptions = styled("section", {
//   display: "flex",
//   marginTop: "0.5rem",
//   alignItems: "center",
// });

export {
  NotificationSectionContainer,
  NotificationPageTitle,

  NotificationListContainer,
  NotificationListWrapper,

  NotificationListButtonsWrapper,
  DeleteNotificationList,

  NotifierWrapper,
  
  NotificationWrapper,
  NotificationTitle,
  NotificationCreated,
  NotificationMessage,

  NotificationSettingsWrapper,
  NotificationSettingsText,
  
  // PaginationBottom,

  // NoMessage,
  // MessageListWrapper,

  // MessageListCardContainer,

  // MessageFromContainer,
  // MessageFromWrapper,
  
  // MessageFrom,
  // MessageSubject,
  // MessageText,

  // MessageOptions,

  // ExcludeButtonWrapper,

  // Permalink,
  // NewMessageLink,

  // RefeshButtonContainer,
};