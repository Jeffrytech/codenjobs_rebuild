import React from "react";

import {
  SettingsContentContainer,
  SettingsContentWrapper,
} from "./SettingsContentCSS";

import BackgroundColor from "../../BackgroundColor";

const SettingsContent = ({ children }) => {
  return (
    <BackgroundColor $background={"white"} >
      <SettingsContentContainer>
        <SettingsContentWrapper>
          {children}
        </SettingsContentWrapper>
      </SettingsContentContainer>
    </BackgroundColor>
  );
};

export default SettingsContent;