import { request } from "../libs/axiosRequest";

// Get Login Data (GET request)
export const getLoginData = () => {
  return request({
    url: 'login',
    method: 'get',
  });
};

// Validate Login (POST request)
export const validatelogin = (data) => {
  return request({
    url: 'login',
    method: 'post',
    data,
  });
};


  /*
  
    * @Example
    export function search(params) {
    return request({
      url: `/home/search`,
      method: 'get',
      params,
    });
  }
  
  * Request para obtener datos de la API
  export function request({ url, method, params, data, responseType }) {
    return axios({
      url: `${API_BASE_URL}/${url}`,
      method,
      params,
      data,
      responseType,
    });
  }
  
  
  */