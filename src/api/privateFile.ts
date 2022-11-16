import {
  apiRequest,
  apiFormRequest,
} from "./requests";

const uploadFile = async (file) => {
  try {
    // eslint-disable-next-line no-undef
    const uploadFileForm = new FormData();

    uploadFileForm.append(
      "file",
      file,
      file.name
    );

    const { data } = await apiFormRequest.post("/api/v1/private/file", uploadFileForm);
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

const findFileListForOwner = async (
  title?: string, sort?: string, reuse?: boolean, 
  skip?: number, limit?: number
) => {
  try {
    // https://www.codenjobs.com/jobs?pay_in_cryptocurrency=true&skill=Node // Frontend
    // /api/v1/job/list?&pay_in_cryptocurrency=true&skill=Node // Server

    let endPoint = "/api/v1/private/file/list?";

    if (title !== null) {
      endPoint += `&title=${title}`;
    }

    if (sort !== null) {
      endPoint += `&sort=${sort}`;
    }

    if (reuse !== null) {
      endPoint += `&reuse=${reuse}`;
    }

    if (skip !== null) {
      endPoint += `&skip=${skip}`;
    }

    if (limit !== null) {
      endPoint += `&limit=${limit}`;
    }

    // alert(endPoint);

    const { data } = await apiRequest.post(endPoint);

    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      error
    };
  }
};

const findTotalFilesForOwner = async () => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/file/list/total`);

    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      error
    };
  }
};

const findFileForOwner = async (file_id: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/file/list?file_id=${file_id}`);
    return {
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      error
    };
  }
};

const updateFileReuse = async (id: string, reuse: boolean) => {
  try {
    const { data } = await apiRequest.patch(`/api/v1/private/file/reuse?id=${id}&reuse=${reuse}`);
    // alert(data);

    return {
      data, // true || false
    };
  } catch (error) {
    console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error // no_file
    };
  }
};

const updateFileDetails = async (id: string, values) => {
  try {
    const {
      title,
      description,
    } = values;

    // alert("title");
    // alert(title);
    // alert("description");
    // alert(description);

    // eslint-disable-next-line no-undef
    const updateFileDetailsForm = new FormData();

    updateFileDetailsForm.append("id", id);
    updateFileDetailsForm.append("title", title);
    updateFileDetailsForm.append("description", description);

    const { data } = await apiFormRequest.patch(`/api/v1/private/file/details`, updateFileDetailsForm);


    return {
      data, // file details with title, description etc
    };
  } catch (error) {
    console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error // no_file
    };
  }
};

const deleteFileByIdForOwner = async (id: string) => {
  try {
    const { data } = await apiRequest.delete(`/api/v1/private/file?id=${id}`);
    // alert(data);

    return {
      data,
    };
  } catch (error) {
    console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error
    };
  }
};

export {
  uploadFile,

  findFileForOwner,
  findFileListForOwner,
  findTotalFilesForOwner,

  updateFileReuse,
  updateFileDetails,

  deleteFileByIdForOwner,

};