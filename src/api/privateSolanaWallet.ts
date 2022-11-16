import {
  apiRequest,
  // apiFormRequest,
} from "./requests";

const verifySolanaWallet = async (
  user_public_key: string,
) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/solana/wallet?user_public_key=${user_public_key}`);

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

const updateSolanaWallet = async (
  user_public_key: string,
) => {
  try {
    const { data } = await apiRequest.patch(`/api/v1/private/solana/wallet?user_public_key=${user_public_key}`);

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

const deleteSolanaWallet = async () => {
  try {
    const { data } = await apiRequest.delete("/api/v1/private/solana/wallet");

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
  verifySolanaWallet,
  updateSolanaWallet,

  deleteSolanaWallet,
};