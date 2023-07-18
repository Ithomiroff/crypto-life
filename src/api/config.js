import axios from 'axios';

const clientApi = axios.create({
  baseURL: 'http://45.12.72.86:3000/',
});

clientApi.interceptors.response.use(
  (response) => {
    if (response.config.url.indexOf('/auth/login') >= 0) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

clientApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const post = async (url, body) => {
  const { data } = await clientApi.post(url, body);
  return data;
};

const get = async (url, params) => {
  const { data } = await clientApi.get(url, {
    params,
  });
  return data;
};

const put = async (url, body) => {
  const { data } = await clientApi.put(url, body);
  return data;
};

const deleteApi = async (url, params) => {
  const { data } = await clientApi.delete(url, {
    params,
  });
  return data;
};

const createUrl = (prefix) => (postfix) => `${prefix}${postfix}`;

export { createUrl, post, put, get, deleteApi };
