/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Container from "../../Components/Container";
import loginAnimation from "../../assets/Lottie_Animation/loginPage.json";
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../firebaseConfiq/firebase.confiq";
import toast from "react-hot-toast";
import GoogleSignIn from "../../Components/GoogleSingIn";
const image_bb_API = import.meta.env.VITE_IMAGE_API;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_bb_API}`;

const SignUp = () => {
  const [disable, setDisable] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, setUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Sign Up...");

    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const imageFile = { image: data?.image[0] };
    const res = await axios.post(image_hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res?.data?.data?.display_url;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            setUser({
              ...auth.currentUser,
              displayName: name,
              photoURL: image,
            });
            navigate("/");
            toast.success("Sign Up Successfully!", { id: toastId });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode, { id: toastId });
      });
  };

  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row  items-center justify-between">
        <div>
          <div className=" flex justify-center mt-14 md:mt-20 lg:mt-28 px-5 md:px-0 w-[400px]">
            <div className=" relative flex w-full  md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 mb-4 grid h-20 md:h-28 place-items-center overflow-hidden rounded-xl bg-black text-white shadow-lg shadow-[#000000]/40">
                <h3 className="block font-serif text-xl md:text-4xl leading-snug tracking-normal text-white antialiased">
                  Sign Up
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 p-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      {...register("name", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000000] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your name
                    </label>
                  </div>
                  {errors.name && (
                    <span className="text-red-400 text-xs">
                      This field is required
                    </span>
                  )}
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
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[#?!@$%^&*-]){6,}/,
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
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-400 text-xs ">
                      Password must be minimum 6 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-400 text-xs ">
                      Password must be minimum 1 capital letter and 1 special
                      characters
                    </span>
                  )}
                  <p className="text-sm font-medium -my-2 text-gray-500">
                    Select your image
                  </p>
                  <input
                    type="file"
                    {...register("image", { required: true })}
                  />
                  {errors.image?.type === "required" && (
                    <span className="text-red-400 text-xs ">
                      Image is required
                    </span>
                  )}
                  <div className="inline-flex items-center border-2 rounded-lg p-2">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="checkbox"
                      data-ripple-dark="true">
                      <input
                        type="checkbox"
                        onChange={() => setDisable(!disable)}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  hover:before:opacity-10"
                        id="checkbox"
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="dark:text-white mt-px cursor-pointer select-none font-light text-gray-700 w-full"
                      htmlFor="checkbox">
                      <div className="flex items-center justify-between">
                        <p>I'm not a robot</p>
                        <img
                          className="w-16"
                          src="https://i.ibb.co/HCYMt9F/replicate-prediction-reflvejbxvacw2j7bn3boovr5u-removebg-preview.png"
                          alt=""
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    disabled={disable}
                    className="hover:rounded-3xl duration-700 hover:duration-150 block w-full select-none rounded-lg bg-black font-serif py-3 px-6 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#000000]/20 transition-all hover:shadow-lg hover:shadow-[#000000]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="px-6 -mt-6">
                <div className="divider">OR</div>
                <GoogleSignIn></GoogleSignIn>
                <div className="flex justify-center items-center gap-2">
                  <p className="dark:text-white my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                    Have an account?
                  </p>
                  <Link
                    to="/sign_in"
                    className=" block font-serif font-medium text-base  leading-normal text-[#000000] antialiased">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-14 lg:mt-24"></div>
        </div>
        <div className="mt-24">
          <Lottie animationData={loginAnimation} className="w-[700px]"></Lottie>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
