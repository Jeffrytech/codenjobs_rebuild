import {
  apiRequest,
} from "./requests";

const findJobList = async (
  title: string,
  category: string,
  type: string,
  location: string,
  salary: string,
  skill: string,
  company_name: string,
  sort: string,
  pay_in_cryptocurrency?: boolean,
  skip?: Number,
  limit?: Number
) => {
  console.log("sort");
  console.log(sort);

  try {

    let target = `/api/v1/job/list?`;

    if (title !== "") {
      target += `&title=${title}`;
    }

    if (category !== "") {
      target += `&location=${location}`;
    }

    if (type !== "") {
      target += `&type=${type}`;
    }

    if (location !== "") {
      target += `&location=${location}`;
    }

    if (salary !== "") {
      target += `&salary=${salary}`;
    }

    if (skill !== "") {
      target += `&skill=${encodeURIComponent(skill)}`;
    }

    if (company_name !== "") {
      target += `&company_name=${company_name}`;
    }

    if (sort !== "") {
      target += `&sort=${sort}`;
    }

    // @ts-ignore
    if (pay_in_cryptocurrency !== "") {
      target += `&pay_in_cryptocurrency=${pay_in_cryptocurrency}`;
    }

    if (skip !== null) {
      target += `&skip=${skip}`;
    }

    if (limit !== null) {
      target += `&limit=${limit}`;
    }
    
    const { data } = await apiRequest.get(target);
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83

    return {
      error
    };
  }
};

// const findJobList = async () => {
//   try {
//     const { data } = await apiRequest.get("/api/v1/job/list");
//     // console.log(data);

//     return {
//       data,
//     };
//   } catch (error) {
//     // Use it only to debug.
//     // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83

//     return {
//       error
//     };
//   }
// };

const findJobListIndex = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/job/list?&limit=50");

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83

    return {
      error
    };
  }
};

// const jobListForNotOnwerEndpointFromQueries = ({
//   username,
//   sort,
//   page,
// }) => {
//   // console.log("company_name");
//   // console.log(company_name);

//   // Use .env later with API?
//   // Update this with this?
//   // https://usefulangle.com/post/81/javascript-change-url-parameters
//   // https://www.npmjs.com/package/url-parse
//   let target = `/api/v1/job/list?`;

//   if (page !== undefined) {
//     target += `&page=${page}`;
//   }

//   return target;
// };

const findJobListByUsername = async (username: string, sort?: string, skip?: number, limit?: number) => {
  try {
    let target = `/api/v1/job/list?username=${username}`;

    if (sort !== null) {
      target += `&sort=${sort}`;
    }

    if (skip) {
      target += `&skip=${skip}`;
    }

    if (limit) {
      target += `&limit=${limit}`;
    }

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

const findTotalJobList = async (username?: string) => {
  try {
    let target = `/api/v1/job/list/total`;
    // http://127.0.0.1:8000/api/v1/job/list/total

    if (username) {
      target += `?&username=${username}`;
    }

    // const { data } = await apiRequest.get(target);
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

// job id can be uuid or null
const findMoreJobListByUsername = async (username: string, job_id) => {
  try {

    // Use null for pages other than job view
    const target = job_id === null ? `/api/v1/job/list/more/username?&username=${username}&limit=10` : `/api/v1/job/list/more/username?&username=${username}&job_id=${job_id}&limit=10`;
    const { data } = await apiRequest.post(target);
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

const findMoreJobListByCategory = async (category: string, job_id) => {
  try {

    // Use null for pages other than job view
    const target = job_id === null ? `/api/v1/job/list/more/category?&category=${category}&limit=10` : `/api/v1/job/list/more/category?&category=${category}&job_id=${job_id}&limit=10`;
    const { data } = await apiRequest.post(target);
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

const findJobStatusById = async (id: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/job/status?id=${id}`);
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

// const findJobSkillList = async () => {
//   try {
//     const { data } = await apiRequest.get("/api/v1/job/skill/list");
//     // console.log(data);

//     return {
//       data,
//     };
//   } catch (error) {
//     // Use it only to debug.
//     // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83
//     // console.error(error);

//     return {
//       error
//     };
//   }
// };


const findJobPostPrices = async () => {
  try {
    const { data } = await apiRequest.get("/job/post/server/prices");
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
  findJobList,
  findJobListIndex,

  findJobListByUsername,
  findTotalJobList,
  
  findMoreJobListByUsername,

  findMoreJobListByCategory,
  
  findJobStatusById,
  findJobPostPrices,

  // findJobSkillList,
};