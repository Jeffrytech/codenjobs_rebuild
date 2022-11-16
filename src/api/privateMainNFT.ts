// Update this part with tutorials.

import {
  apiRequest,
  // apiFormRequest,
} from "./requests";

const verifyMainNFT = async (
  public_key: string,
  link: string,
  blockchain_type: string,
) => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/main_nft", {
      public_key,
      link,
      blockchain_type,
    });

    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      error,
    };
  }
};

const updateMainNFT = async (
  public_key: string,
  link: string,
  blockchain_type: string,
) => {
  try {
    const { data } = await apiRequest.patch("/api/v1/private/main_nft", {
      public_key,
      link,
      blockchain_type,
    });

    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      error,
    };
  }
};

const deleteMainNFT = async () => {
  try {
    const { data } = await apiRequest.delete("/api/v1/private/main_nft");

    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      error,
    };
  }
};

export {
  verifyMainNFT,
  updateMainNFT,

  deleteMainNFT,
};