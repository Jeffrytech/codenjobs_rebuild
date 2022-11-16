const yes = {
  label: "Yes",
  value: true,
};

const no = {
  label: "No",
  value: false,
};

const yesOrNo = [
  yes,
  no,
];

const returnYesOrNo = (value) => {
  // alert(typeof value);
  // alert(value);
    
  if (value === "") {
    return undefined;
  } else {
    if (value === "true" || value === true) {
      return yes;
    } else if (value === "false" || value === false) {
      return no;
    }
  };
};

const toLabelValue = (data) => {
  return {
    label: data,
    value: data,
  };
};

const topOption = {
  label: "Top",
  value: "top",
};

const newOption = {
  label: "New",
  value: "new",
};

const oldOption = {
  label: "Old",
  value: "old",
};

const twoOption = {
  label: "2",
  value: "2",
};

const fiveOption = {
  label: "5",
  value: "5",
};

const tenOption = {
  label: "10",
  value: "10",
};

export {
  yes,
  no,
  yesOrNo,
  returnYesOrNo,

  newOption,
  oldOption,
  topOption,

  twoOption,
  fiveOption,
  tenOption,

  toLabelValue,
};