const ManageTask = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mb-10 md:my-10 text-3xl md:text-5xl font-semibold font-serif border-y-4 mx-auto border-dashed w-fit py-4">
          Manage Task
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* to-do list */}
        <div className="bg-[#F6F6F6] p-8 md:p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-mono font-bold">To-Do:</h1>
          </div>
        </div>
        {/* ongoing list */}
        <div className="bg-[#F6F6F6] p-8 md:p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-mono font-bold">Ongoing:</h1>
          </div>
        </div>
        {/* Completed list */}
        <div className="bg-[#F6F6F6] p-8 md:p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-mono font-bold">Completed:</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManageTask;
