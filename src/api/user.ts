import {
  apiRequest,
} from "./requests";

// Before confirm state
const isUserUnconfirmed = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/user/unconfirmed?username=${username}`);
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

const findTotalFollowers = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/user/total/followers?username=${username}`);
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

const findTotalPortfolios = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/user/total/portfolios?username=${username}`);
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

// User without login information
// const findFollowersForNotUsers = async (username: string, sort?: string, skip?: Number, limit?: Number) => {
const findFollowersForNotUsers = async (username: string, skip?: Number, limit?: Number) => {
  try {
    let target = `/api/v1/user/followers?username=${username}`;
    // if (sort !== null) {
    //   target += `&sort=${sort}`;
    // }

    // alert(skip);
    // alert(limit);

    if (skip) {
      target += `&skip=${skip}`;
    }

    if (limit) {
      target += `&limit=${limit}`;
    }

    const { data } = await apiRequest.post(target);
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

// Find total jobs by username
const findTotalJobs = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/user/total/jobs?username=${username}`);
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

const findTopUsersForHire = async (limit: number) => {
  try {
    // `${API}/api/v1/user/forhire/list?`
    // const { data } = await apiRequest.get(`/api/v1/blog/list?&limit=${limit}`);
    const { data } = await apiRequest.get(`/api/v1/user/forhire/list?&limit=${limit}&sort=top`);
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

const findUserRegisterReferral = async (username: string) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/user/register/referral?username=${username}`);
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

//   if (job !== undefined) {
//     target += `&job=${job}`;
//   }

//   if (location !== undefined) {
//     target += `&location=${location}`;
//   }

//   if (salary !== undefined) {
//     target += `&salary=${salary}`;
//   }

//   if (use_cryptocurrency !== undefined) {
//     target += `&use_cryptocurrency=${use_cryptocurrency}`;
//   }

//   if (skill !== undefined) {
//     target += `&skill=${encodeURIComponent(skill)}`;
//     // target += `&skill=${skill}`;
//   }

//   if (sort !== undefined) {
//     target += `&sort=${sort}`;
//   }

const findUserForhireList = async (
  job: string,
  location: string,
  salary: string,
  sort: string,
  skill: string,
  use_cryptocurrency?: boolean,
  skip?: Number,
  limit?: Number
) => {
  try {
    let target = `/api/v1/user/forhire/list?`;

    if (job !== "") {
      target += `&job=${job}`;
    }

    if (location !== "") {
      target += `&location=${location}`;
    }

    if (salary !== "") {
      target += `&salary=${salary}`;
    }

    if (sort !== "") {
      target += `&sort=${sort}`;
    }

    if (skill !== "") {
      target += `&skill=${encodeURIComponent(skill)}`;
    }

    // @ts-ignore
    if (use_cryptocurrency !== "") {
      target += `&use_cryptocurrency=${use_cryptocurrency}`;
    }

    if (skip !== null) {
      target += `&skip=${skip}`;
    }

    if (limit !== null) {
      target += `&limit=${limit}`;
    }

    // alert(target);
    
    // $curl "localhost:8000/api/v1/user/forhire/list?&skip=0&limit=10"
    const { data } = await apiRequest.get(target);
    // const { data } = await apiRequest.get("/api/v1/user/forhire/list?&skip=0&limit=10");
    // const { data } = await apiRequest.get("/api/v1/user/forhire/list");

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
  isUserUnconfirmed,

  findTotalFollowers,
  findFollowersForNotUsers,
  
  findTotalJobs,

  findTotalPortfolios,

  findTopUsersForHire,

  findUserRegisterReferral,

  findUserForhireList,
};