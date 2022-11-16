import {
  apiRequest,
} from "./requests";

const findBlogList = async (
  title: string, 
  category: string, 
  tag: string, 
  sort: string, 
  skip?: Number, 
  limit?: Number
) => {
  try {
    // $curl "localhost:8000/api/v1/blog/list?&sort=new&limit=10&skip=10"
    let target = `/api/v1/blog/list?`;
    // let target = `/api/v1/blog/list?&sort=new&limit=10&skip=10`;
    if (title !== "") {
      target += `&title=${title}`;
    }

    if (category !== "") {
    // if (category !== undefined) {
      target += `&category=${category}`;
    }

    if (tag !== "") {
      // target += `&tag=${encodeURIComponent(tag)}`;
      target += `&tag=${encodeURIComponent(tag)}`;
    }

    if (sort !== "") {
      target += `&sort=${sort}`;
    }

    if (skip !== null) {
      target += `&skip=${skip}`;
    }

    if (limit !== null) {
      target += `&limit=${limit}`;
    }

    // alert(target);

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

const findBlogListByUsername = async (username: string, sort?: string, skip?: Number, limit?: Number) => {
  try {
    let target = `/api/v1/blog/list?&username=${username}`;

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

const findMoreBlogListByUsername = async (username: string, blog_id: string) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/blog/list/more?&username=${username}&blog_id=${blog_id}&limit=10`);
    // const { data } = await apiRequest.get(`/api/v1/blog/list/more?&username=${username}&blog_id=${blog_id}&limit=10`);
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

const findTotalBlogList = async (username?: string) => {
  try {
    let target = `/api/v1/blog/list/total`;

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


const findMoreBlogListByCategory = async (category: string, blog_id) => {
  try {

    // Use null for pages other than job view
    const target = blog_id === null ? `/api/v1/blog/list/more/category?&category=${category}&limit=10` : `/api/v1/blog/list/more/category?&category=${category}&blog_id=${blog_id}&limit=10`;
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

const findRecentBlogList = async (limit: number) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/blog/list?&limit=${limit}`);
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

const findTopBlogList = async (limit: number) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/blog/list?&limit=${limit}&sort=top`);
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

const findBlogVoteMoneyCount = async (id: string) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/blog/vote/money/count?id=${id}`);
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

const findBlogVoteMoneyUsers = async (id: string) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/blog/vote/money/users?id=${id}`);
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
  // findJobListByUsername,
  findBlogList, // blogs

  findBlogListByUsername,
  findTotalBlogList,
  
  findMoreBlogListByUsername,
  
  findMoreBlogListByCategory,

  findRecentBlogList,
  findTopBlogList,

  findBlogVoteMoneyCount,
  findBlogVoteMoneyUsers,
  
  // findJobStatusById,
};