import Link from "next/link";
import { Badge } from "../ui/badge";

export default function JobCards2({
  index,
  title,
  company,
  exp,
  salary,
  shortDes,
  select,
}) {
  return (
    <div
      onClick={() => select(index)}
      className="mb-4 overflow-hidden h-[230px] xl:w-[400px] w-[350px] p-6  flex flex-col gap-3 items-start bg-white dark:bg-[#091921] shadow-xl rounded-md cursor-pointer"
    >
      <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
        {title}
      </h1>
      <h4 className="text-md font-semibold text-gray-500 dark:text-gray-400">
        {company}
      </h4>
      <div className="flex items-center gap-4">
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Min. {exp} years
        </small>{" "}
        |
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Rs. {salary.min} - Rs. {salary.max}
        </small>
      </div>
      <p className="md:text-sm text-md text-gray-500 dark:text-gray-400 text-wrap">
        {shortDes.slice(0, 150)}...
      </p>
    </div>
  );
}
