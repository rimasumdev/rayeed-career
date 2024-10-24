import userImage from "../../../assets/images/user.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" bg-violet-50 py-10">
      <div className="container mx-auto h-full flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center lg:flex-row-reverse text-center lg:text-left gap-10">
          <img src={userImage} className="md:max-w-xl" />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">
              One Step <br />
              Closer To Your <br />{" "}
              <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
                Dream Job
              </span>
            </h1>
            <p className="p-4 lg:p-0">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Link
              to="/applied-jobs"
              className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
