import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    const toastId = toast.loading("Sign in...");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user)
        toast.success("Sign Up Successfully!", { id: toastId });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode, { id: toastId });
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-info normal-case w-full">
        <FcGoogle className="text-xl"></FcGoogle>Login With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
