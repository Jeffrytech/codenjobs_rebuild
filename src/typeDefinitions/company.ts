// Use Enum?

import { newOption, oldOption } from "./select";

const profileCompanyListOwnerOptions = [
  newOption,
  oldOption,
];

const findProfileCompanyListOwnerSortOptionsLabelValue = (sort?: string) => {
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
  profileCompanyListOwnerOptions,
  findProfileCompanyListOwnerSortOptionsLabelValue,
};