import {createBrowserRouter} from "react-router-dom";
  
const Router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-2xl">Hello world !</div>,
    },
  ]);

export default Router;