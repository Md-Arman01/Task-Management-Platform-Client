/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Components/Container";
import loginAnimation from "../../assets/Lottie_Animation/loginPage.json";
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import GoogleSignIn from "../../Components/GoogleSingIn";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    const toastId = toast.loading("Sign In...");

    const email = data?.email;
    const password = data?.password;

    loginUser(email, password)
      .then((userCredential) => {
        toast.success("Sign In Successfully!", { id: toastId });
        const user = userCredential.user;
        navigate(location?.state ? location?.state : "/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode, { id: toastId });
      });
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mt-24">
          <Lottie animationData={loginAnimation} className="w-[700px]"></Lottie>
        </div>
        <div>
          <div className=" flex justify-center mt-14 md:mt-20 lg:mt-28 px-5 md:px-0 w-[400px]">
            <div className="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 mb-4 grid h-20 md:h-28 place-items-center overflow-hidden rounded-xl bg-black text-white shadow-lg shadow-[#000000]/40">
                <h3 className="block font-serif text-xl md:text-4xl leading-snug tracking-normal text-white antialiased">
                  Welcome back...!
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 p-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      {...register("email", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000000] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your email address
                    </label>
                  </div>
                  {errors.email && (
                    <span className="text-red-400 text-xs">
                      This field is required
                    </span>
                  )}
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                      })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000000] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your password
                    </label>
                  </div>
                  {errors.password?.type === "required" && (
                    <span className="text-red-400 text-xs ">
                      Password is required
                    </span>
                  )}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="hover:rounded-3xl duration-700 hover:duration-150 block w-full select-none rounded-lg font-serif bg-black py-3 px-6 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#000000]/20 transition-all hover:shadow-lg hover:shadow-[#000000]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="px-6 -mt-6">
                <div className="divider">OR</div>
                <GoogleSignIn></GoogleSignIn>
                <div className="flex justify-center items-center gap-2">
                  <p className="dark:text-white my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                    Don't have an account?
                  </p>
                  <Link
                    to="/sign_up"
                    className=" block font-serif font-medium text-base  leading-normal text-[#000000] antialiased">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-14 lg:mt-24"></div>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
