import {
  apiRequest,
  // apiFormRequest,
} from "./requests";

const findUserMainNFTByUsername = async (username: string) => {
  try {
    // `http://localhost:8000/api/v1/profile?username=${username}`;
    const { data } = await apiRequest.get(`/api/v1/main_nft?username=${username}`);

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
  findUserMainNFTByUsername,
};