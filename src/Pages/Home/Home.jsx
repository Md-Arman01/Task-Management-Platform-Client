import { Link } from "react-router-dom";
import Container from "../../Components/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-16">
        <div className="space-y-5">
          <h1 className="text-6xl font-bold w-[500px]">
            Best Way To Manage Your Daily Task
          </h1>
          <h1 className="text-base text-gray-500 font-semibold w-[600px]">
            It encompasses creating a structured approach to handle work, set
            priorities, allocate resources, and monitor progress. Task
            management tools and techniques help individuals and teams
            streamline workflows, enhance productivity, and meet deadlines.
          </h1>
          <div>
            <Link to="/dashboard/create_task">
              <button className="btn btn-outline bg-black hover:bg-white text-white hover:text-black">
                {"Let's Explore"}
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/S6zrwCt/4891584-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
