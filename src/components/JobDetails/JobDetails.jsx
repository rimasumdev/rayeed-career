import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage } from "../../utility/LocalStorage";
const JobDetails = () => {
  const featuredJobs = useLoaderData();
  // console.log(featuredJobs);
  const { id } = useParams();
  const currentId = parseInt(id);
  const job = featuredJobs.find((job) => job.id === currentId);
  // console.log(job, id);
  const handleApplyNow = () => {
    addToLocalStorage(currentId);
  };
  return (
    <div className="space-y-8">
      <div className="bg-violet-50 p-10 rounded-lg space-y-3 text-center">
        <h2 className="text-3xl font-bold">Job Details</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 px-4 py-10 justify-center gap-y-10 md:gap-10">
        <div className="col-span-3 rounded-lg space-y-8 text-justify">
          <h2 className="text-xl text-gray-500">
            <span className="font-bold text-black">Job Description:</span>{" "}
            {job.job_description}
          </h2>
          <h2 className="text-xl text-gray-500">
            <span className="font-bold text-black">Job Responsibility:</span>{" "}
            {job.job_responsibility}
          </h2>
          <h2 className="text-xl text-gray-500">
            <span className="font-bold text-black">
              Educational Requirements:
            </span>{" "}
            {job.educational_requirements}
          </h2>
          <h2 className="text-xl text-gray-500">
            <span className="font-bold text-black">
              Experience Requirements:
            </span>{" "}
            {job.experiences}
          </h2>
        </div>
        <div className="col-span-2 self-start space-y-5">
          <div className="bg-violet-50 p-10 rounded-lg space-y-5">
            <h2 className="text-2xl font-bold">Job Details</h2>
            <hr />
            <h2 className="text-sm md:text-xl text-gray-500 flex items-start md:items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 4V16M7 13.182L7.879 13.841C9.05 14.72 10.949 14.72 12.121 13.841C13.293 12.962 13.293 11.538 12.121 10.659C11.536 10.219 10.768 10 10 10C9.275 10 8.55 9.78 7.997 9.341C6.891 8.462 6.891 7.038 7.997 6.159C9.103 5.28 10.897 5.28 12.003 6.159L12.418 6.489M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                  stroke="url(#paint0_linear_7_407)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_407"
                    x1="1"
                    y1="9.86154"
                    x2="19"
                    y2="9.86154"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-gray-700">Salary:</span>{" "}
              {job.salary} (Per Month)
            </h2>
            <h2 className="text-sm md:text-xl text-gray-500 flex items-start md:items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                  stroke="url(#paint0_linear_7_412)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_412"
                    x1="3"
                    y1="11.8615"
                    x2="21"
                    y2="11.8615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-gray-700">Job Title: </span>
              {job.job_title}
            </h2>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <hr />
            <h2 className="text-sm md:text-xl text-gray-500 flex items-start md:items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z"
                  stroke="url(#paint0_linear_7_465)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_465"
                    x1="2.25"
                    y1="11.85"
                    x2="21.75"
                    y2="11.85"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-gray-700">Phone:</span>{" "}
              {job.contact_information.phone}
            </h2>
            <h2 className="text-sm md:text-xl text-gray-500 flex items-start md:items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75"
                  stroke="url(#paint0_linear_7_463)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_463"
                    x1="2.25"
                    y1="11.8846"
                    x2="21.75"
                    y2="11.8846"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-gray-700">Email:</span>{" "}
              {job.contact_information.email}
            </h2>
            <h2 className="text-sm md:text-xl text-gray-500 flex items-start md:items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z"
                  stroke="url(#paint0_linear_7_460)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z"
                  stroke="url(#paint1_linear_7_460)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_460"
                    x1="9"
                    y1="10.4538"
                    x2="15"
                    y2="10.4538"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_7_460"
                    x1="4.5"
                    y1="12.2308"
                    x2="19.5"
                    y2="12.2308"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-gray-700">Address:</span>{" "}
              {job.contact_information.address}
            </h2>
          </div>
          <div>
            <button
              onClick={handleApplyNow}
              className="bg-violet-500 text-xl font-bold text-white px-4 py-6 rounded-md w-full"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
