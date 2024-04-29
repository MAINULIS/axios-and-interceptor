import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';
import axios from 'axios';

// axios.defaults.baseURL = " ";
// // for json web token
// axios.interceptors.request.use((request) => {
//   request.headers.Authorization = "bearer mainul";
//   request.headers["email"] = "mail@mail.com"
//   console.log('from main.jsx request', request);
//   return request;
// });
// axios.interceptors.response.use((response) => {
//   // response.headers.Authorization = "bearer mainul";
//   console.log('from main.jsx response', response);
//   return response.data;
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
