import React from "react";
import { ConnectErrorMessageWrapper } from "./ErrorCSS";

const GitHubConnectErrorMessage = ({
  responseError,
}) => {
  return (<ConnectErrorMessageWrapper>{responseError}</ConnectErrorMessageWrapper>);
};

export default GitHubConnectErrorMessage;