import { styled, withStyle } from "baseui";
import { MOBILE } from "../../design/breakpoints";

const SearchListOptionsContainer = styled("div", {
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

// This is for index.tsx here.
// const SearchListOptionsContainer = styled("div", {
//   display: "flex",
//   flexWrap: "wrap",
//   marginTop: "0.5rem",
//   marginLeft: "0.1rem",
// });

const SearchListOptionUseCryptocurrencyWrapper = styled("div", {
  flexGrow: 1,

  display: "block",
  // display: "flex",

  width: "100%",

  marginRight: "1rem",

  // border: "1px solid #efefef",
  // boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

  // borderRadius: "0.5rem",

  [MOBILE]: {
    marginBottom: "1rem",
  }
});

const SearchListOptionInputWrapper = styled("div", {
  flexGrow: 1,

  display: "flex",
  
  width: "100%",

  border: "1px solid #efefef",
  boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

  borderRadius: "0.5rem",

  // [MOBILE]: {
  //   flexFlow: "column",
  //   // marginBottom: "1rem",
  // }
});

const SearchListOptionCompanyWrapper = withStyle(SearchListOptionInputWrapper, {
  // @ts-ignore
  marginRight: "1rem",
  // display: "flex",

  [MOBILE]: {
    // flexFlow: "row",
    marginBottom: "1rem",
  }
});

const SearchListOptionSalaryWrapper = withStyle(SearchListOptionInputWrapper, {
  // @ts-ignore
  // [MOBILE]: {
  //   // flexFlow: "column",
  //   marginBottom: "1rem",
  // }
});

const SearchListOptionLocationWrapper = withStyle(SearchListOptionInputWrapper, {
  // @ts-ignore
  marginRight: "1rem",

  [MOBILE]: {
    // flexFlow: "column",
    marginBottom: "1rem",
  }
});

const SearchListOptionSkillWrapper = withStyle(SearchListOptionInputWrapper, {
  // [MOBILE]: {
  //   // flexFlow: "column",
  //   marginBottom: "1rem",
  // }
});

// flexGrow: 1,
// width: "100%",

// marginRight: "1rem",

// border: "1px solid #efefef",
// boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

// borderRadius: "0.5rem",

// [MOBILE]: {
//   flexFlow: "column",
//   // marginBottom: "1rem",
// }
// });

export {
  SearchListOptionsContainer,

  SearchListOptionInputWrapper,

  SearchListOptionCompanyWrapper,
  SearchListOptionSalaryWrapper,
  SearchListOptionLocationWrapper,
  SearchListOptionSkillWrapper,

  SearchListOptionUseCryptocurrencyWrapper,
};