import { newOption, oldOption, twoOption, fiveOption, tenOption } from "./select";

const profileFileListOptions = [
  newOption,
  oldOption,
];

const findProfileFileListSortOptionsLabelValue = (sort?: string) => {
  if (!sort) {
    return null;
  } else if (sort === "old") {
    return { "label": "Old", "value": "old" };
  } else if (sort === "new") {
    return { "label": "New", "value": "new" };
  } 
};

const profileFileListPageOptions = [
  twoOption,
  fiveOption,
  tenOption,
];

const profileFileListPageOptionsLabelValue = (page?: string) => {
  if (!page) {
    return null;
  } else if (page === "2") {
    return { "label": "2", "value": "2" };
  } else if (page === "5") {
    return { "label": "5", "value": "5" };
  } else if (page === "10") {
    return { "label": "10", "value": "10" };
  }
   
};

export {
  profileFileListOptions,
  findProfileFileListSortOptionsLabelValue,
  
  profileFileListPageOptions,
  profileFileListPageOptionsLabelValue
};