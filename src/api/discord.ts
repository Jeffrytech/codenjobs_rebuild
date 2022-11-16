import {
  apiRequest,
} from "./requests";

const findCodenjobsDiscordServerMemberCount = async () => {
  try {
    const { data } = await apiRequest.get(`/api/v1/discord/server/member-count`);
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

// TODO
// Update server and remove /private from this
const discordRegister = async (ref_username = "") => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/discord/register?ref_username=${ref_username}`);

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
  findCodenjobsDiscordServerMemberCount,

  discordRegister,
};