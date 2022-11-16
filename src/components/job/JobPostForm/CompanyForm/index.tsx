// Extract this file from the current folder and reuse?

import React, {
  useState,
  // useEffect
} from "react";

import CreatableSelect from 'react-select/creatable';

import { Avatar } from "baseui/avatar";

import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";

import axios from "axios";

import Required from "../../../form/Required";

import {
  nameMaxLength,
  companyDescriptionMaxLength,
  locationMaxLength,
  urlMaxLength,

} from "../../../../validators";

import {
  LogoInputLabel,
  LogoInput,
  LogoEditButton,

  JobPostFormDetailText,
  // JobPostFormButton,
  JobPostFormDeleteButton,

  CompanyLogoDetailWrapper,
  CompanyLogoDetail,
  CompanyLogoLabel,

  JobPostFormLabel,
  JobPostFormInputWrapper,
  JobPostFormTextInput,
  JobPostFormTextarea,
  CharactersLeftWrapper,
} from "../JobPostFormCSS";

import { charactersLeft } from "../../../../form";
import UrlOrEmailFormErrorMessage from "../../../error/UrlOrEmailFieldErrorMessage";
// import { API } from "../../../config/environment";

// import { findCompanyByNameForOwner } from "../../../../api/privateCompany";
// import useDebouncedEffect from "../../../useDebouncedEffect";

// import { apiRequest } from "../../../../api/requests";

import { COMPANY_NAME, COMPANY_WEBSITE } from "../../../../config/environment";
import { jobCategoryOptions } from "../../../../typeDefinitions/job";
import { values } from "lodash";
import CompanyNameInput from "./CompanyNameInput";
import useDebouncedEffect from "../../../../useDebouncedEffect";
import { findCompanyByNameForOwner } from "../../../../api/privateCompany";

