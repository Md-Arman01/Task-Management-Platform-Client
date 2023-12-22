import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const CreateTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating Task...");

    const taskInfo = {
      title: data?.title,
      description: data?.description,
      datelines: data?.datelines,
      priority: data?.priority,
      status: "to-do",
      user_email: user?.email,
      user_image: user?.photoURL,
    };
    axiosPublic.post("/task", taskInfo).then((res) => {
      if (res?.data?.insertedId) {
        reset();
        toast.success("Task Creating Successfully!", { id: toastId });
      }
    });
  };
  return (
    <>
      <div>
        <h1 className="text-center mb-10 md:my-20 text-3xl md:text-5xl font-semibold font-serif border-y-4 mx-auto border-dashed w-fit py-4">
          Create Task
        </h1>
      </div>
      <div className="bg-[#F6F6F6] p-8 md:p-10 lg:px-20 lg:py-40 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 1 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("title", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000000] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Title
                </label>
              </div>
              {errors.title && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 2 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("description", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000000] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Task description
                </label>
              </div>
              {errors.description && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 3 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="date"
                  {...register("datelines", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000000] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Datelines
                </label>
              </div>
              {errors.datelines && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 4 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <select
                  {...register("priority", { required: true })}
                  className="w-full pt-5 bg-[#F6F6F6] border-b ">
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#000000] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#000000] peer-focus:after:scale-x-100 peer-focus:after:border-[#000000] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Priority
                </label>
              </div>
              {errors.priority && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* --- */}
          </div>
          <button
            className="block w-52 normal-case mx-auto select-none rounded-lg bg-black hover:rounded-3xl duration-700 hover:duration-150 mt-10 py-3.5 px-7 text-center align-middle  text-base font-semibold  text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true">
            Create Task
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
