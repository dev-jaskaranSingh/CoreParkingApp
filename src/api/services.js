import {apiClient, axios} from './client';

//Api endPoints
const endPoint = {
  entryVehicle: '/entry/vehicle',
  getVehicleType: '/get/vehicle/types',
  searchVehicle: '/search/vehicle',
  exitVehicle: '/exit/vehicle',
};

//Call Api Function

let cancelToken;

const entryVehicle = postData => {
  //Check if there are any previous pending requests
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  return apiClient.post(endPoint.entryVehicle, postData, {
    cancelToken: cancelToken.token,
  });
};

const exitVehicle = postData => {
  //Check if there are any previous pending requests
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  return apiClient.post(endPoint.exitVehicle, postData, {
    cancelToken: cancelToken.token,
  });
};

const searchVehicle = postData => {
  //Check if there are any previous pending requests
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  return apiClient.post(endPoint.searchVehicle, postData, {
    cancelToken: cancelToken.token,
  });
};

const getVehicleType = postData => {
  //Check if there are any previous pending requests
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  return apiClient.post(endPoint.getVehicleType, postData, {
    cancelToken: cancelToken.token,
  });
};

//Export Functions
export default {
  getVehicleType,
  entryVehicle,
  searchVehicle,
  exitVehicle,
};
