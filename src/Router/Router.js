import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Pricing from "../Pages/Priceing/Pricing";
import Service from "../Pages/Service/Service";
import Signin from "../Pages/SigninPage/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
    ],
  },
]);

export default router;
