import { styled } from "baseui";
import { fullWidthPercent } from "../../../design/width";

const JobFeaturesContainer = styled("div", {
  
  display: "flex",
  flexFlow: "row",
  ...fullWidthPercent,

  flexWrap: "wrap !important",
  
  marginTop: "0.25rem",

  // [XS]: {
  //   marginTop: "0.25rem",
  // }
});

const JobFeatureWrapper = styled("div", ({ $isPreview }) => {
  // alert($isPreview);
  const forView = {
    color: "black",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.7,
      color: "rgb(17, 160, 245)",
    }
  };

  if ($isPreview) {
    return {
      display: "flex",
      alignItems: "center",
      marginTop: "0.5rem",
      marginRight: "0.5rem",
      marginBottom: "0.25rem",
    };
  } else {
    return {
      display: "flex",
      alignItems: "center",
      marginTop: "0.5rem",
      marginRight: "0.5rem",
      marginBottom: "0.25rem",
      ...forView
    };
  }
});

export {
  JobFeaturesContainer,
  JobFeatureWrapper,
};