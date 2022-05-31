import {apiClient} from './client';

//Api endPoints
const endPoint = {
  login: '/login/employee',
};

//Call Api Function
const signIn = async (email, password) => {
  return await apiClient.post(endPoint.login, {
    email: email,
    password: password,
  });
};

//Export Functions
export default {
  signIn,
};
