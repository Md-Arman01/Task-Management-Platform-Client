
import { Link } from "react-router-dom";
import Container from "../../Components/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-5 lg:py-16">
          <div className="space-y-5  px-5 lg:px-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold  md:w-[500px]">
              Best Way To Manage Your Daily Task
            </h1>
            <h1 className="text-base text-gray-500 font-semibold md:w-[600px]">
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
    </div>
  );
};

export default Banner;
