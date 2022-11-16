import React from "react";

const SolanaImage = ({
  width = "1rem",
  height = "1rem",
}) => {
  return (<img src="/static/logos/solana.png" style={{
    width,
    height,
    // marginRight: "0.rem",
  }} />);
};

export default SolanaImage;