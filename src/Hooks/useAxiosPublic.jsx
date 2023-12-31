import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-platform-server-omega.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
