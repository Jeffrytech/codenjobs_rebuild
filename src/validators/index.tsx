import * as Yup from "yup";

import {
  usernameMinLength,
  passwordMinLength,
  minSolanaPublicKeyLength,
} from "./minLengths";

import {
  usernameMaxLength,

  nameMaxLength,

  passwordMaxLength,

  bioMaxLength,
  companyDescriptionMaxLength,

  profileJobMaxLength,
  salaryMaxLength,

  locationMaxLength,
  urlMaxLength,

  jobTitleMaxLength,

  skillMaxLength,
  tagMaxLength,

  jobDescriptionMaxLength,

  subjectMaxLength,
  privateMessageTextMaxLegnth,

  portfolioTitleMaxLength,
  portfolioDescriptionMaxLength,

  blogPostTitleMaxLength,
  blogPostBodyMaxLength,
  maxSolanaPublicKeyLength,
  fileDescriptionMaxLength,
  fileTitleMaxLength,
} from "./maxLengths";
import { COMPANY_WEBSITE } from "../config/environment";

import { 
  usernameRequiredRegex,

  englishOnlyRequiredRegex, 
  // englishOnlyRequiredSRegex, 
  skillRegex, 
  tagRegex
} from "./regex";
import { jobTypes } from "../typeDefinitions/job";

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const usernameValidator = Yup.string()
  .min(usernameMinLength, `Must be ${usernameMinLength} characters or more`)
  .max(usernameMaxLength, `Must be ${usernameMaxLength} characters or less`)
  .matches(usernameRequiredRegex, "Must be English characters [3, 18]")
  // .matches(/[a-zA-Z]/, "Must be English characters")
  // .matches(/[a-zA-Z]+/, "Must be English characters")
  // .matches(/[a-zA-Z]+/, "Must be English characters")
  .required("Required");

const nameValidator = Yup.string()
  .max(nameMaxLength, `Must be ${nameMaxLength} characters or less`)
  .matches(/[a-zA-Z]+/, "Must be English characters")
  .required("Required");

const emailValidator = Yup.string()
  .email("Must be a valid email").required("Required");

const passwordValidator = Yup.string()
  .min(passwordMinLength, `Must be ${passwordMinLength} characters or more`)
  .max(passwordMaxLength, `Must be ${passwordMaxLength} characters or less`)
  .required("Required");

const bioValidator = Yup.string()
  .matches(/[a-zA-Z]/, "Must be English characters")
  .max(bioMaxLength, `Must be ${bioMaxLength} characters or less`);

const profileJobValidator = Yup.string()
  .matches(/[a-zA-Z]/, "Must be English characters")
  .max(profileJobMaxLength, `Must be ${profileJobMaxLength} characters or less`);

const salaryValidator = Yup.string()
  .max(salaryMaxLength, `Must be ${salaryMaxLength} characters or less`);

const locationValidator = Yup.string()
  .matches(/[a-zA-Z]/, "Must be English characters")
  .max(locationMaxLength, `Must be ${locationMaxLength} characters or less`);

const websiteValidator = Yup.string().url(`Use a valid url. (Ex: https://${COMPANY_WEBSITE})`);

// Job post

const companyDescriptionValidator = Yup.string()
  .max(companyDescriptionMaxLength, `Must be ${companyDescriptionMaxLength} characters or less`);

// Something wrong with this at job post form
const jobTitleValidator = Yup.string()
  .max(nameMaxLength, `Must be ${jobTitleMaxLength} characters or less`)
  // .matches(/[a-zA-Z]/, "Must be English characters")
  .required("Required");

const jobDescriptionValidator = Yup.string()
  .max(jobDescriptionMaxLength, `Must be ${jobDescriptionMaxLength} characters or less`)
  .required("Required");

// https://github.com/jquense/yup#mixedoneofarrayofvalues-arrayany-message-string--function-schema-alias-equals

const jobTypeValidator = Yup.mixed().oneOf(jobTypes, "Use one of valid job types");

// const regexEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
// eslint-disable-next-line
// const regexUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
// eslint-disable-next-line

// eslint-disable-next-line
const rUrlOrEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$|^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
const urlOrEmailValidator = Yup.string().required("Required").matches(rUrlOrEmail, "Use a valid url or email");

// const tagsValidator = Yup.array().of(Yup.string().matches(/[a-zA-Z]/, "Must be English characters").max(25, "Must be 25 characters or less"));

