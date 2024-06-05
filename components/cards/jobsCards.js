import Link from "next/link";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

export default function JobCards({ job }) {
  return (
    <Link
      href={`/jobs/${job?.id}`}
      className="mt-2 overflow-hidden h-[300px] xl:w-[24%] md:w-[48%] w-[100%] p-6  flex flex-col gap-3 items-start bg-white dark:bg-[#091921] shadow-md rounded-md cursor-pointer"
    >
      <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
        {job?.name}
      </h1>
      <h4 className="text-md font-semibold text-gray-500 dark:text-gray-400">
        {job?.company_name}
      </h4>
      <div className="flex items-center gap-4">
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Min. {job?.min_experience} years.
        </small>{" "}
        |
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Rs. {job?.salary_range?.min} - Rs. {job?.salary_range?.max}
        </small>{" "}
        |
        <small className="flex gap-1 items-center text-sm text-gray-500 dark:text-gray-400">
          {job?.ratings} <Star size={12} />
        </small>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {job?.location} | {job?.job_type}
      </p>
      <p className="md:text-sm text-md text-gray-500 dark:text-gray-400">
        {job?.short_description}...
      </p>
      <div className="flex flex-wrap gap-2">
        {job?.requirements?.skills?.map((s, i) => {
          return (
            <Badge
              key={i}
              className=" text-gray-500 dark:text-gray-400"
              variant="outline"
            >
              {s}
            </Badge>
          );
        })}
      </div>
    </Link>
  );
}
