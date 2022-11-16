import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { findNftProjectList } from "../../../api/nftProject";
// import { SELL_CURRENT_NFT } from "../../config/environment";
import { devUserProvider } from "../../../crypto/utils";
// import { CURRENT_NFT_PROJECT_ID } from "../../config/environment";
import { getCandyMachineState } from "../Solana/CandyMachine/candyMachine";
import { formatNumber } from "../Solana/CandyMachine/utils";
import ExternalLink from "../../ExternalLink";
import CurrentNFTProject from "../CurrentNFTProject";
import { SellCurrentNFTButton, SolanaNFTContainer } from "../Solana/SolanaNFTCSS";
import { 
  SolanaNFTList, SolanaNFTListContainer, SolanaNFTProject, SolanaNFTProjectLogo, 
  SolanaNFTProjectName, SolanaNFTProjectState, SolanaNFTProjectStateDetailWrapper, SolanaNFTProjectStateLabel, SolanaNFTProjectStateValue, SolanaNFTProjectStatus 
} from "./ProjectListCSS";

const ProjectList = () => {
  const router = useRouter();
  
  const { connection } = useConnection();
  const { wallet } = useWallet();
  // const provider = userProvider(wallet);
  const provider = devUserProvider(wallet);

  // console.log("connection")
  // console.log(connection);

  const [nftProjectList, setNftProjectList] = useState(null);

  const findNftProjects = async () => {
    try {
      const { data: nftProjects, error } = await findNftProjectList();

      if (error) {
        console.log("findNftProjectList error");
        console.error(error);

        return;
      }

      if (nftProjects) {
        console.log("nftProjects");
        console.log(nftProjects);

        let data = [];
        for (let i = 0; i < nftProjects.length; i++) {
          const currentNftProject = nftProjects[i];

          if (currentNftProject.blockchain === "Solana") {
            const candyMachineId = nftProjects[i].program_id;
            // console.log("candyMachineId");
            // console.log(candyMachineId);

            const candyMachineState = await getCandyMachineState(provider, candyMachineId, connection);

            console.log("candyMachineState");
            console.log(candyMachineState);

            data.push({
              ...currentNftProject,
              candyMachineState: candyMachineState.state,
            });
          }

        }

        setNftProjectList(data);
      } else {
        // TODO Show notification also
        console.log("Something went wrong");
      }
    } catch (error) {
      // TODO Show notification also
      console.log("findNftProject catch error");
      console.error(error);
    }
  };

  useEffect(() => {
    findNftProjects();
  }, []);

  // alert(nftProjectList);

  // console.log("nftProjectList");
  // console.log(nftProjectList);

  if (nftProjectList === null) {
    // TODO
    // Show skeletons or spinner instead?
    return null;
  }

  if (nftProjectList.length === 0) {
    // TODO
    // Show something else?
    return null;
  }

  let sellCurrentNftButtonText = "Mint NFTs";
  // let sellCurrentNftButtonText = "Closed";
  if (nftProjectList[0].candyMachineState.isSoldOut) {
    sellCurrentNftButtonText = "Closed";
  }

  return (
    <SolanaNFTContainer>
      <CurrentNFTProject 
        currentNftProject={nftProjectList[0]}
      />
      
      <div>
        <ExternalLink
          // href={`https://solana.codenjobs.com/nft/mint?&nftProjectId=${nftProjectList[0].id}`}
          href={`/solana/mint?&nftProjectId=${nftProjectList[0].id}`}
        >
          <SellCurrentNFTButton
            disabled={nftProjectList[0].candyMachineState.isSoldOut}
            // onClick={() => {
            //   router.push(`/nft/mint?&nftProjectId=${nftProjectList[0].id}`);
            // }}
          >
            {sellCurrentNftButtonText}
          </SellCurrentNFTButton>
        </ExternalLink>
      </div>

      <SolanaNFTListContainer>
        {nftProjectList.map(nftProject => {
          const {
            id,

            name,
            logo,
            website,

            candyMachineState,

            blockchain,
          } = nftProject;

          const nftPrice = formatNumber.asNumber(candyMachineState.price);
          const totalNfts = candyMachineState.itemsAvailable;
          const sold = `${(candyMachineState.itemsRedeemed * 100 / totalNfts).toFixed(2)}%`;

          let nftProjectStatus = "Live";

          if (candyMachineState.isSoldOut) {
            nftProjectStatus = "Sold Out";
          }

          return (

            <ExternalLink
              // href={`https://solana.codenjobs.com/nft/mint?&nftProjectId=${id}`}
              href={`/solana/mint?&nftProjectId=${id}`}
            >
              <SolanaNFTList
              // key={id}

              // onClick={() => {
              //   router.push(`/nft/mint?&nftProjectId=${id}`);
              // }}
              >
                <SolanaNFTProject>
                  <SolanaNFTProjectLogo
                    src={logo}
                    alt={name}
                  />
                  <SolanaNFTProjectName>
                    {name}
                  </SolanaNFTProjectName>
                </SolanaNFTProject>

                <SolanaNFTProjectState>
                  <SolanaNFTProjectStateDetailWrapper>
                    <SolanaNFTProjectStateLabel>
                      Sold
                    </SolanaNFTProjectStateLabel>
                    <SolanaNFTProjectStateValue>
                      {sold}
                    </SolanaNFTProjectStateValue>
                  </SolanaNFTProjectStateDetailWrapper>

                  <SolanaNFTProjectStateDetailWrapper>
                    <SolanaNFTProjectStateLabel>
                      Price per token
                    </SolanaNFTProjectStateLabel>
                    <SolanaNFTProjectStateValue>
                      {nftPrice} Sol
                    </SolanaNFTProjectStateValue>
                  </SolanaNFTProjectStateDetailWrapper>

                  <SolanaNFTProjectStateDetailWrapper>
                    <SolanaNFTProjectStateLabel>
                      Total
                    </SolanaNFTProjectStateLabel>
                    <SolanaNFTProjectStateValue>
                      {totalNfts}
                    </SolanaNFTProjectStateValue>
                  </SolanaNFTProjectStateDetailWrapper >

                  <SolanaNFTProjectStateDetailWrapper>
                    <SolanaNFTProjectStateLabel>
                      Blockchain
                    </SolanaNFTProjectStateLabel>
                    <SolanaNFTProjectStateValue>
                      {blockchain}
                    </SolanaNFTProjectStateValue>
                  </SolanaNFTProjectStateDetailWrapper >

                  <SolanaNFTProjectStateDetailWrapper>
                    <SolanaNFTProjectStateLabel
                      $isStatus={true}
                    >
                      Status
                    </SolanaNFTProjectStateLabel>
                    <SolanaNFTProjectStatus
                      $status={nftProjectStatus}
                    >
                      {nftProjectStatus}
                    </SolanaNFTProjectStatus>
                  </SolanaNFTProjectStateDetailWrapper>
                </SolanaNFTProjectState >
              </SolanaNFTList>
            </ExternalLink>
          );
        })}
      </SolanaNFTListContainer>

    </SolanaNFTContainer>
  );
};

export default ProjectList;

