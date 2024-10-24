const getFromLocalStorage = () => {
  const storedJobs = localStorage.getItem("appliedJobs");
  return storedJobs ? JSON.parse(storedJobs) : [];
};
const addToLocalStorage = (id) => {
  const storedJobs = getFromLocalStorage();
  const exists = storedJobs.find((jobId) => jobId === id);
  if (!exists) {
    storedJobs.push(id);
    localStorage.setItem("appliedJobs", JSON.stringify(storedJobs));
  }
};
export { getFromLocalStorage, addToLocalStorage };
