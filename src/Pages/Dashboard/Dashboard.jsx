import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* dashboard menu */}
        <div className="lg:w-96 lg:min-h-screen  lg:-mb-20 bg-gray-700 flex flex-col items-center gap-3 px-5 py-10 lg:py-0">
          <h1 className="bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-5xl font-serif font-semibold font-Rancho mt-8 mb-3">
            TaskWorld
          </h1>
          <p className="border-b-2 border-white w-full"> </p>
          <div className="flex flex-col justify-start gap-5">
            <NavLink to="/dashboard">
              <button className="btn">Create New Task</button>
            </NavLink>
            <NavLink to="/dashboard/see_task">
              <button className="btn">See Previous Task</button>
            </NavLink>
            <NavLink to="/dashboard/manage_task">
              <button className="btn">Manage Task</button>
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
