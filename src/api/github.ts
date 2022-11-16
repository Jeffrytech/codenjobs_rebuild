import {
  apiRequest,
} from "./requests";

// TODO
// Update server and remove /private from this
const githubRegister = async (ref_username = "") => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/github/register?ref_username=${ref_username}`);

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
  githubRegister
};