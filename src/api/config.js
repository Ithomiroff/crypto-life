import axios from 'axios';

const clientApi = axios.create({
  baseURL: 'http://45.12.72.86:3000/',
});

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
