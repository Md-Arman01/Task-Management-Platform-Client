import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SingUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask";
import SeeTask from "../Pages/Dashboard/SeeTask";
import ManageTask from "../Pages/Dashboard/ManageTask";

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
      {
        path: "/sign_up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/create_task",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "/dashboard/see_task",
        element: <SeeTask></SeeTask>,
      },
      {
        path: "/dashboard/manage_task",
        element: <ManageTask></ManageTask>,
      },
    ],
  },
]);

export default Router;
