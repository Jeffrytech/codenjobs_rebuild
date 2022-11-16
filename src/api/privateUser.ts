import {
  apiRequest,
} from "./requests";

const updateUserBalance = async (value: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/balance?value=${value}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const findUserSolanaWallet = async (value: string) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/private/user/solana/wallet`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const updateUserSolanaWallet = async (value: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/solana/wallet?value=${value}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const allowMessage = async (allow: boolean) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/message?allow_message=${allow}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const updateNewsletterSubscription = async (subscription: boolean) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/newsletter?subscription=${subscription}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const follow = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/follow?username=${username}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const unfollow = async (username: string) => {
  try {
    const { data } = await apiRequest.delete(`/api/v1/private/user/follow?username=${username}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const followOrNot = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/follow_or_not?username=${username}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

// const findFollowersForUsers = async (username: string, sort?: string, skip?: Number, limit?: Number) => {
const findFollowersForUsers = async (username: string, skip?: Number, limit?: Number) => {
  try {
    let target = `/api/v1/private/user/followers?username=${username}`;
    // if (sort !== null) {
    //   target += `&sort=${sort}`;
    // }

    if (skip) {
      target += `&skip=${skip}`;
    }

    if (limit) {
      target += `&limit=${limit}`;
    }

    // alert(target);

    const { data } = await apiRequest.post(target);
    // console.log(data);

    return {
      data, // boolean
    };
  } catch (error) {
    return {
      error
    };
  }
};

const block = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/block?username=${username}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const unblock = async (username: string) => {
  try {
    const { data } = await apiRequest.delete(`/api/v1/private/user/block?username=${username}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const findBlockedUserList = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/user/block/list");
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const upsertRegisterReferral = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/user/register/referral`);
    // console.log(data);

    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const findUserRegisterReferenceList = async () => {
  try {
    const { data } = await apiRequest.get(`/api/v1/private/user/register/reference`);
    // console.log(data);

    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

export {
  findUserSolanaWallet,
  updateUserSolanaWallet,
  
  updateUserBalance, // Should be userSolanaBalance later?
  
  allowMessage,
  updateNewsletterSubscription,

  follow,
  unfollow,

  followOrNot,
  findFollowersForUsers,

  block,
  unblock,
  findBlockedUserList,

  upsertRegisterReferral,

  findUserRegisterReferenceList,
};