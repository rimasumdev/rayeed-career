import SectionTitleSubTitle from "../SectionTitleSubTitle/SectionTitleSubTitle";
// import accounts from "../../../assets/icons/accounts.png";

const JobCategoryList = () => {
  const jobCategoriesList = [
    {
      id: 1,
      name: "Account & Finance",
      image: "../../../assets/icons/accounts.png",
      availableJobs: 300,
    },
    {
      id: 2,
      name: "Creative Design",
      image: "../../../assets/icons/creative.png",
      availableJobs: 200,
    },
    {
      id: 3,
      name: "Marketing & Sales",
      image: "../../../assets/icons/marketing.png",
      availableJobs: 150,
    },
    {
      id: 4,
      name: "Engineering Job",
      image: "../../../assets/icons/chip.png",
      availableJobs: 234,
    },
  ];
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <SectionTitleSubTitle
          title="Job Category List"
          subTitle="Explore thousands of job opportunities with all the information you need. Its your future"
        />
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobCategoriesList.map((jobCategory) => (
              <li
                key={jobCategory.id}
                className="bg-violet-50 w-80 h-64 rounded-lg p-10 flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={jobCategory.image}
                  alt={jobCategory.name}
                  className="w-16 h-16 p-4 bg-violet-100 rounded-lg"
                />
                <h3 className="text-2xl font-bold">{jobCategory.name}</h3>
                <p className="text-base text-gray-500">
                  {jobCategory.availableJobs} Jobs Available
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
