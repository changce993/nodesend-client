import clientAxios from './axios';

const authToken = token => {
  token
    ? clientAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    : delete clientAxios.defaults.headers.common['Authorization'];
};

export default authToken;
