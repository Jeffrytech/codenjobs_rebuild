import React from "react";
import ExternalLink from "../components/ExternalLink";
import { styled } from "baseui";

import { SOLSCAN } from "../config/environment";
import { green } from "../design/colors";

const SolscanLink = styled("span", {
  color: green,
  ":hover": {
    cursor: "pointer",
    transition: "all 0.2s",
    opactiy: 0.7,
  }
});

const ViewOnSolscan = ({
  solanaTx
}) => {
  return (<div>View on <ExternalLink
    href={`${SOLSCAN}/tx/${solanaTx}`}
  >
    <SolscanLink>
            Solscan
    </SolscanLink>
  </ExternalLink></div>);
};

export default ViewOnSolscan;