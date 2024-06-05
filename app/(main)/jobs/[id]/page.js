"use client";

import ContainerCard from "@/components/cards/containerCard";
import JobInfo from "@/components/jobInfo";
import SearchInput from "@/components/searchInput";
import LoadingSpinner from "@/components/spinner";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Job(props) {
  const id = props.params.id;
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadJob();
  }, [id]);

  const loadJob = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/jobs/${id}`);
      setJob(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return loading ? (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="p-4 flex flex-col gap-6">
      <div className="w-full flex justify-center items-center">
        <ContainerCard>
          <SearchInput />
        </ContainerCard>
      </div>
      <Separator className="bg-gray-500 dark:bg-gray-400" />
      <JobInfo job={job} />
    </div>
  );
}
