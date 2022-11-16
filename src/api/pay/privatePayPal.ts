import {
  apiRequest,
} from "../requests";

const startPaypalTransactionForJobPost = async (id: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/paypal/start/job?id=${id}`);
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

const completePaypalTransactionForJobPost = async (id: string, paypalOrderId: string) => {
  try {
    // Use JSON instead later?
    const { data } = await apiRequest.post(`/api/v1/private/paypal/complete/job?id=${id}&paypal_order_id=${paypalOrderId}`);
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
  startPaypalTransactionForJobPost,
  completePaypalTransactionForJobPost,
};