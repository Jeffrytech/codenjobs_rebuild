import { Button, Typography } from "@material-ui/core";
import { makeStyles, StylesContext } from "@material-ui/styles";
import React, { useState } from "react";

import { 
  CardWrapper, 
  // Top, Mid, 
  JobPostPaymentCardHeader, JobPostPaymentCardIntro, JobPostPaymentDetails 
} from "./JobPostPaymentCardCSS";
import { styled } from "@mui/material/styles";
import { green } from "@material-ui/core/colors";
import { black, shadowBlue, white } from "../../../../design/colors";
import ListItem from "./ListItem";
import CentralizeChildren from "../../../CentralizeChildren";
import { PaymentIntro, JobPostPaymentHeader } from "../JobPostPaymentCSS";
import ExternalLink from "../../../ExternalLink";
import { BUY_CODE } from "../../../../config/environment";

// import { green, white, black } from "../../design/colors";

type Props = {};

// const StyledButton = styled(Button)({
//   width: "80%",
//   height: "3rem",
//   color: green,
//   fontSize: "1.5rem",
//   background: black,

//   "&:hover": {
//     background: "grey",
//   },
// });

interface PaymentProps {
  data: {
    paymentMethod: string;
    name: string;
    price: string;
    features: { allowed: boolean; title: string }[];
  };
  selected: boolean;
  method: string,
  // handleClicked: ( id: any) => void;
}

const JobPostPaymentCard: React.FC<PaymentProps> = ({
  data,
  selected,
  method,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <CardWrapper>
      <JobPostPaymentCardHeader>
        <ExternalLink 
          // TODO
          // Use another referral instead
          // href={method === "code" ? BUY_CODE : FTX_RFERRAL} 
          href={BUY_CODE } 
        >
          <JobPostPaymentCardIntro>
            <img
              src={method === "code" ? "/static/logo.png" : "/static/solana.png"}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            {method === "code" ? "Use CODE Token" : "Use Solana"} 
          </JobPostPaymentCardIntro>
        </ExternalLink>
      </JobPostPaymentCardHeader>
      <JobPostPaymentDetails>
        {data &&
          data.features.map((feature) => (
            <ListItem
              mouseEnter={mouseEnter || selected}
              text={feature.title}
              blured={!feature.allowed}
            />
          ))}
      </JobPostPaymentDetails>

    </CardWrapper>
  );
};

export default JobPostPaymentCard;
