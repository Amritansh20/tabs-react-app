import { v4 as uuidv4 } from "uuid";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const id = uuidv4();
        return (
          <button
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            key={id}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
