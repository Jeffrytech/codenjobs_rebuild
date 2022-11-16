import { makeStyles } from "@material-ui/core";
import { styled } from "baseui";
import { MOBILE, XS } from "../../design/breakpoints";
import { boxShadow } from "../../design/common";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",

    border: "1px solid #efefef",
    boxShadow,

    width: "100%",
  },
  input: {
    // marginLeft: theme.spacing(1),
    flex: 1,

    width: "100%",
    marginRight: "0.5rem",

    // margin: "0 1rem 0 0",
    // padding: "0.5rem",
  },
  searchButton: {
    padding: 10,
  },
  setButton: {
    padding: 10,
  },
  clearButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

// Extract these later as PublicSearchListHeader.
const SearchListFormContainer = styled("div", {
  margin: "0px auto",
  maxWidth: "64rem",
  padding: "1rem",
});

const SearchListFormTitle = styled("div", {
  fontSize: "2.5rem",
  // fontSize: "2rem",
  marginTop: "0.25rem",
  marginBottom: "0.5rem",
  textAlign: "center",
});

const SearchListFormSubtitle = styled("p", {
  textAlign: "center",
  opacity: "0.8",
  marginTop: "0.25rem",
  fontSize: "1.2rem",
});

const SearchListTextInput = styled("div", {
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",

  border: "1px solid #efefef",
  boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

  borderRadius: "0.5rem",

  width: "18rem",
  maxWidth: "18rem",
});

const SearchButton = styled("button", {
  display: "flex",
  alignItems: "center",

  marginLeft: "1rem",
    
  background: "rgb(17, 160, 245)",
  border: "none",
  padding: "0.5rem",
  color: "white",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: "0.7",
  },

  [XS]: {
    display: "none",
  }
});

const SearchSelectContainer = styled("div", {
  marginTop: "1rem",

  display: "flex",
  flexFlow: "row",
  // flexWrap: "wrap", // Doesn't work with row?

  justifyContent: "space-between",
  alignItems: "flex-start",
    
  // This doesn't work for all devices.
  // gap: "1rem",

  [MOBILE]: {
    flexFlow: "column",
  }
});

const SearchCategorySelectWrapper = styled("div", {
  flexGrow: 1,
  width: "100%",
  marginRight: "1rem",

  [MOBILE]: {
    flexFlow: "column",
    marginBottom: "1rem",
  }
});

const SearchTypeSelectWrapper = styled("div", {
  flexGrow: 1,
  width: "100%",
  // marginRight: "0.5rem",

  [MOBILE]: {
    flexFlow: "column",
    // marginBottom: "1rem",
  }
});

export {
  useStyles,
    
  SearchListFormContainer,
  SearchListFormTitle,
  SearchListFormSubtitle,
    
  SearchListTextInput,
  SearchButton,

  SearchSelectContainer,
    
  SearchCategorySelectWrapper,
  SearchTypeSelectWrapper,
  // SearchOptionsWrapper,
};