// const skillsValidatorError = "Must be English characters, / or +";
const skillsValidatorError = "Must be English characters, /, + or #. You can use C, C++, C#, CI/CD etc.";
const skillsValidator = Yup.array().of(Yup.string().matches(skillRegex, skillsValidatorError).max(skillMaxLength, `Must be ${skillMaxLength} characters or less`));
// const skillsValidator = Yup.array().of(Yup.string().matches(/[a-zA-Z]/, "Must be English characters").max(skillMaxLength, `Must be ${skillMaxLength} characters or less`));

const tagsValidatorError = "Must be English characters, /, + or #. You can use C, C++, C#, CI/CD etc.";
const tagsValidator = Yup.array().of(Yup.string().matches(tagRegex, "Must be English characters").max(skillMaxLength, `Must be ${skillMaxLength} characters or less`));
// const tagsValidator = Yup.array().of(Yup.string().matches(/[a-zA-Z]/, "Must be English characters").max(skillMaxLength, `Must be ${skillMaxLength} characters or less`));

// Private message

const subjectValidator = Yup.string()
  .max(subjectMaxLength, `Must be ${subjectMaxLength} characters or less`)
  .required("Required");

const privateMessageTextValidator = Yup.string()
  .max(privateMessageTextMaxLegnth, `Must be ${privateMessageTextMaxLegnth} characters or less`)
  .required("Required");

// Portfolio

const portfolioTitleValidator = Yup.string()
  .max(portfolioTitleMaxLength, `Must be ${portfolioTitleMaxLength} characters or less`)
  // .matches(/[a-zA-Z]/, "Must be English characters")
  .required("Required");

const portfolioDescriptionValidator = Yup.string()
  .max(portfolioDescriptionMaxLength, `Must be ${portfolioDescriptionMaxLength} characters or less`)
  .required("Required");

// File

const fileTitleValidator = Yup.string()
  .max(fileTitleMaxLength, `Must be ${fileTitleMaxLength} characters or less`);
  // .matches(/[a-zA-Z]/, "Must be English characters")
  // .required("Required");

const fileDescriptionValidator = Yup.string()
  .max(fileDescriptionMaxLength, `Must be ${fileDescriptionMaxLength} characters or less`);
  // .required("Required");

// Blog

const blogPostTitleValidator = Yup.string()
  .max(blogPostTitleMaxLength, `Must be ${blogPostTitleMaxLength} characters or less`)
  // .matches(/[a-zA-Z]/, "Must be English characters")
  .required("Required");

const blogPostBodyValidator = Yup.string()
  .max(blogPostBodyMaxLength, `Must be ${blogPostBodyMaxLength} characters or less`)
  .required("Required");

const recaptchaValidator = Yup.string().required("Required");

// The Solana public key is a long string of base58 characters.Its length varies from 32 to 44 characters.
const solanaKeyError = `Must be between ${minSolanaPublicKeyLength} and ${maxSolanaPublicKeyLength} characters`;
const solanaPublicKeyValidator = Yup.string()
  .min(minSolanaPublicKeyLength, solanaKeyError)
  .max(maxSolanaPublicKeyLength, solanaKeyError)
  .required("Required");

export {
  validateEmail,

  usernameMinLength,
  passwordMinLength,

  usernameMaxLength,
  passwordMaxLength,

  nameMaxLength,

  bioMaxLength,
  companyDescriptionMaxLength,

  profileJobMaxLength,
  salaryMaxLength,

  locationMaxLength,

  jobTitleMaxLength,
  jobDescriptionMaxLength,

  urlMaxLength,

  skillMaxLength,
  tagMaxLength,

  subjectMaxLength,
  privateMessageTextMaxLegnth,

  blogPostTitleMaxLength,
  blogPostBodyMaxLength,

  minSolanaPublicKeyLength,
  maxSolanaPublicKeyLength,

  //

  usernameValidator,

  nameValidator,
  emailValidator,
  passwordValidator,

  bioValidator,
  profileJobValidator,
  salaryValidator,
  locationValidator,
  websiteValidator,
  companyDescriptionValidator,

  jobTitleValidator,
  jobDescriptionValidator,
  jobTypeValidator,

  urlOrEmailValidator,

  tagsValidatorError,
  tagsValidator,

  skillsValidatorError,
  skillsValidator,

  subjectValidator,
  privateMessageTextValidator,

  portfolioTitleValidator,
  portfolioDescriptionValidator,

  fileTitleValidator,
  fileDescriptionValidator,

  blogPostTitleValidator,
  blogPostBodyValidator,

  recaptchaValidator,

  solanaPublicKeyValidator,
  

};