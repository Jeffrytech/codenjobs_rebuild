import { newOption, oldOption, topOption } from "./select";

const blogPostCategories = [
  "Programming",
  "Blockchain",
  
  "Design",
  "Marketing",
  "Customer Support", 
  "Writing",
  "Product",
  "Human Resource", 

  "Else", // Not in the list
];

const blogPostCategoryOptions = blogPostCategories.map(category => {
  return {
    label: category === "Else" ? "Not in the list" : category,
    value: category,
  };
});

const findBlogPostCategoryLabelValue = (category) => {
  if (category === "") {
    return undefined;
  } else if (category === "Else") {
    return {
      label: "Not in the list",
      value: "Else",
    };
  } else {
    return {
      label: category,
      value: category,
    };
  };
};

const blogPostStatusOptions = [
  { value: null, label: 'All' },
  { value: 'Draft', label: 'Draft' },
  { value: 'Public', label: 'Public' }
];

const findBlogPostStatusLabelValue = (status) => {
  if (status === null) {
    return {
      "label": "All",
      "value": null,
    };
  }

  return {
    label: status,
    value: status,
  };
};

// function capitalize(s) {
//   return s && s[0].toUpperCase() + s.slice(1);
// }

const findBlogListSortOptionsLabelValue = (sort) => {
  if (sort === "old") {
    return { "label": "Old", "value": "old" };
  } else if (sort === "new") {
    return { "label": "New", "value": "new" };
  } else if (sort === "top") {
    return { "label": "Top", "value": "top" };
  } else {
    return null;
  }
};

const blogListOptions = [
  topOption, // Make this work
  newOption,
  oldOption,
];

const profileBlogListNotOwnerOptions = [
  topOption,
  newOption,
  oldOption,
];

const findProfileBlogListNotOwnerSortOptionsLabelValue = (sort?: string) => {
  if (!sort) {
    return null;
  } else if (sort === "old") {
    return { "label": "Old", "value": "old" };
  } else if (sort === "new") {
    return { "label": "New", "value": "new" };
  } else if (sort === "top") {
    return { "label": "Top", "value": "top" };
  }
};

const blogCommentOptions = [
  // topOption, // Make this work
  newOption,
  oldOption,
];

const findBlogCommentSortOptionsLabelValue = (sort) => {
  if (!sort) {
    return null;
  } else if (sort === "old") {
    return { "label": "Old", "value": "old" };
  } else if (sort === "new") {
    return { "label": "New", "value": "new" };
  }
};

export {
  blogPostCategories,
  blogPostCategoryOptions,
  findBlogPostCategoryLabelValue,
  blogPostStatusOptions,
  findBlogPostStatusLabelValue,

  findBlogListSortOptionsLabelValue,

  blogListOptions,

  profileBlogListNotOwnerOptions,
  findProfileBlogListNotOwnerSortOptionsLabelValue,

  blogCommentOptions,
  findBlogCommentSortOptionsLabelValue,
};