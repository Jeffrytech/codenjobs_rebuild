import {
  apiRequest,
  apiFormRequest,
} from "./requests";

const updateForHire = async (hireable: boolean) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/profile/for_hire?hireable=${hireable}`);
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

const updateUseCryptocurrency = async (use: boolean) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/profile/cryptocurrency?use=${use}`);
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

const updateProfileImage = async (selectedImageFile) => {
  try {
    // eslint-disable-next-line no-undef
    const profileImage = new FormData();

    profileImage.append(
      "file",
      selectedImageFile,
      selectedImageFile.name
    );

    const { data } = await apiFormRequest.post("/api/v1/private/profile/image", profileImage);
    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const deleteProfileImage = async () => {
  try {
    const { data } = await apiRequest.delete("/api/v1/private/profile/image");
    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const updateProfileUserInformation = async (values) => {
  try {
    const {
      name,
      bio,
    } = values;

    const { data } = await apiRequest.post("/api/v1/private/profile/user", {
      name,
      bio,
    });

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.log(error.response);

    return {
      error
    };
  }
};

const updateProfileJobInformation = async (values) => {
  try {
    const {
      job,
      salary,
      location,
      website,
      skills,
    } = values;

    const { data } = await apiRequest.post("/api/v1/private/profile/job", {
      job,
      salary,
      location,
      website: website === "" ? null : website, // To make it work when there is no website data
      skills,
    });

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.log(error.response);

    return {
      error
    };
  }
};

const updateProfileJobDetails = async (values) => {
  try {
    const {
      job_types,
    } = values;

    // Use this temporaily with /job_types at server and frontend
    // Should be details later?
    const { data } = await apiRequest.post("/api/v1/private/profile/job_details", {
      job_types,
      // website: website === "" ? null : website, // To make it work when there is no website data
    });

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.log(error.response);

    return {
      error
    };
  }
};

export {
  updateForHire,
  updateUseCryptocurrency,

  updateProfileImage,
  deleteProfileImage,

  updateProfileUserInformation,
  updateProfileJobInformation,

  updateProfileJobDetails,
};