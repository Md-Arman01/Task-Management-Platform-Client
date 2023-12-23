import { useDrag } from "react-dnd";
import PropTypes from "prop-types";

const TaskCard = ({ title, description, datelines, priority, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todoList",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag}>
      <div
        className={`bg-[#F6F6F6] p-3 md:p-5 rounded-xl ${
          isDragging ? "opacity-25" : "opacity-100"
        } hover:cursor-grabbing duration-200`}>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-bold ">{datelines}</p>
          <p className="text-sm font-bold ">{priority}</p>
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
