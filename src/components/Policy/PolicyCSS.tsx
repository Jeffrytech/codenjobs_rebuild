import { styled } from "baseui";

// import { flex } from "../../flex";
// import { fullWidthPercent } from "../../design";

import { 
  // XS, 
  MOBILE 
} from "../../design/breakpoints";
import { desktopWidth } from "../../design/width";
import { boxShadow } from "../../design/common";

// Extract these?
const PoliciyContainer = styled("div", {
  // padding: "0px 2rem 4rem 2rem",
  padding: "2rem",
  [MOBILE]: {
    padding: "0"
    // padding: "0 1rem 1rem 1rem"
  }
});

const PolicyWrapper = styled("div", {
  margin: "auto",
  // maxWidth: "1024px",
  maxWidth: desktopWidth,
  // paddingTop: "2rem",
});

const PolicySection = styled("section", {
  // boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px",
  boxShadow,
  // marginTop: "-64px",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  width: "100%"
});

const PolicyView = styled("div", {
  padding: "0.5rem 2.5rem 1rem 2.5rem",
  borderTop: "1px solid #efefef",

  [MOBILE]: {
    // padding: "1rem 2rem"
    // padding: "1rem 1.5rem"
    padding: "0rem 1.5rem 0.5rem 1.5rem",
  },
});


// export {
//   PoliciyContainer,
//   PolicyWrapper,
//   PolicySection,

//   PolicyView,
// };

const PolicyCSS = ({
  children
}) => {
  return (<PoliciyContainer>
    <PolicyWrapper>
      <PolicySection>
        <PolicyView>
          {children}
        </PolicyView>
      </PolicySection>
    </PolicyWrapper>
  </PoliciyContainer>);
};

export default PolicyCSS;
