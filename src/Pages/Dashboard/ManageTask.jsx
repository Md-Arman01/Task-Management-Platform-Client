import { useDrop } from "react-dnd";
import TaskCard from "../../Components/TaskCard";
import useAllTask from "../../Hooks/useAllTask";

const ManageTask = () => {
  const [AllTask] = useAllTask();
  const toDoTask = AllTask?.filter((task) => task?.status === "to-do");
  const onGoingTask = AllTask?.filter((task) => task?.status === "ongoing");
  const CompletedTask = AllTask?.filter((task) => task?.status === "completed");
  

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todoList",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div>
        <h1 className="text-center mb-10 md:my-20 text-3xl md:text-5xl font-semibold font-serif border-y-4 mx-auto border-dashed w-fit py-4">
          Manage Task
        </h1>
      </div>
      <div
        ref={drop}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* to-do list */}
        <div className="bg-[#ff8989] p-8 md:p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-mono font-bold mb-5">To-Do:</h1>
            <div className="space-y-3">
              {toDoTask?.map((task) => (
                <TaskCard
                  key={task?._id}
                  id={task?._id}
                  title={task?.title}
                  description={task?.description}
                  datelines={task?.datelines}
                  priority={task?.priority}></TaskCard>
              ))}
            </div>
          </div>
        </div>

        {/* ongoing list */}
        <div className="bg-[#fdba92] p-8 md:p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-mono font-bold mb-5">Ongoing:</h1>
            <div className="space-y-3">
              {onGoingTask?.map((task) => (
                <TaskCard
                  key={task?._id}
                  id={task?._id}
                  title={task?.title}
                  description={task?.description}
                  datelines={task?.datelines}
                  priority={task?.priority}></TaskCard>
              ))}
            </div>
          </div>
        </div>
        {/* Completed list */}
        <div className="bg-[#8fe9b1] p-8 md:p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-mono font-bold mb-5">Completed:</h1>
            <div className="space-y-3">
              {CompletedTask?.map((task) => (
                <TaskCard
                  key={task?._id}
                  id={task?._id}
                  title={task?.title}
                  description={task?.description}
                  datelines={task?.datelines}
                  priority={task?.priority}></TaskCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
