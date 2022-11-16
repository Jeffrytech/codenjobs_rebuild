import {
  apiRequest,
} from "./requests";

// $curl "http://127.0.0.1:8000/api/v1/blog/comment/list/total?blog_id=e177c677-a77e-43d1-97a8-f668601df777"
const findTotalBlogComments = async (blog_id: string) => {
  try {
    let target = `/api/v1/blog/comment/list/total?blog_id=${blog_id}`;

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

// $curl "http://127.0.0.1:8000/api/v1/blog/comment/list?blog_id=e177c677-a77e-43d1-97a8-f668601df777"
const findBlogCommentList = async (blog_id: string) => {
  try {
    // let target = `/api/v1/blog/comment/list?blog_id=${blog_id}`;
    let target = `/api/v1/blog/comment/list?blog_id=${blog_id}`;

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

// $curl "http://127.0.0.1:8000/api/v1/blog/comment/list?blog_id=e177c677-a77e-43d1-97a8-f668601df777"
const findBlogChildCommentList = async (blog_id: string, parent_blog_comment_id: string) => {
  try {
    // let target = `/api/v1/blog/comment/list?blog_id=${blog_id}`;
    let target = `/api/v1/blog/comment/list/child?blog_id=${blog_id}&parent_blog_comment_id=${parent_blog_comment_id}`;

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


// const updateBlogComment = async (id, values) => {
//   try {
//     const {
//       cover,
//       title,
//       body,
//       category,
//       tags,
//     } = values;

//     // console.log("cover");
//     // console.log(cover);

//     // eslint-disable-next-line no-undef
//     const updateBlogPostForm = new FormData();

//     updateBlogPostForm.append("id", id);

//     // Should hnalde this better
//     if (cover) {
//       updateBlogPostForm.append(
//         "cover",
//         cover,
//         cover.name
//       );
//     }

//     updateBlogPostForm.append("title", title);
//     updateBlogPostForm.append("body", body);
//     updateBlogPostForm.append("category", category);
//     updateBlogPostForm.append("tags", tags);

//     const { data } = await apiFormRequest.patch("/api/v1/private/blog", updateBlogPostForm);
//     return {
//       data,
//     };
//   } catch (error) {
//     // Use it only to debug.
//     console.error(error);

//     return {
//       error
//     };
//   }
// };

export {
  findTotalBlogComments,
  findBlogCommentList,
  findBlogChildCommentList,
  // updateBlogComment,
};