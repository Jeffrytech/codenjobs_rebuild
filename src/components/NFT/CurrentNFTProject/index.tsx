import React from "react";
import { unixTimestampToJavaScriptDate } from "../../../time";

import { 
  CurrentNFTProjectDescription,
  // CurrentNFTProjectGIF,

  CurrentNFTProjectDetails, CurrentNFTProjectName, CurrentNFTProjectStart, 
  
  CurrentNftProjectCoverLink,
  CurrentNFTProjectCover,
  CurrentNFTProjectStartText,
  CurrentNFTProjectLogo, 
  // SolanaNFTContainer, 
  // SolanaNFTDescription, 
  // SolanaNFTDetails, 
  // SolanaNFTExternalLink, 
  // SolanaNFTLogo, 
  // SolanaNFTName, 
  // SolanaNFTStart 
} from "./CurrentNFTProjectCSS";

const CurrentNFTProject = ({
  currentNftProject,
}) => {

  // console.log("currentNftProject");
  // console.log(currentNftProject);

  const {
    name,
    description,
    logo,
    cover,

    // program_id,
    blockchain,

    website,

    // gif = "https://media2.giphy.com/media/2skGaGNteJvSuitF1S/200.webp" ,
    gif,

    candyMachineState,
  } = currentNftProject;

  return (
    <CurrentNFTProjectDetails>
      <CurrentNftProjectCoverLink
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <CurrentNFTProjectCover
            src={cover}
          />

          <CurrentNFTProjectStart>
            {unixTimestampToJavaScriptDate(candyMachineState.goLiveDate).toLocaleString()} <CurrentNFTProjectStartText>- Full details here</CurrentNFTProjectStartText>
          </CurrentNFTProjectStart>
        </div>
      </CurrentNftProjectCoverLink>

      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <CurrentNFTProjectName>
          <CurrentNFTProjectLogo src={logo} alt={name} /> <b>{name}</b>
        </CurrentNFTProjectName>
        <CurrentNFTProjectDescription>
          {description}
        </CurrentNFTProjectDescription>
      </div>

    </CurrentNFTProjectDetails>

  );
};

export default CurrentNFTProject;
