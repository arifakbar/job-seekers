"use client";

import JobCards from "@/components/cards/jobsCards";
import JobCards2 from "@/components/cards/jobsCards2";
import JobInfo from "@/components/jobInfo";
import LoadingSpinner from "@/components/spinner";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LatestJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/jobs");
      console.log(res.data[0]);
      setJobs(res.data);
      setSelectedJob(res.data[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const select = (index) => {
    setSelectedJob(jobs[index]);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-65px)]">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex p-4 gap-8 overflow-hidden h-full w-full">
          <div className="hidden md:block h-full xl:w-[30%] w-[40%] overflow-y-auto">
            {jobs.map((j, i) => {
              return (
                <JobCards2
                  key={i}
                  index={i}
                  title={j.name}
                  company={j.company_name}
                  exp={j.min_experience}
                  salary={j.salary_range}
                  shortDes={j.short_description}
                  select={select}
                />
              );
            })}
          </div>
          <div className="md:hidden w-full h-full overflow-y-auto">
            {jobs?.map((j, i) => {
              return <JobCards key={i} job={j} />;
            })}
          </div>
          <div className="hidden md:block h-full xl:w-[70%] w-[60%] overflow-y-auto pr-4 pt-4">
            <JobInfo job={selectedJob} />
          </div>
        </div>
      )}
    </div>
  );
}
