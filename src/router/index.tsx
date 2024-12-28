import { useRoutes } from "react-router-dom";
import { paths } from "./paths";
import React from "react";
import Home from "../pages/home/home";
import Products from "../pages/products/products";
import AboutUs from "../pages/AboutUs/AboutUs";


// const Home = React.lazy(() => import("../pages/home/home"));
// const Products = React.lazy(() => import("../pages/products"));
// const AboutUs = React.lazy(() => import("../pages/aboutUs"));

const routes = [
  {
    path: paths.root,
    element: <Home />,
  },
  {
    path: paths.store,
    element: <Products />,
  },
  {
    path: paths.tech,
    element: <AboutUs />,
  },
  { path: "*", element: <div>404</div> },
];

const Router = () => {
  return useRoutes(routes);
};

export default Router;