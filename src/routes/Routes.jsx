import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import One from "../components/One";


  export const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
    },
    {
        path:'/1',
        element: <One></One>
    }
  ]);