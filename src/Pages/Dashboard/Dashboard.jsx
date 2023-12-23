import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* dashboard menu */}
        <div className="lg:w-96 lg:min-h-screen  lg:-mb-20 bg-gray-700 flex flex-col items-center gap-3 px-5 py-10 lg:py-0">
          <Link to="/">
            <h1 className="bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-5xl font-serif font-semibold font-Rancho mt-8 mb-3">
              TaskWorld
            </h1>
          </Link>
          <p className="border-b-2 border-white w-full"> </p>
          <div className="flex flex-col justify-start">
            <NavLink
              to="/dashboard/create_task"
              className={({ isActive }) =>
                isActive
                  ? "text-xl py-2 px-5 font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
                  : "text-white text-xl font-semibold hover:bg-gray-500 py-2 px-5 rounded-md"
              }>
              Create New Task
            </NavLink>
            <NavLink
              to="/dashboard/see_task"
              className={({ isActive }) =>
                isActive
                  ? "text-xl py-2 px-5 font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
                  : "text-white text-xl font-semibold hover:bg-gray-500 py-2 px-5 rounded-md"
              }>
              See Previous Task
            </NavLink>
            <NavLink
              to="/dashboard/manage_task"
              className={({ isActive }) =>
                isActive
                  ? "text-xl py-2 px-5 font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
                  : "text-white text-xl font-semibold hover:bg-gray-500 py-2 px-5 rounded-md"
              }>
              Manage Task
            </NavLink>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-xl py-2 px-5 font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
                  : "text-white text-xl font-semibold hover:bg-gray-500 py-2 px-5 rounded-md"
              }>
              Profile
            </NavLink>
          </div>
        </div>
        {/* dashboard child */}
        <div className="p-10 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
