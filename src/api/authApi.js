import axiosClient from './axiosClient';

const unwrap = (promise) => promise.then((res) => res.data);

export const registerUser = (payload) =>
  unwrap(axiosClient.post('/user/register', payload));

export const loginUser = (payload) =>
  unwrap(axiosClient.post('/user/login', payload));

export const forgotPassword = (payload) =>
  unwrap(axiosClient.post('/user/forgetpassword', payload));

export const resetPassword = (payload) =>
  unwrap(axiosClient.put('/user/resetpassword', payload));

export const getUserInfo = () => unwrap(axiosClient.get('/user/userInfo'));

export const getDashboardData = () =>
  unwrap(axiosClient.get('/user/userData'));
