import {
  encodedRequest,
  apiRequest,
} from "./requests";

// Login -> Logout -> Register -> Reset Password

// const V1 = "api/v1";

const register = async (
  email: string,
  username: string,
  password: string,
  
  recaptcha: string,
  ref_username: string,
) => {
  try {
    const userCreateRequest = {
      email,
      username,
      password,

      recaptcha,
      ref_username: ref_username === "" ? null : ref_username,
    };

    // console.log("userCreateRequest");
    // console.log(userCreateRequest);

    const response = await apiRequest.post("/register", userCreateRequest);
    // Should improve this.
    // console.log(response);
    
    return response;
  } catch (error) {
    return {
      error,
    };
    // throw Error(`Could not log in. (${errMessage})
  }
};

const login = async (
  username: string,
  password: string,

  // submitCount,
) => {
  try {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    
    // alert(submitCount);
    // params.append("submitCount", submitCount);

    const response = await encodedRequest.post(`/login`, params);
    // const response = await encodedRequest.post(`/login?recaptcha=${recaptcha}?count=${submitCount}`, params);
    // const response = await encodedRequest.post("/token", params);

    return {
      data: response.data.access_token, // access_token
    };
  } catch (error) {
    return {
      error
    };
  }
};

// submitCount >= 5
const loginRecaptcha = async (
  recaptcha: string,
  username: string,
  password: string,

  // submitCount,
) => {
  try {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    // alert(submitCount);
    // params.append("submitCount", submitCount);

    const response = await encodedRequest.post(`/recaptcha?recaptcha=${recaptcha}`, params);
    // const response = await encodedRequest.post(`/login?recaptcha=${recaptcha}?count=${submitCount}`, params);
    // const response = await encodedRequest.post("/token", params);

    return {
      data: response.data.access_token, // access_token
    };
  } catch (error) {
    return {
      error
    };
  }
};

const userInformation = async () => {
  try {
    const { data } = await apiRequest.post("/me"); // Rename this to the user/information later?
    return {
      data, // user
    };
  } catch (error) {
    return {
      error
    };
  }
};

// Without login
const resetPassword = async (email: string) => {
  try {
    const { data } = await apiRequest.post(`/reset-password?email=${email}`);
    return {
      data, // resetPasswordEmailSent
    };
  } catch (error) {
    return {
      error
    };
  }
};

// With login
const changePassword = async (oldPassword: string, newPassword: string) => {
  try {
    const params = new URLSearchParams();
    params.append("old_password", oldPassword);
    params.append("new_password", newPassword);

    const { data } = await encodedRequest.post("/change-password", params);
    return {
      data, // changePasswordResult
    };
  } catch (error) {
    return {
      error
    };
  }
};

const deleteAccount = async (username: string, password: string) => {
  try {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    const { data } = await encodedRequest.post("/delete-account", params);
    return {
      data, // deleteAccountResult
    };
  } catch (error) {
    return {
      error
    };
  }
};

const registerEmailConfirm = async (token: string) => {
  try {
    const { data } = await apiRequest.post(`/register/email/confirm?token=${token}`);
    // console.log(data);

    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const registerEmailResend = async (username: string) => {
  try {
    const { data } = await apiRequest.post(`/register/email/resend?username=${username}`);
    // console.log(data);

    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

// To help users to use username again when email wasn't correcy
// Delete unconfirmed user and its register tokens
const deleteUnconfirmedUser = async (username: string) => {
  try {
    const { data } = await apiRequest.delete(`/register/unconfirmed?username=${username}`);
    // console.log(data);

    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const resetPasswordConfirm = async (token: string) => {
  try {
    const { data } = await apiRequest.post(`/reset-password/email/confirm?token=${token}`);
    // console.log(data);

    return {
      data, // new password
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const updateEmail = async (email: string) => {
  try {
    const { data } = await apiRequest.post(`/update-email?new_email=${email}`);
    // console.log(data);

    return {
      data, // new password
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const updateEmailConfirm = async (token: string) => {
  try {
    const { data } = await apiRequest.post(`/update-email/confirm?token=${token}`);
    // console.log(data);

    return {
      data, // new password
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

export {
  register,

  login,
  loginRecaptcha,
  
  userInformation,
  // logout,
  resetPassword,

  changePassword,
  deleteAccount,

  registerEmailConfirm,
  registerEmailResend,

  deleteUnconfirmedUser,

  resetPasswordConfirm,

  updateEmail,
  updateEmailConfirm,
};

// Refer to this.
// const login = async (email: string, password: string) => {
//   const d = {
//     email,
//     password,
//   };

//   try {
//     const { data } = await axios.post(`${API}/login`, d);
//     const { token, message } = data;
//     cookies.set("token", token);
//     return message;
//   } catch (err) {
//     console.error(err);
//     // @ts-ignore
//     const errMessage = err.response.data.message;
//     throw Error(`Could not log in. (${errMessage})
//   `);
//   }
// };