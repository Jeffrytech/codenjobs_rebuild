import { styled } from "baseui";
import { solana } from "../design/colors";

// user/
const SolanaText = styled("span", () => {
  return {
    display: "flex",
        
    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.7,
      color: solana,
    },
  };
});

export default SolanaText;