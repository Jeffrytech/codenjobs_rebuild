
import {
  apiRequest,
} from "./requests";

const findCompanyListForOwner = async (company_name?: string, sort?: string, skip?: number, limit?: number) => {
  // alert(company_name);

  let target;
  if (company_name !== null) {
    target = `/api/v1/private/company/list?company_name=${company_name}`;
  } else {
    if (sort === "old") {
      target = "/api/v1/private/company/list?sort=old";
    } else {
      target = "/api/v1/private/company/list?sort=new";
    }

    if (skip) {
      target += `&skip=${skip}`;
    }

    if (limit) {
      target += `&limit=${limit}`;
    }
  }

  // if (skip) {
  //   target += `&skip=${skip}`;
  // }

  // if (limit) {
  //   target += `&limit=${limit}`;
  // }

  try {
    const { data } = await apiRequest.post(target);

    return {
      data, // companyList
    };
  } catch (error) {
    console.error(error);

    return {
      error
    };
  }
};

const findTotalCompanyListForOwner = async () => {
  try {
    let target = `/api/v1/private/company/list/total`;
    // http://127.0.0.1:8000/api/v1/job/list/total

    // const { data } = await apiRequest.get(target);
    const { data } = await apiRequest.get(target);
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error
    };
  }
};


const findCompanyNameListForOwner = async () => {
  // alert(company_name);

  try {
    const { data } = await apiRequest.post("/api/v1/private/company/list/name");

    return {
      data, // companyList
    };
  } catch (error) {
    console.error(error);

    return {
      error
    };
  }
};

const findCompanyByNameForOwner = async (name: string) => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/company/find", {
      name,
    });
    // const { data } = await apiRequest.get(`/api/v1/private/company?name=${name}`);

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

const deleteCompanyByIdForOwner = async (id: string) => {
  try {
    // Should be equal to this.
    // curl - X POST "http://localhost:8000/api/v1/private/job/find?id=69a024d1-c240-476e-b7a9-3092bf980b83" - H  "accept: application/json" - H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGVhZHlsZWFybmVyIiwiZXhwIjoxNjEyMzYwNDM0fQ.YYZPFA9ZdlpASFoKu-UBuaP5QRReB4AyceWQa_OI4ac" - d ""
    const { data } = await apiRequest.delete(`/api/v1/private/company?id=${id}`);

    // console.log("data");
    // console.log(data);
    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.log(id); // 69a024d1-c240-476e-b7a9-3092bf980b83
    // console.error(error);

    return {
      error
    };
  }
};

export {
  findCompanyListForOwner,
  findTotalCompanyListForOwner,

  findCompanyNameListForOwner,

  findCompanyByNameForOwner,

  deleteCompanyByIdForOwner,
};