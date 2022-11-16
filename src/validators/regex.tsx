// Find the best regex.
// https://stackoverflow.com/questions/2366260/whats-valid-and-whats-not-in-a-uri-query

// let res = /^[a-zA-Z]+$/.test('sfjd');
// console.log(res);

// Use this instead
const usernameRequiredRegex = /^[a-zA-Z]{3,18}$/;

// const str = 'codenjobs'; // true
// const str = 'codenjobs_'; // false

// const regex = new RegExp(/^[a-zA-Z]+$/);

// console.log(regex.test(str));

// /[a-zA-Z]+/ This fails for c++ etc 
const englishOnlyRequiredRegex = /^[a-zA-Z]+$/; // one or more without " "
const englishOnlyRequiredSRegex = /^[a-zA-Z ]+$/; // one or more with " "

const englishOnlyNotRequiredRegex = /^[a-zA-Z]*$/; // zero or more without " "
const englishOnlyNotRequiredSRegex = /^[a-zA-Z ]*$/; // zero or more with " "

const skillRegex = /^[a-zA-Z /+#]*$/;
const tagRegex = /^[a-zA-Z /+#]*$/;

// https://www.google.com/search?q=regex+for+dollor+with+currency
const dollarOnlyRequired = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/; // US currency only, $100000

// dollarOnlyNotRequired for job form.
const dollarOnlyNotRequired = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})*/; // US currency only, $100000
// const dollarOnlyNotRequired = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})*$/ // US currency only, $100000

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const styleRegex = /(<[^>]+) style=".*?"/ig;

export {
  usernameRequiredRegex,
    
  englishOnlyRequiredRegex,
  englishOnlyRequiredSRegex,

  englishOnlyNotRequiredRegex,
  englishOnlyNotRequiredSRegex,

  skillRegex,
  tagRegex,

  emailRegex,

  dollarOnlyRequired,
  dollarOnlyNotRequired,

  styleRegex,
};