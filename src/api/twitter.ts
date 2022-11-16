import {
  apiRequest,
} from "./requests";

const findTwitterTotalFollowers = async () => {
  try {
    const { data } = await apiRequest.get(`/api/v1/twitter/total/followers`);
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error
    };
  }
};

const twitterRegister = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/twitter/register`);

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
  findTwitterTotalFollowers,
  twitterRegister,
};