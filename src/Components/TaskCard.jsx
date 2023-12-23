import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAllTask from "../Hooks/useAllTask";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskCard = ({ title, description, datelines, priority, id }) => {
  const axiosPublic = useAxiosPublic();
  const [AllTask, refetch] = useAllTask();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todoList",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDelete = (id) => {
    const toastId = toast.loading("Deleting Task...");

    axiosPublic.delete(`/task/${id}`).then((res) => {
      if (res?.data?.deletedCount > 0) {
        refetch();
        toast.success("Deleted", { id: toastId });
      }
    });
  };

  return (
    <div ref={drag}>
      <div
        className={`relative bg-[#F6F6F6] p-3 md:p-5 rounded-xl ${
          isDragging ? "opacity-25" : "opacity-100"
        } hover:cursor-grabbing duration-200`}>
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <Link to={`/dashboard/update/${id}`}>
            <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full p-3">
              <FaPen className="text-sm "></FaPen>
            </div>
          </Link>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-bold ">{datelines}</p>
          <p className="text-sm font-bold ">{priority}</p>
        </div>
        <div className="absolute -right-5 -top-5">
          <button
            onClick={() => handleDelete(id)}
            className="btn rounded-full border-red-400 hover:border-red-300 bg-red-400 hover:bg-red-300">
            <RxCross1 className=" md:text-base"></RxCross1>
          </button>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  datelines: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default TaskCard;
