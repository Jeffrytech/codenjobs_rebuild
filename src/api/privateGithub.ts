import {
  apiRequest,
} from "./requests";

const githubLogin = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/github/login");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const githubAuthorize = async (code: string, state: string) => {
  try {
    // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=1&state=1`);
    // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=${code}&state=${state}`);
    const { data } = await apiRequest.post("/api/v1/private/github/authorize", {
      code,
      state,
    });

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const githubDisconnect = async () => {
  try {
    // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=1&state=1`);
    // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=${code}&state=${state}`);
    const { data } = await apiRequest.post("/api/v1/private/github/disconnect");

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
  githubLogin,
  githubAuthorize,

  githubDisconnect,
};