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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateTask from "../Components/UpdateTask";
import Profile from "../Pages/Dashboard/Profile";

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
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/see_task",
        element: (
          <PrivateRoute>
            <SeeTask></SeeTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage_task",
        element: (
          <PrivateRoute>
            <ManageTask></ManageTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);

export default Router;
