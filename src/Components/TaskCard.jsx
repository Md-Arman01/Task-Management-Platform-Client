const TaskCard = ({ title, description, datelines, priority }) => {
  return (
    <div>
      <div className="bg-[#F6F6F6] p-3 md:p-5 rounded-xl">
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

export default TaskCard;
