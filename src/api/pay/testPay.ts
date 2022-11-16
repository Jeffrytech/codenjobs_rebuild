// Test only

import {
  apiRequest,
} from "../requests";

const freeJobPostPayment = async (id: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/test/pay/job?id=${id}`);
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    console.log(id); 

    return {
      error
    };
  }
};

export {
  freeJobPostPayment,
};