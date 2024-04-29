import axios from "axios";

const AXIOS = axios.create({
    baseURL:"",
})
export default AXIOS;

axios.interceptors.request.use((request) => {
    // request.headers.Authorization = localStorage.getItem('token'); or
    request.headers.Authorization = `bearer ${localStorage.getItem('token')}`;
    request.headers["email"] = "mail@mail.com"
    console.log('from main.jsx request', request);
    return request;
  });
  axios.interceptors.response.use((response) => {
    // response.headers.Authorization = "bearer mainul";
    console.log('from main.jsx response', response);
    return response.data;
  })