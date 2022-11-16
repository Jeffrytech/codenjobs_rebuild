import {
  apiRequest,
  apiFormRequest,
} from "./requests";

const createBlogPost = async (values) => {
  try {
    const {
      cover,
      title,
      body,
      category,
      tags,
    } = values;

    // eslint-disable-next-line no-undef
    const createBlogPostForm = new FormData();

    // This for optionals.
    // if (companyDescription) {
    //   createJobPostForm.append("companyDescription", companyDescription);
    // }

    // This doesn't work when update with previous job id because logo is not blob.
    // Should find a better way to solve this problem.
    // User should remove the logo first before edit it again?
    if (cover) {
      createBlogPostForm.append(
        "cover",
        cover,
        cover.name
      );
    }

    createBlogPostForm.append("title", title);
    createBlogPostForm.append("body", body);
    createBlogPostForm.append("category", category);
    createBlogPostForm.append("tags", tags);

    const { data } = await apiFormRequest.post("/api/v1/private/blog", createBlogPostForm);
    // const { data } = await apiRequest.get("/api/v1/job/list");
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

const updateBlogPost = async (id, values) => {
  try {
    const {
      cover,
      title,
      body,
      category,
      tags,
    } = values;

    // console.log("cover");
    // console.log(cover);

    // eslint-disable-next-line no-undef
    const updateBlogPostForm = new FormData();

    updateBlogPostForm.append("id", id);

    // Should hnalde this better
    if (cover) {
      updateBlogPostForm.append(
        "cover",
        cover,
        cover.name
      );
    }

    updateBlogPostForm.append("title", title);
    updateBlogPostForm.append("body", body);
    updateBlogPostForm.append("category", category);
    updateBlogPostForm.append("tags", tags);

    const { data } = await apiFormRequest.patch("/api/v1/private/blog", updateBlogPostForm);
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

// Should be something to edit status for users?
// Only send necessary ddata to edit blog post
const findBlogByIdForOwner = async (id: string) => {
  try {
    // Should be equal to this.
    // curl - X POST "http://localhost:8000/api/v1/private/job/find?id=69a024d1-c240-476e-b7a9-3092bf980b83" - H  "accept: application/json" - H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGVhZHlsZWFybmVyIiwiZXhwIjoxNjEyMzYwNDM0fQ.YYZPFA9ZdlpASFoKu-UBuaP5QRReB4AyceWQa_OI4ac" - d ""
    const { data } = await apiRequest.get(`/api/v1/private/blog?id=${id}`);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error
    };
  }
};

const setBlogStatusToDraft = async (id: string) => {
  try {
    // True, False or error
    const { data } = await apiRequest.patch(`/api/v1/private/blog/status/draft?id=${id}`);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    // console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    console.log("error");
    console.error(error);

    return {
      error
    };
  }
};

const setBlogStatusToPublic = async (id: string) => {
  try {
    // True, False or error
    const { data } = await apiRequest.patch(`/api/v1/private/blog/status/public?id=${id}`);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    // console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    console.log("error");
    console.error(error);

    return {
      error
    };
  }
};

// const blogStatusToDraft = async (id: string) => {
//   try {
//     // Should be equal to this.
//     // curl - X POST "http://localhost:8000/api/v1/private/job/find?id=69a024d1-c240-476e-b7a9-3092bf980b83" - H  "accept: application/json" - H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGVhZHlsZWFybmVyIiwiZXhwIjoxNjEyMzYwNDM0fQ.YYZPFA9ZdlpASFoKu-UBuaP5QRReB4AyceWQa_OI4ac" - d ""
//     const { data } = await apiRequest.get(`/api/v1/private/blog?id=${id}`);

//     return {
//       data,
//     };
//   } catch (error) {
//     // Use it only to debug.
//     console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
//     // console.error(error);

//     return {
//       error
//     };
//   }
// };


const deleteBlogByIdForOwner = async (id: string) => {
  try {
    // Should be equal to this.
    // curl - X POST "http://localhost:8000/api/v1/private/job/find?id=69a024d1-c240-476e-b7a9-3092bf980b83" - H  "accept: application/json" - H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGVhZHlsZWFybmVyIiwiZXhwIjoxNjEyMzYwNDM0fQ.YYZPFA9ZdlpASFoKu-UBuaP5QRReB4AyceWQa_OI4ac" - d ""
    const { data } = await apiRequest.delete(`/api/v1/private/blog?id=${id}`);

    // console.log("data");
    // console.log(data);
    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error
    };
  }
};

const findBlogListByOwner = async (status) => {
  try {
    
    // Find a library or something that I can build a target path with optional queries?
    let target = "/api/v1/private/blog/list";
    if (status !== null) {
      target = `/api/v1/private/blog/list?&status=${status}`;
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

const findUserVoteMoneyForBlog = async (id: string) => {
  try {

    // Find a library or something that I can build a target path with optional queries?
    const target = `api/v1/private/blog/vote/money?id=${id}`;
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

const updateUserVoteMoneyForBlog = async (id: string) => {
  try {

    // Find a library or something that I can build a target path with optional queries?
    const target = `api/v1/private/blog/vote/money?id=${id}`;

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

const editBlogCommentable = async (id: string) => {
  try {

    const target = `api/v1/private/blog/commentable?id=${id}`;

    const { data } = await apiRequest.patch(target);

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
  createBlogPost,
  updateBlogPost,

  findBlogByIdForOwner,

  setBlogStatusToDraft,
  setBlogStatusToPublic,

  // findJobCompanyByIdForOwner,
  
  deleteBlogByIdForOwner,

  // findJobListByOwner,
  findBlogListByOwner,

  findUserVoteMoneyForBlog,
  updateUserVoteMoneyForBlog,

  editBlogCommentable,
};