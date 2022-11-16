// Extract this file from the current folder and reuse?

import React, {
  useEffect,
  useState,
  // useEffect
} from "react";

import CreatableSelect from 'react-select/creatable';

import {
  nameMaxLength,
} from "../../../../validators";

import {
  CompanyFormTextInput,
} from "./CompanyFormCSS";

import { COMPANY_NAME } from "../../../../config/environment";
import { findCompanyNameListForOwner } from "../../../../api/privateCompany";

const CompanyNameInput = ({
  job_id,

  handleChange,
  handleBlur,
  setFieldValue,

  name,
}) => {
  // alert(`server(${logo})`);
  // Extract this?
  // Company Name
  const [localCompanyName, setLocalCompanyName] = useState(name);
  const [companyNameOptions, setCompanyNameOptions] = useState([]); // useEffect to find the data later.
  const previousCompanies = companyNameOptions.length > 0;

  // alert(name);
  // alert(localCompanyName);

  useEffect(() => {
    // if (job_id) {
    //   setLocalCompanyName(name);
    // }

    // alert(job_id)
    // alert(name)

    if (job_id && name) {
      setLocalCompanyName(name);
    } else {
      findCompanyNameListForOwner()
        .then(({
          data,
          // Should handle this correctly.
          error
        }) => {
          if (error) {
            console.log(error);
            return;
          }

          if (data) {
            const previousCompanyNameOptions = data.map(({ company_name }) => {
              return {
                label: company_name,
                value: company_name,
              };
            });

            setCompanyNameOptions(previousCompanyNameOptions);
            // setCompanyNameOptions([]);
          }
        });
    }



  }, [name]);

  // alert(job_id);

  if (previousCompanies) {
    return <div style={{
      marginTop: "1rem",
    }}>
      <CreatableSelect
        id="name"
        name="name"
        // type="input"

        placeholder="Code&Jobs"

        // maxLength={nameMaxLength}

        backspaceRemovesValue={false}
        isClearable

        // inputValue={name || localCompanyName}
        inputValue={localCompanyName}

        onInputChange={(e) => {
          if (e.length <= nameMaxLength) {
            setLocalCompanyName(e);
            // setFieldValue("name", e.slice(0, 25));
          } else {
            setLocalCompanyName(e.slice(0, nameMaxLength));
          }
          // console.log("onInputChage");
          // console.log(e);
          // setFieldValue("name", e);
        }}

        onChange={(e) => {
          if (e === null) {
            setFieldValue("name", "");
          } else if (e.value.length <= nameMaxLength) {
            setFieldValue("name", e.value);
          } else {
            return;
          }
          // console.log("onChange");
          // console.log(e);

        }}


        options={companyNameOptions}

        // required
      />
    </div>;
  } else {
    return <CompanyFormTextInput
      id="name"
      name="name"
      type="text"

      placeholder={COMPANY_NAME}
      maxLength={nameMaxLength}

      onChange={handleChange}
      onBlur={handleBlur}
      value={name}

      required
    />;
  }

};

export default CompanyNameInput;