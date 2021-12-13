import axios from 'axios';

//  const BASE_URL = 'https://cleanfold.ripungupta.com/public/api';
const BASE_URL = 'https://cleanfold.in/backend/clean_fold/public/api';

// define the api
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization:
      'Bearer $2y$10$5OmYFG9clk67v8g2VO.YXOwSqVyX9MzPdtXhyQ4lHVjdpm62wuLMK',
    Accept: 'application/json'
  },
});

export { apiClient, BASE_URL, axios };

