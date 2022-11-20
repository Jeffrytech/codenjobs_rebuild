import { white } from "../../../design/colors";
import Carousel from "../../carousel";
import { BlockchainListLogo, BlockchainListSection } from "./BlockchainListCSS";

const options = [
  "eth",
  "binance",
  "tron",
  "polkadot",
  "cardano",
  "solana",
  "avalanche",
  "fantom",
];

const BlockchainList = () => {
  return (
    <div className="bg-white p-5 sm:px-20 blockchain-list">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        infinite
        slidesToScroll={1}
        slidesToShow={6}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {options.map((c) => (
          <div key={c}>
            <img
              alt=""
              className="px-2 sm:px-5"
              src={`/static/logos/${c}.svg`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BlockchainList;
