import {
  apiRequest,
} from "./requests";

const findTotalJobs = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/stat/total/jobs`);
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

// Before confirm state
const findTotalRecruiters = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/stat/total/recruiters`);
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

const findTotalCandidates = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/stat/total/candidates`);
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

const findTotalPageviews = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/stat/total/pageviews`);
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

const findPageviewsDetails = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/stat/pageviews/details`);
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

const findTotalBlogs = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/stat/total/blogs`);
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
  findTotalJobs,
  
  findTotalRecruiters,
  findTotalCandidates,

  findTotalPageviews,
  findPageviewsDetails,

  findTotalBlogs,
};