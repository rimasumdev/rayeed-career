import SectionTitleSubTitle from "../SectionTitleSubTitle/SectionTitleSubTitle";
import { useState, useEffect } from "react";
// import accounts from "../../../assets/icons/accounts.png";

const JobCategoryList = () => {
  const [jobCategories, setJobCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <SectionTitleSubTitle
          title="Job Category List"
          subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
        />
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobCategories.map((jobCategory) => (
              <li
                key={jobCategory.id}
                className="bg-violet-50 w-80 h-64 rounded-lg p-10 flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={jobCategory.logo}
                  alt={jobCategory.category_name}
                  className="w-16 h-16 p-4 bg-violet-100 rounded-lg"
                />
                <h3 className="text-2xl font-bold">
                  {jobCategory.category_name}
                </h3>
                <p className="text-base text-gray-500">
                  {jobCategory.availability}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;
