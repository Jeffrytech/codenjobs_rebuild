import { topOption, newOption, oldOption } from "./select";

const findForhireListSortOptionsLabelValue = (sort) => {
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

const forhireListOptions = [
  topOption, // Make this work
  newOption,
  oldOption,
];

export {
  findForhireListSortOptionsLabelValue,
  forhireListOptions,
};