import {
  apiRequest,
} from "./requests";

const findTelegramGroupMemberCount = async () => {
  try {
    const { data } = await apiRequest.get(`/api/v1/telegram/group/member-count`);
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

const findTelegramChannelSubscriberCount = async () => {
  try {
    const { data } = await apiRequest.get(`/api/v1/telegram/channel/subscriber-count`);
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
  findTelegramGroupMemberCount,
  findTelegramChannelSubscriberCount,
};