import DOMPurify from "dompurify";

import {
  apiRequest,
  // apiFormRequest,
} from "./requests";

const createBlogComment = async (values) => {
  try {
    const {
      blog_id,
      parent_blog_comment_id,
      text,
    } = values;

    const { data } = await apiRequest.post("/api/v1/private/blog/comment", {
      blog_id,
      parent_blog_comment_id,
      text: DOMPurify.sanitize(text),
    });
    // console.log("data");
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const editBlogComment = async (values) => {
  try {
    // console.log("values");
    // console.log(values);

    const {
      id,
      blog_id,
      parent_blog_comment_id,
      text,
    } = values;

    const { data } = await apiRequest.patch("/api/v1/private/blog/comment", {
      id,
      blog_id,
      parent_blog_comment_id,
      text: DOMPurify.sanitize(text),
    });
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

// curl -X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?comment_id=42573737-5880-4925-a1ed-69ff2b5bc8db"
const deleteBlogComment = async (values) => {
  try {
    const {
      id,
    } = values;

    // alert(parent_blog_comment_id);

    let target = `/api/v1/private/blog/comment?id=${id}`;

    // curl - X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?id=42573737-5880-4925-a1ed-69ff2b5bc8db
    // curl - X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?id=42573737-5880-4925-a1ed-69ff2b5bc8db&parent_blog_comment_id=42573737-5880-4925-a1ed-69ff2b5bc8db"
    const { data } = await apiRequest.delete(target);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const deleteBlogComments = async (values) => {
  try {
    const {
      id,
    } = values;

    // alert(parent_blog_comment_id);

    let target = `/api/v1/private/blog/comment/all?id=${id}`;

    // curl - X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?id=42573737-5880-4925-a1ed-69ff2b5bc8db
    // curl - X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?id=42573737-5880-4925-a1ed-69ff2b5bc8db&parent_blog_comment_id=42573737-5880-4925-a1ed-69ff2b5bc8db"
    const { data } = await apiRequest.delete(target);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const deleteBlogChildComment = async (values) => {
  try {
    const {
      id,
      parent_blog_comment_id,
    } = values;

    // alert(parent_blog_comment_id);

    let target = `/api/v1/private/blog/comment/child?id=${id}&parent_blog_comment_id=${parent_blog_comment_id}`;

    // curl - X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?id=42573737-5880-4925-a1ed-69ff2b5bc8db
    // curl - X DELETE "http://127.0.0.1:8000/api/v1/private/blog/comment?id=42573737-5880-4925-a1ed-69ff2b5bc8db&parent_blog_comment_id=42573737-5880-4925-a1ed-69ff2b5bc8db"
    const { data } = await apiRequest.delete(target);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const findUserVoteMoneyForBlogComment = async (id: string) => {
  try {
    const target = `api/v1/private/blog/comment/vote/money?id=${id}`;
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

const updateUserVoteMoneyForBlogComment = async (id: string) => {
  try {

    // Find a library or something that I can build a target path with optional queries?
    const target = `api/v1/private/blog/comment/vote/money?id=${id}`;

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

export {
  createBlogComment,
  editBlogComment,

  deleteBlogComment,
  deleteBlogComments,
  
  deleteBlogChildComment,
  
  findUserVoteMoneyForBlogComment,
  updateUserVoteMoneyForBlogComment,
  // updateBlogComment,
};