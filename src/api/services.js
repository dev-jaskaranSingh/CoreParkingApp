import { apiClient, axios } from './client';

//Api endPoints
const endPoint = {
  demo: '/demo',
};

//Call Api Function

let cancelToken;
const demoPost = postData => {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.")
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source()
  apiClient.post(endPoint.demo, postData, { cancelToken: cancelToken.token });
}

const demoGet = async (id) => {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.")
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source()
  return apiClient.get(endPoint.demo + '/' + id,
    { cancelToken: cancelToken.token }
  );
}

//Export Functions
export default {
  demoGet,
  demoPost
};
