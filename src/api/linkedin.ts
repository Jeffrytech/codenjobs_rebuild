import {
  apiRequest,
} from "./requests";

const linkedinRegister = async (ref_username = "") => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/linkedin/register?ref_username=${ref_username}`);

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
  linkedinRegister,
};