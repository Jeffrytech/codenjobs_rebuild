import {
  apiRequest,
} from "./requests";

const findNftProjectById = async (id: string) => {
  try {
    let target = `/api/v1/nft_project?id=${id}`;

    const { data } = await apiRequest.get(target);
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

const findNftProjectList = async () => {
  try {
    let target = `/api/v1/nft_project/list`;

    const { data } = await apiRequest.get(target);
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

export {
  findNftProjectById,
  findNftProjectList,
};