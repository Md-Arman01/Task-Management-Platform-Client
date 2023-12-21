import { NavLink } from "react-router-dom";

const MenuItem = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium hover:scale-110 hover:transition-all  hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          Home
        </NavLink>
        <NavLink
          to="/about_us"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium hover:scale-110 hover:transition-all  hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          About Us
        </NavLink>
        <NavLink
          to="/contact_us"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium hover:scale-110 hover:transition-all hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default MenuItem;
