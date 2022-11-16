import {
  apiRequest,
} from "./requests";

const discordLogin = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/discord/login");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

// const authorize = async (code: string, state: string) => {
//   try {
//     // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=1&state=1`);
//     // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=${code}&state=${state}`);
//     const { data } = await apiRequest.post("/api/v1/private/discord/authorize", {
//       code,
//       state,
//     });

//     return {
//       data,
//     };
//   } catch (error) {
//     return {
//       error
//     };
//   }
// };

const discordDisconnect = async () => {
  try {
    // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=1&state=1`);
    // const { data } = await apiRequest.get(`/api/v1/private/github/authorize?code=${code}&state=${state}`);
    const { data } = await apiRequest.post("/api/v1/private/discord/disconnect");

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
  discordLogin,
  // Use this or not?
  // authorize,

  discordDisconnect,
};