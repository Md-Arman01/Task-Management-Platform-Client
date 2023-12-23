import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import Container from "../Components/Container";

const Footer = () => {
  return (
    <div className="bg-base-200 mt-6 md:mt-10 lg:mt-20 px-10 lg:px-0">
      <Container>
        <footer className="footer py-10 text-base-content">
          <aside>
            <div className=" flex flex-col items-center">
              <img className="w-16" src={logo} alt="" />
              <h1 className="font-bold font-mono text-lg -mt-2">TaskWorld</h1>
            </div>
            <p className="font-medium">
              TaskWorld Industries Ltd. <br />
              Providing reliable tech since 1990
            </p>
          </aside>
          <nav>
            <header className="footer-title text-gray-900">Services</header>
            <Link
              to="/allStory"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              TaskWorld Compass
            </Link>
            <Link
              to="/allPackages"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Explore Task
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Task Trekker
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Discover Dynasty
            </Link>
          </nav>
          <nav>
            <header className="footer-title text-gray-900">Company</header>
            <Link
              to="/about_us"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              About us
            </Link>
            <Link
              to="/contact_us"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Contact us
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Blogs
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:translate-x-1 duration-700 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Community
            </Link>
          </nav>
          <nav>
            <header className="footer-title text-gray-900 w-full text-center">
              Follow Us
            </header>
            <div className="w-full">
              <div className="flex justify-center items-center gap-2">
                <a href="https://www.facebook.com/profile.php?id=100023522562335">
                  <BsFacebook className="text-2xl text-[#2B92EA] hover:cursor-pointer hover:scale-110" />
                </a>
                <FaTwitter className="text-2xl text-[#1AACF0] hover:cursor-pointer hover:scale-110" />
                <AiFillInstagram className="text-3xl text-[#A43EB7] hover:cursor-pointer hover:scale-110" />
              </div>
            </div>
            <div className="flex gap-5 md:gap-1 lg:gap-5 mt-5">
              <button className="btn glass bg-black  hover:bg-gray-700 normal-case text-white">
                <IoLogoGooglePlaystore className="text-xl text-white "></IoLogoGooglePlaystore>
                Google Play
              </button>
              <button className="btn glass bg-black hover:bg-gray-700  normal-case text-white">
                <BsApple className="text-xl text-white "></BsApple>Apple Store
              </button>
            </div>
          </nav>
        </footer>
        <footer className="footer footer-center py-6 text-base-content  border-t border-base-300">
          <aside>
            <p>Copyright © TaskWorld 2023</p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
