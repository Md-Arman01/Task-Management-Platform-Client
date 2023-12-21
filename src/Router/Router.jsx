import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about_us",
        element: <About></About>,
      },
      {
        path: "/contact_us",
        element: <Contact></Contact>,
      },
      {
        path: "/sign_in",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default Router;
