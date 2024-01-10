import axios from "axios";

const apiProcessor = ({ method, url, data }) => {
  try {
    const response = axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ======user api =======
