// Test only

import {
  apiRequest,
} from "../requests";

const solanaJobPostPayment = async (
  user_public_key: string,
  job_post_public_key: string,
  pay_job_post_tx: string,
  job_id: string,
  solana_payment_method: string,
  job_post_token?: string,
) => {
  try {
    // class SolanaJobPayBase(BaseModel):
    // user_public_key: str
    // job_post_public_key: str
    // pay_job_post_tx: str
    // job_id: UUID4

    const solanaJobPayCreateRequest = {
      user_public_key,
      job_post_public_key,
      pay_job_post_tx,
      job_id,
      solana_payment_method,
      job_post_token,
    };

    // const { data } = await apiRequest.post(`/api/v1/private/solana/pay/job?id=${id}&tx=${tx}`);
    const { data } = await apiRequest.post("/api/v1/private/solana/pay/job", solanaJobPayCreateRequest);
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.

    console.log("job_id");
    console.log(job_id);
    console.log("error");
    console.error(error);

    return {
      error
    };
  }
};

const solanaJobPostEdit = async (
  user_public_key: string,
  edit_job_post_tx: string,
  job_id: string, 
) => {
  try {
    const solanaJobPayEditRequest = {
      user_public_key,
      edit_job_post_tx,
      job_id,
    };

    const { data } = await apiRequest.post("/api/v1/private/solana/pay/edit/job", solanaJobPayEditRequest);
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.

    // console.log("job_id");
    // console.log(job_id);

    // console.log("error");
    // console.error(error.);

    return {
      error
    };
  }
};

export {
  solanaJobPostPayment,
  solanaJobPostEdit,
};