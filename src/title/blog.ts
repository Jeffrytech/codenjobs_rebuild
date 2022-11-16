const formatBlogListTitle = (
  numberOfBlogs: Number,

  // job: string,
  // location: string,
  // salary: string,

  // skill: string,
) => {
  if (numberOfBlogs === 0 ) {
    return "No results";
  } else {
    // let suffix = "People";
    let suffix = "Posts";
    if (numberOfBlogs < 2) {
      suffix = "Post";
    }

    const hiringListTitle = `${numberOfBlogs} ${suffix}`;
    return hiringListTitle;
  }
};

export {
  formatBlogListTitle,
};