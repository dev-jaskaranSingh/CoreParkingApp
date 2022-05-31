import {apiClient, axios} from './client';

//Api endPoints
const endPoint = {
  entryVehicle: '/entry/vehicle',
  getVehicleType: '/get/vehicle/type',
  searchVehicle: '/search/vehicle',
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

const getVehicleType = async () => {
  //Check if there are any previous pending requests
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  return apiClient.get(endPoint.getVehicleType, {
    cancelToken: cancelToken.token,
  });
};

//Export Functions
export default {
  getVehicleType,
  entryVehicle,
  searchVehicle,
};
