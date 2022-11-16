import { newOption, oldOption, topOption } from "./select";

const profileFollowerListOptions = [
  // topOption,
  newOption,
  oldOption,
];

const findProfileFollowerListSortOptionsLabelValue = (sort?: string) => {
  if (!sort) {
    return null;
  } else if (sort === "old") {
    return { "label": "Old", "value": "old" };
  } else if (sort === "new") {
    return { "label": "New", "value": "new" };
  } 
  // else if (sort === "top") {
  //   return { "label": "Top", "value": "top" }
  // }
};

export {
  profileFollowerListOptions,
  findProfileFollowerListSortOptionsLabelValue
};