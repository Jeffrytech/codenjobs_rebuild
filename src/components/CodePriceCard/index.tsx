import React from "react";

import {
  CodePriceCardSection,
  CodePriceCardHeader,
  CodePriceCardIntro,
  CurrentCodePrice,
} from "./CodePriceCardCSS";
import { BUY_CODE } from "../../config/environment";
import ExternalLink from "../ExternalLink";

const CodePriceCard = ({
  codePrice,
  isJobPostPayment = false,
  list = false,
}) => {
  return (
    <ExternalLink href={BUY_CODE}>
      <CodePriceCardSection $isJobPostPayment={isJobPostPayment} $list={list}>
        <CodePriceCardHeader $isJobPostPayment={isJobPostPayment}>
          <CodePriceCardIntro>
            <img
              src={"/static/logo.svg"}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            {/* CODE Price */}
            {isJobPostPayment ? "CODE Price" : "Buy CODE Token"}
          </CodePriceCardIntro>
        </CodePriceCardHeader>
        <CurrentCodePrice $isJobPostPayment={isJobPostPayment}>
          ${codePrice}
        </CurrentCodePrice>
      </CodePriceCardSection>
    </ExternalLink>
  );
};

export default CodePriceCard;
