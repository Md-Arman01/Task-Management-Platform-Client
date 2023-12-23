import TaskCard from "../../Components/TaskCard";
import useAllTask from "../../Hooks/useAllTask";

const SeeTask = () => {
  const [AllTask] = useAllTask();
  const CompletedTask = AllTask?.filter((task) => task?.status === "completed");

  return (
    <div>
      <div>
        <h1 className="text-center mb-10 md:my-20 text-3xl md:text-5xl font-semibold font-serif border-y-4 mx-auto border-dashed w-fit py-4">
          Complete Task
        </h1>
      </div>
      <div className="bg-[#8fe9b1] p-8 md:p-10 lg:px-20 lg:pb-20 rounded-xl">
        <div>
          <h1 className="text-2xl font-bold">
            Completed: {CompletedTask?.length}
          </h1>
        </div>
        <div className="space-y-6 mt-10">
          {CompletedTask?.map((task) => (
            <TaskCard
              key={task?._id}
              title={task?.title}
              description={task?.description}
              datelines={task?.datelines}
              priority={task?.priority}
              id={task?._id}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeTask;
