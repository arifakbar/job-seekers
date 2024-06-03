"use client";

import JobCards from "@/components/cards/jobsCards";
import LoadingSpinner from "@/components/spinner";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LatestJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/jobs");
      console.log(res.data);
      setJobs(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return loading ? (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="pt-4 flex flex-row items-center justify-between gap-4 flex-wrap">
      {jobs.map((j) => {
        return <JobCards job={j} />;
      })}
    </div>
  );
}
