import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";

import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    console.log(newJobs);
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="jobs-center">
        {" "}
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        ></BtnContainer>
        <JobInfo jobs={jobs} currentItem={currentItem}></JobInfo>
      </div>
    </section>
  );
}

export default App;
