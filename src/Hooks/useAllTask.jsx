import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAllTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: AllTask } = useQuery({
    queryKey: ["AllTask", user?.email],
    queryFn: async () => {
      const res = await axiosPublic(`/task/${user?.email}`);
      return res?.data;
    },
  });

  return [AllTask];
};

export default useAllTask;
