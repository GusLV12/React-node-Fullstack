const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

export function request({ url = '', method = 'get', params = null, data = null, responseType = 'json' }) {
  return {
    url: `${API_BASE_URL}/${url}`,
    method,
    params,
    data,
    responseType,
  };
}