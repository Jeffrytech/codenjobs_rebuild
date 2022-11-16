import {
  apiRequest,
  apiFormRequest,
} from "./requests";

const createJobPost = async (values) => {
  try {
    const {
      // Comapny
      name,
      companyDescription,
      logo,
      website,
      companyLocation,
      // Job
      jobTitle,
      jobDescription,
      jobLocation,
      type,
      category,
      
      salary,
      pay_in_cryptocurrency,

      howToApply,
      skills,
    } = values;
    
    // alert(pay_in_cryptocurrency);

    // eslint-disable-next-line no-undef
    const createJobPostForm = new FormData();

    createJobPostForm.append("name", name);
    if (companyDescription) {
      createJobPostForm.append("companyDescription", companyDescription);
    }

    // This doesn't work when update with previous job id because logo is not blob.
    // Should find a better way to solve this problem.
    // User should remove the logo first before edit it again?
    if (logo) {
      createJobPostForm.append(
        "logo",
        logo,
        logo.name
      );
    }

    createJobPostForm.append("website", website);
    createJobPostForm.append("companyLocation", companyLocation);

    createJobPostForm.append("jobTitle", jobTitle);
    createJobPostForm.append("jobDescription", jobDescription);
    createJobPostForm.append("jobLocation", jobLocation);
    createJobPostForm.append("type", type);
    createJobPostForm.append("category", category);

    // console.log("category");
    // console.log(category);

    createJobPostForm.append("salary", salary);
    createJobPostForm.append("pay_in_cryptocurrency", pay_in_cryptocurrency);

    createJobPostForm.append("howToApply", howToApply);
    createJobPostForm.append("skills", skills);

    const { data } = await apiFormRequest.post("/api/v1/private/job", createJobPostForm);
    // const { data } = await apiRequest.get("/api/v1/job/list");
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

const updateJobPost = async (id, values) => {
  try {
    const {
      // Comapny
      name,
      companyDescription,
      logo,
      website,
      companyLocation,
      // Job
      jobTitle,
      jobDescription,
      jobLocation,
      type,
      category,

      salary,
      pay_in_cryptocurrency,
      
      howToApply,
      skills,
    } = values;

    // alert(pay_in_cryptocurrency);

    // eslint-disable-next-line no-undef
    const updateJobPostForm = new FormData();

    updateJobPostForm.append("jobId", id);

    updateJobPostForm.append("name", name);
    if (companyDescription) {
      updateJobPostForm.append("companyDescription", companyDescription);
    }

    // This doesn't work when update with previous job id because logo is not blob.
    // Should find a better way to solve this problem.
    // User should remove the logo first before edit it again?

    // alert("logo");
    // alert(logo);
    // alert(logo.name);

    // lastModified: 1605146597119
    // lastModifiedDate: Wed Nov 11 2020 23: 03: 17 GMT - 0300(Horário Padrão de Brasília) { }
    // name: "32325099.png"
    // size: 9692
    // type: "image/png"
    // webkitRelativePath: ""

    // console.log("logo");
    // console.log(logo);

    // logo
    // public/company/logo/4HRyoj0cblpjOaMfLgLD9Tc1W28LPWG1tQTe04ZCKGXJmibX.png
    // TypeError: Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'.

    // Should hnalde this better
    if (logo && logo.name) {
      updateJobPostForm.append(
        "logo",
        logo, // blob,
        logo.name // filename
      );
    }
    // if (logo) {
    //   updateJobPostForm.append(
    //     "logo",
    //     logo,
    //     logo.name
    //   );
    // }

    updateJobPostForm.append("website", website);
    updateJobPostForm.append("companyLocation", companyLocation);

    updateJobPostForm.append("jobTitle", jobTitle);
    updateJobPostForm.append("jobDescription", jobDescription);
    updateJobPostForm.append("jobLocation", jobLocation);
    updateJobPostForm.append("type", type);
    updateJobPostForm.append("category", category);

    updateJobPostForm.append("salary", salary);
    updateJobPostForm.append("pay_in_cryptocurrency", pay_in_cryptocurrency);

    updateJobPostForm.append("howToApply", howToApply);
    updateJobPostForm.append("skills", skills);

    const { data } = await apiFormRequest.patch("/api/v1/private/job", updateJobPostForm);
    // const { data } = await apiRequest.get("/api/v1/job/list");
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

const findJobCompanyByIdForOwner = async (id: string) => {
  try {
    // Should be equal to this.
    // curl - X POST "http://localhost:8000/api/v1/private/job/find?id=69a024d1-c240-476e-b7a9-3092bf980b83" - H  "accept: application/json" - H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGVhZHlsZWFybmVyIiwiZXhwIjoxNjEyMzYwNDM0fQ.YYZPFA9ZdlpASFoKu-UBuaP5QRReB4AyceWQa_OI4ac" - d ""
    const { data } = await apiRequest.get(`/api/v1/private/job?id=${id}`);

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

const deleteJobByIdForOwner = async (id: string) => {
  try {
    // Should be equal to this.
    // curl - X POST "http://localhost:8000/api/v1/private/job/find?id=69a024d1-c240-476e-b7a9-3092bf980b83" - H  "accept: application/json" - H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGVhZHlsZWFybmVyIiwiZXhwIjoxNjEyMzYwNDM0fQ.YYZPFA9ZdlpASFoKu-UBuaP5QRReB4AyceWQa_OI4ac" - d ""
    const { data } = await apiRequest.delete(`/api/v1/private/job?id=${id}`);

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

// const findJobListByOwner = async (status) => {
//   try {
//     // alert(status);

//     const { data } = await apiRequest.get(status === null ? "/api/v1/private/job/list" : `/api/v1/private/job/list?status=${status}`);
//     // console.log(data);

//     return {
//       data,
//     };
//   } catch (error) {
//     // Use it only to debug.
//     // console.log(username); // 69a024d1-c240-476e-b7a9-3092bf980b83
//     // console.error(error);

//     return {
//       error
//     };
//   }
// };

const findJobDraftListByOwner = async () => {
  try {
    // alert(status);
  
    const { data } = await apiRequest.get("/api/v1/private/job/list/draft");
    // alert("data");
    // alert(data);
    // console.log("data");
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

const findJobListSolanaByOwner = async (status, id?: string) => {
  try {
    // alert(status);

    let target = "/api/v1/private/job/list/solana";
    if (status !== null && id === null) {
      target += `?status=${status}`;
    } else if (status === null && id !== null) {
      target += `?id=${id}`;
    } else if (status !== null && id !== null) {
      target += `?status=${status}&id=${id}`;
    }
  
    // const { data } = await apiRequest.get(status === null ? "/api/v1/private/job/list/solana" :`/api/v1/private/job/list/solana?status=${status}`);
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

const findJobSkillListForOwner = async () => {
  try {
    // Include skills from profile also.
    const { data } = await apiRequest.get("/api/v1/private/job/skill/list");
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


const findJobPostPublicKeyById = async (id: string) => {
  try {
    // Include skills from profile also.
    const { data } = await apiRequest.post(`/api/v1/private/job/solana_job_pay?id=${id}`);
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

export {
  createJobPost,
  updateJobPost,

  findJobCompanyByIdForOwner,
  
  deleteJobByIdForOwner,

  // findJobListByOwner,
  findJobDraftListByOwner,
  
  findJobListSolanaByOwner,

  findJobSkillListForOwner,

  // Solana
  findJobPostPublicKeyById,
};