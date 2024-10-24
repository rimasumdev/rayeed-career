import SectionTitleSubTitle from "../SectionTitleSubTitle/SectionTitleSubTitle";
import { useState, useEffect } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch("../../../data/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  const [showAll, setShowAll] = useState(false);
  //   console.log(featuredJobs);
  return (
    <section id="featured-jobs" className="container mx-auto pb-16 space-y-8">
      <SectionTitleSubTitle
        title="Featured Jobs"
        subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {featuredJobs.length > 0 &&
          featuredJobs
            .slice(0, showAll ? featuredJobs.length : 3)
            .map((job) => <FeaturedJob key={job.id} job={job} />)}
      </div>
      <div className="flex justify-center">
        {!showAll && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
          >
            {/* {showAll ? "Show Less" : "See All Jobs"} */}
            See All Jobs
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
