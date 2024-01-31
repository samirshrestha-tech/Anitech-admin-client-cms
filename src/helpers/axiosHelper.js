import axios from "axios";

const rootApi = import.meta.env.VITE_ROOT_API;

const userApi = rootApi + "/user";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ======user api =======

export const postNewAdmin = (data) => {
  return apiProcessor({
    method: "post",
    url: userApi,
    data,
  });
};

// user email verification

export const verifyNewUser = (data) => {
  return apiProcessor({
    method: "post",
    url: userApi + "/verify-email",
    data,
  });
};
