import React from "react";

import { SolanaPriceCardSection, SolanaPriceCardHeader, SolanaPriceCardIntro, CurrentSolanaPrice } from "./SolanaPriceCardCSS";
// import { FTX_RFERRAL } from "../../config/environment";
import ExternalLink from "../ExternalLink";

const SolanaPriceCard = ({
  solanaPrice,
}) => {
  return (
    // <ExternalLink
    //   href={FTX_RFERRAL}
    // >
      <SolanaPriceCardSection>
        <SolanaPriceCardHeader>
          <SolanaPriceCardIntro>
            <img
              src={"/static/logos/solana.png"}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            {/* CODE Price */}
            Solana Price
          </SolanaPriceCardIntro>
        </SolanaPriceCardHeader>
        <CurrentSolanaPrice>
                    ${solanaPrice}
        </CurrentSolanaPrice>
      </SolanaPriceCardSection>
    // </ExternalLink>
  );
};

export default SolanaPriceCard;

// {/* <ExternalLink
//     href={FTX_RFERRAL}
// >
//     <div style={{
//         marginBottom: "0.75rem",
//         padding: "0.5rem",
//         background: "white",
//         borderRadius: "0.5rem",
//         boxShadow: "rgb(0 0 0 / 10%) 0px 1px 1px 0px",
//     }}>
//         <img
//             // style={{
//             //     // width: "100%",
//             //     // background: "#efefef",
//             //     // background: "white",
//             //     // borderRadius: "0.5rem",
//             // }}
//             src="/static/FTX_ALT.png"
//             alt="FTX logo"
//         />
//     </div>
// </ExternalLink> */}