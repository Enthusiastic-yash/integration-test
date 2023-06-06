// Utilities
import { defineStore } from 'pinia'
import axios from 'axios';
import { ref, onMounted } from "vue"

export const useAppStore = defineStore('app', () => {
  const data = ref(null);
  const error = ref(null);




  const api = axios.create({
    baseURL: 'https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io/filter-results?',
    timeout: 2000,
    headers: { 'X-custom-Header': 'header' }
  });

  api.interceptors.request.use(function (config) {
    // Modify the URL here
    config.baseURL += 'tournament_id=2';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


  api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // Object.assign(response, { data: { list: response.data, message: 'user list' } })
    console.log(response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  // Make a request
  api.get('https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io/filter')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

})



