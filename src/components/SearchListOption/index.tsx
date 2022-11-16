import React, { useState } from "react";
import Chip from '@material-ui/core/Chip';

const SearchListOption = ({
  type,
  label,
  values,
  setValues,
}) => {
    
  // alert(label);
  if (label === "") {
    return null;
  }
    
  // console.log("first");
  // console.log(values);
    
  // console.log("values");
  // console.log(values);

  // const [localLabel, setLocalLabel] = useState(label);
  const [select, setSelect] = useState(true);

  const removeOption = () => {
    console.log("previous");
    console.log(values);
    console.log("new");
    const newValues = {
      ...values,
      [type]: "",
    };
    console.log(newValues);

    setValues(newValues);
    setSelect(false);
  };
    
  return (
    <div
      style={{
        marginTop: "0.5rem",
        marginRight: "0.5rem",
        display: select ? "inherit" : "none",
      }}
    >
      <Chip
        label={label}
        variant="outlined"

        onClick={removeOption}
        onDelete={removeOption}
        // onDelete={onDelete}
      />
    </div>
  );

  // return (
  //     <div
  //         style={{
  //             marginTop: "0.5rem",
  //             marginRight: "0.5rem",
  //         }}
  //     >
  //         <Chip
  //             label={label}
  //             variant="outlined"

  //             onClick={onClick}
  //             onDelete={onDelete}
  //         />
  //     </div>

  // );
};

export default SearchListOption;