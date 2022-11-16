import { newOption, oldOption } from "./select";

// @unique
// class JobStatus(Enum):
// DRAFT = "Draft"
// CONFIRM = "Confirm"

// HOLD = "Hold"
// REVIEW = "Review"

// CANCELLED = "Cancelled"
// PAID = "Paid"

// CLOSED = "Closed"

// @unique
// class JobType(Enum):
// FULLTIME = "Full-Time"
// PARTTIME = "Part-Time"
// CONTRACT = "Contract"
// FREELANCE = "Freelance"
// INTERNSHIP = "Internship"

// @unique
// class JobCategory(Enum):
//     # name is used to save the data at the database and it is also the value when read.
//     # name = value
//     PROGRAMMING = 'Programming'
//     # DEVOPS = "DevOps"
//     # SYSADMIN = "Sysadmin"
//     # BLOCKCHAIN = "Blockchain"

//     DESIGN = 'Design'
//     MARKETING = "Marketing"
//     CUSTOMERSUPPORT = 'Customer Support'
//     WRITING = "Writing"
//     PRODUCT = "Product"
//     HUMANRESOURCE = "Human Resource"

//     # Use null? with nullable=True teporaily
//     # NOTLISTED = "Not listed"
//     # Other = "other"

// Include jobStatus here later to resue later?

const FULLTIME = "Full-Time";
const PARTTIME = "Part-Time";
const FREELANCE = "Freelance";
const CONTRACT = "Contract";
const INTERNSHIP = "Internship";

const jobTypes = [
  FULLTIME,
  PARTTIME,
  FREELANCE,
  CONTRACT,
  INTERNSHIP,
  // "Full-Time",
  // "Part-Time",
  // "Contract",
  // "Freelance",
  // "Internship"
];

const jobTypeOptions = jobTypes.map(type => {
  return {
    label: type,
    value: type,
  };
});

const findJobTypeValue = (type) => {
  return {
    value: type,
  };
};

const findJobTypeLabelValue = (type) => {
  if (type === "") {
    return undefined;
  }  else {
    return {
      label: type,
      value: type,
    };
  };
};

const jobCategories = [
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

const jobCategoryOptions = jobCategories.map(category => {
  return {
    label: category === "Else" ? "Not in the list" : category,
    value: category,
  };
});

const findJobCategoryLabelValue = (category) => {
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

const jobStatus = [
  "Draft",

  "Paid",
  "Confirmed",
  "Hold",
  "Review",
  
  // "Refund",
  "Closed", // Use this or not?
];

const jobStatusOptions = [{ value: null, label: 'All' }, ...jobStatus.map(type => {
  return {
    label: type,
    value: type,
  };
})];

const findJobStatusLabelValue = (status) => {
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

const profileJobListNotOwnerOptions = [
  newOption,
  oldOption,
];

const findProfileJobListNotOwnerSortOptionsLabelValue = (sort?: string) => {
  if (!sort) {
    return null;
  } else if (sort === "old") {
    return { "label": "Old", "value": "old" };
  } else if (sort === "new") {
    return { "label": "New", "value": "new" };
  } 
};

const findJobListSortOptionsLabelValue = (sort?: string) => {
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
  jobTypes,
  jobTypeOptions,
  findJobTypeLabelValue,

  jobCategories,
  jobCategoryOptions,
  // findJobCategoryValue,
  findJobCategoryLabelValue,
  // jobStatus,
  jobStatusOptions, 
  findJobStatusLabelValue,

  FULLTIME,
  PARTTIME,
  FREELANCE,
  CONTRACT,
  INTERNSHIP,

  profileJobListNotOwnerOptions,
  findProfileJobListNotOwnerSortOptionsLabelValue,
  findJobListSortOptionsLabelValue,
};