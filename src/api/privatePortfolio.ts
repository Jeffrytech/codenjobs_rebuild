import {
  apiRequest,
  apiFormRequest,
} from "./requests";

const createPortfolio = async (values) => {
  try {
    const {
      // Comapny
      title,
      link,
      description,
      image,
    } = values;

    // eslint-disable-next-line no-undef
    const createPortfolioForm = new FormData();

    createPortfolioForm.append("title", title);
    createPortfolioForm.append("link", link);
    createPortfolioForm.append("description", description);

    createPortfolioForm.append(
      "image",
      image,
      image.name
    );

    const { data } = await apiFormRequest.post("/api/v1/private/portfolio", createPortfolioForm);
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

const updatePortfolio = async (id, values) => {
  try {
    const {
      // Comapny
      image,
      title,
      link,
      description,
    } = values;

    // eslint-disable-next-line no-undef
    const updatePortfolioForm = new FormData();

    updatePortfolioForm.append("id", id);
    updatePortfolioForm.append("title", title);
    updatePortfolioForm.append("link", link);
    updatePortfolioForm.append("description", description);

    updatePortfolioForm.append(
      "image",
      image,
      image.name
    );

    const { data } = await apiFormRequest.patch("/api/v1/private/portfolio", updatePortfolioForm);

    return {
      // data,
      data: true,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const deletePortfoiloByIdForOwner = async (id: string) => {
  try {
    const { data } = await apiRequest.delete(`/api/v1/private/portfolio?&id=${id}`);
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

const findPortfolioByIdForOwner = async (id: string) => {
  try {
    const { data } = await apiRequest.get(`/api/v1/private/portfolio?&id=${id}`);
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
  createPortfolio,
  updatePortfolio,
  
  deletePortfoiloByIdForOwner,
  findPortfolioByIdForOwner,
};

// const updateJobPost = async (id, values) => {
//   try {
//     const {
//       // Comapny
//       name,
//       companyDescription,
//       logo,
//       website,
//       companyLocation,
//       // Job
//       jobTitle,
//       jobDescription,
//       jobLocation,
//       type,
//       salary,
//       howToApply,
//       skills,
//     } = values;

//     // eslint-disable-next-line no-undef
//     const updateJobPostForm = new FormData();

//     updateJobPostForm.append("name", name);
//     if (companyDescription) {
//       updateJobPostForm.append("companyDescription", companyDescription);
//     }

//     // This doesn't work when update with previous job id because logo is not blob.
//     // Should find a better way to solve this problem.
//     // User should remove the logo first before edit it again?

//     // alert("logo");
//     // alert(logo);
//     // alert(logo.name);

//     // lastModified: 1605146597119
//     // lastModifiedDate: Wed Nov 11 2020 23: 03: 17 GMT - 0300(Horário Padrão de Brasília) { }
//     // name: "32325099.png"
//     // size: 9692
//     // type: "image/png"
//     // webkitRelativePath: ""

//     // console.log("logo");
//     // console.log(logo);

//     // logo
//     // public/company/logo/4HRyoj0cblpjOaMfLgLD9Tc1W28LPWG1tQTe04ZCKGXJmibX.png
//     // TypeError: Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'.

//     // Should hnalde this better
//     if (logo && logo.name) {
//       updateJobPostForm.append(
//         "logo",
//         logo, // blob,
//         logo.name // filename
//       );
//     }
//     // if (logo) {
//     //   updateJobPostForm.append(
//     //     "logo",
//     //     logo,
//     //     logo.name
//     //   );
//     // }

//     updateJobPostForm.append("jobId", id);

//     updateJobPostForm.append("website", website);
//     updateJobPostForm.append("companyLocation", companyLocation);

//     updateJobPostForm.append("jobTitle", jobTitle);
//     updateJobPostForm.append("jobDescription", jobDescription);
//     updateJobPostForm.append("jobLocation", jobLocation);
//     updateJobPostForm.append("type", type);
//     updateJobPostForm.append("salary", salary);
//     updateJobPostForm.append("howToApply", howToApply);
//     updateJobPostForm.append("skills", skills);

//     const { data } = await apiFormRequest.patch("/api/v1/private/job", updateJobPostForm);
//     // const { data } = await apiRequest.get("/api/v1/job/list");
//     return {
//       data,
//     };
//   } catch (error) {
//     // Use it only to debug.
//     console.error(error);

//     return {
//       error
//     };
//   }
// };