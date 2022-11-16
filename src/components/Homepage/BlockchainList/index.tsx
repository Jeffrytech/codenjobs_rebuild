import { white } from "../../../design/colors";
import { BlockchainListLogo, BlockchainListSection } from "./BlockchainListCSS";

const BlockchainList = () => {
  return (
    <BlockchainListSection
      id="blockchain-list"
    >
      <BlockchainListLogo
        src="/static/logos/eth.svg"
      />
      <BlockchainListLogo
        src="/static/logos/binance.svg"
      />
      <BlockchainListLogo
        src="/static/logos/solana.svg"
      />
      <BlockchainListLogo
        src="/static/logos/polkadot.svg"
      />
      <BlockchainListLogo
        src="/static/logos/cardano.svg"
      />
    </BlockchainListSection>
  );
};

export default BlockchainList;