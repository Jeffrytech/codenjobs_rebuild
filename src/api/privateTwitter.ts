import {
  apiRequest,
} from "./requests";

const twitterLogin = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/twitter/login");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const twitterDisconnect = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/twitter/disconnect");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

export {
  twitterLogin,
  twitterDisconnect,
};