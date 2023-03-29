import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
const Duties = ({ duties }) => {
  return (
    <section>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Duties;
