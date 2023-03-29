import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, title, duties } = jobs[currentItem];
  return (
    <section className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      <Duties duties={duties}></Duties>
    </section>
  );
};
export default JobInfo;
