import { white } from "../../../design/colors";
import Carousel, { CSSOnlyCarousel } from "../../Elements/carousel";
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

/* 

        autoplay
        autoplaySpeed={1000}
        infinite
        slidesToScroll={2}
        slidesToShow={6}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}

*/

const BlockchainList = () => {
  return (
    <div className="bg-white p-5 sm:px-20 blockchain-list">
      <CSSOnlyCarousel>
        {options.map((c) => (
          <div key={c}>
            <img
              alt=""
              className="px-2 sm:px-5"
              src={`/static/logos/${c}.svg`}
            />
          </div>
        ))}
      </CSSOnlyCarousel>
    </div>
  );
};

export default BlockchainList;
