import {apiClient} from './client';

//Api endPoints
const endPoint = {
  login: '/login/employee',
};

//Call Api Function
const signIn = async (emailOrMobile, password) => {
  return await apiClient.post(endPoint.login, {
    emailOrMobile: emailOrMobile,
    password: password,
  });
};

//Export Functions
export default {
  signIn,
};
