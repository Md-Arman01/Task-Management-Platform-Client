import { Link } from "react-router-dom";
import Container from "../Components/Container";
import { FiMenu } from "react-icons/fi";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const menuItems = <MenuItem></MenuItem>;

  return (
    <div className=" top-o z-50 h-fit inset-0 border border-white/80 bg-white bg-opacity-80 shadow-md backdrop-blur-2xl backdrop-saturate-200 ">
      {/* ----------- */}
      <Container>
        <div className="navbar">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FiMenu className="text-3xl"></FiMenu>
              </label>
              <ul
                tabIndex={0}
                className="flex flex-col gap-2 dropdown-content mt-3 z-[1] py-4 px-5  shadow text-black bg-gray-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <Link to="/">
              <div className="hover:cursor-pointer flex flex-col items-center">
                <img
                  className="w-16"
                  src="https://i.ibb.co/Ss8PzDH/Pi7-Image-young-happy-man-standing-isolated.jpg"
                  alt=""
                />
                <h1 className="text-2xl font-Rancho font-semibold -mt-3">
                  Travelia
                </h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* navber */}
              <div>{menuItems}</div>
            </ul>
          </div>
          {/* Todo */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