const CompanyForm = ({
  job_id, 

  handleChange,
  handleBlur,
  errors,
  touched,
  setFieldValue,

  name,
  companyDescription,
  companyLocation,
  logo,
  website,
}) => {
  // alert(`server(${logo})`);
  // Extract this?
  // Company Name
  // const [localCompanyName, setLocalCompanyName] = useState(name);
  // const [companyNameOptions, setCompanyNameOptions] = useState([{
  //   label: "Code&Jobs",
  //   value: "Code&Jobs",
  // }]); // useEffect to find the data later.

  const [fileIsLarge, setFileIsLarge] = useState(false);
  const [fileSize, setFileSize] = useState(null);

  const [fileInputId, setFileInputId] = useState(null);

  const handleClose = () => {
    setFileIsLarge(false);
  };

  const [logoThumbnail, setLogoThumbnail] = useState(null);

  const handleUpdateLogoThumbnail = async (e) => {
    // if (e.currentTarget.files.length > 0) {
    //   // Search more about this.
    //   const newLogoThumbnail = window.URL.createObjectURL(e.currentTarget.files[0]);
    //   setLogoThumbnail(newLogoThumbnail);
    // }
    if (e.currentTarget.files[0] && e.currentTarget.files[0].size) {
      // alert(e.currentTarget.files[0].size);
      const logoSize = e.currentTarget.files[0].size / 1024 / 1024; // 1MB

      // alert(fileSize);
      // e.currentTarget.files[0] = null;

      if (logoSize > 1) {
        // @ts-ignore
        document.getElementById("logo").value = null;
        setFileInputId(new Date().toString());

        setFileSize(logoSize);
        setFileIsLarge(true);

        // alert("File is too large");
      } else {
        setFieldValue("logo", e.currentTarget.files[0]);
        const newLogoThumbnail = window.URL.createObjectURL(e.currentTarget.files[0]);
        setLogoThumbnail(newLogoThumbnail);

        setFileInputId(new Date().toString());
      }
    }
  };

  const handleDeleteLogoThumbnail = async (e) => {
    // Should remvoe files also.
    e.preventDefault();
    // @ts-ignore
    document.getElementById("logo").value = null;
    setFieldValue("logo", null);
    setLogoThumbnail(null);

    setFileInputId(new Date().toString());
  };
  
  useDebouncedEffect(async () => {
    // If I make it work, others will work also?

    try {
      if (name && name.length !== 0) {
        const { data } = await findCompanyByNameForOwner(name);

        if (data !== null) {
          const {
            name,
            description,
            location,
            logo,
            website,
          } = data;

          // Make it work here and when there is data also;
          // eslint-disable-next-line no-undef
          // const f = new File([""], logo, {
          //   type: "image/plain",
          //   // @ts-ignore
          //   lastModified: new Date(),
          // });

          // lastModified: 1605146597119
          // lastModifiedDate: Wed Nov 11 2020 23: 03: 17 GMT - 0300(Horário Padrão de Brasília) { }
          // name: "32325099.png"
          // size: 9692
          // type: "image/png"
          // webkitRelativePath: ""

          // Should set form file data instead of url
          
          // setLogoThumbnail(logo);

          setFieldValue("name", name);
          setFieldValue("companyDescription", description);
          setFieldValue("companyLocation", location);
          setFieldValue("website", website);

          // alert(`reuse(${logo})`);

          // Should handle undefinedd?
          if (logo === null) {
            setFieldValue("logo", null);
            setLogoThumbnail(null);

            setFileInputId(new Date().toString());
          } else if (logo !== undefined) {
            // It also handles when there are job id
            const response = await axios.get(logo, { responseType: "blob" });
            // const response = await axios.get(`${API}/${logo}`, { responseType: "blob" });
              
            // eslint-disable-next-line no-undef
            const logofile = new File([response.data], "logo.png", { type: response.data.type });
            // console.log(logofile);

            setFieldValue("logo", logofile);
            setLogoThumbnail(logo);
            // setLogoThumbnail(`${API}/${logo}`);

            setFileInputId(new Date().toString());
          }
        }
      }
    } catch (error) {
      console.log("error");
      console.error(error);

      setFileInputId(new Date().toString());
    }
  }, 600, [name]);

  // alert(logo)

  // alert(name);

  return (
    <>
      <JobPostFormLabel>
        Company Name
        <Required />
      </JobPostFormLabel>
      <JobPostFormInputWrapper>
        <CompanyNameInput
          job_id={job_id}

          handleChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          name={name}
        />


      </JobPostFormInputWrapper>
      <CharactersLeftWrapper>
        {charactersLeft(nameMaxLength, name)}
      </CharactersLeftWrapper>

      <JobPostFormLabel>Company Description</JobPostFormLabel>
      <JobPostFormInputWrapper>
        <JobPostFormTextarea
          id="companyDescription"
          name="companyDescription"

          placeholder={"The worldwide network to help you find a job"}
          maxLength={companyDescriptionMaxLength}
          rows={4}

          onChange={handleChange}
          onBlur={handleBlur}
          value={companyDescription}
        />
      </JobPostFormInputWrapper>
      <CharactersLeftWrapper>
        {charactersLeft(companyDescriptionMaxLength, companyDescription)}
      </CharactersLeftWrapper>

      <JobPostFormLabel>
        Company Location
        {/* Company HQ */}
        <Required />
      </JobPostFormLabel>
      <JobPostFormDetailText>
        {`Use "Remote" if your company doesn't have any`}
        {/* {'Use "Remote" if your company is decentralized'} */}
      </JobPostFormDetailText>

      <JobPostFormInputWrapper>
        <JobPostFormTextInput
          id="companyLocation"
          name="companyLocation"
          type="text"

          maxLength={locationMaxLength}
          placeholder={"Your company location"}

          onChange={handleChange}
          onBlur={handleBlur}
          value={companyLocation}

          required
        />
      </JobPostFormInputWrapper>
      <CharactersLeftWrapper>
        {charactersLeft(locationMaxLength, companyLocation)}
      </CharactersLeftWrapper>

      <CompanyLogoDetailWrapper>
        <CompanyLogoDetail style={{
          marginRight: "auto",
        }}>
          <CompanyLogoLabel htmlFor="logo" >
            Logo
          </CompanyLogoLabel>
          <JobPostFormDetailText>
            It can be .svg, .png or .jp(e)g
            {/* It can be .png, .jpg or .jpeg format */}
          </JobPostFormDetailText>
        </CompanyLogoDetail>
        {
          (logo || logoThumbnail) && (
            <JobPostFormDeleteButton type="button" onClick={async (e) => {
              // setFieldValue("logo", null);
              handleDeleteLogoThumbnail(e);
            }} >
              Delete
            </JobPostFormDeleteButton>
          )
        }
      </CompanyLogoDetailWrapper>

      <LogoInputLabel htmlFor="logo" >
        <Avatar
          // name={name || ""}
          name={""}
          size="7rem"
          // Should handle later image was updated or not to save money.
          src={logoThumbnail === null ? (logo || "") : logoThumbnail}
        />
        <LogoEditButton>
          <CreateIcon style={{
            fontSize: "1rem",
          }} />
        </LogoEditButton>
      </LogoInputLabel>

      <LogoInput
        id="logo"
        name="logo"
        type="file"
        accept="image/svg+xml, image/png, image/jpg, image/jpeg"
        multiple={false}

        onChange={async (e) => {
          // console.log(e.currentTarget.files[0]);
          
          handleUpdateLogoThumbnail(e);
        }}

        key={fileInputId || ""}
      />

      <JobPostFormLabel>
        Website
        <Required />
      </JobPostFormLabel>
      <JobPostFormInputWrapper>
        <JobPostFormTextInput
          id="website"
          name="website"
          type="url"

          placeholder={`https://www.${COMPANY_WEBSITE}`}
          maxLength={urlMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}
          value={website}

          required
        />
      </JobPostFormInputWrapper>
      {/* Shouldn't allow email here. */}
      <UrlOrEmailFormErrorMessage
        formValue={website}
        formError={errors.website}
        formTouch={touched.website}
      />

      <Dialog
        open={fileIsLarge}
        onClose={handleClose}
        aria-labelledby="company-logo-file-size-error"
        aria-describedby="company-logo-file-size-error"
      >
        {/* Extract this and reuse RegisterEmailSend/index.tsx? */}
        <DialogTitle id="support-email">
          <div style={{
            display: "flex",
            alignItems: "center",
          }}>
            <ErrorIcon style={{
              fontSize: "1.5rem",
              color: "#ff1676",
            }} />
            <span style={{
              marginLeft: "0.25rem",
              color: "#ff1676",
            }} >
              File Size
              {/* Its filesize should be less than 1MB */}
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="company-logo-file-size-error-description">
            Your logo file size is {fileSize && fileSize.toFixed(4)}MB. Please, use another file with its size less than 1MB.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CompanyForm;