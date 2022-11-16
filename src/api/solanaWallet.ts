import {
  apiRequest,
  // apiFormRequest,
} from "./requests";

const findUserSolanaWalletByUsername = async (username: string) => {
  try {
    // `http://localhost:8000/api/v1/profile?username=${username}`;
    const { data } = await apiRequest.get(`/api/v1/solana/wallet?username=${username}`);

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
  findUserSolanaWalletByUsername,
};