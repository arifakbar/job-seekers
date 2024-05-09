import Link from "next/link";
import { Badge } from "../ui/badge";

export default function JobCards() {
  const shortDescription =
    "Deployment to Dockers,Kubernetes based environments on AWS or Azure 1-5y nodejs exp,2-5y backend development experience";

  return (
    <Link
      href={`/jobs/${123}`}
      className="overflow-hidden h-[300px] xl:w-[24%] md:w-[48%] w-[100%] p-6  flex flex-col gap-3 items-start bg-white dark:bg-[#091921] shadow-md rounded-md cursor-pointer"
    >
      <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
        Job Title...
      </h1>
      <h4 className="text-md font-semibold text-gray-500 dark:text-gray-400">
        Company Name...
      </h4>
      <div className="flex items-center gap-4">
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Experience
        </small>{" "}
        |
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Salary
        </small>{" "}
        |
        <small className="text-sm text-gray-500 dark:text-gray-400">
          Ratings
        </small>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Location | workingType
      </p>
      <p className="md:text-sm text-md text-gray-500 dark:text-gray-400">
        {shortDescription.slice(0, 60)}...
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge className=" text-gray-500 dark:text-gray-400" variant="outline">
          Skill 1
        </Badge>
        <Badge className=" text-gray-500 dark:text-gray-400" variant="outline">
          Skill 2
        </Badge>
        <Badge className=" text-gray-500 dark:text-gray-400" variant="outline">
          Skill 3
        </Badge>
        <Badge className=" text-gray-500 dark:text-gray-400" variant="outline">
          Skill 4
        </Badge>
        <Badge className=" text-gray-500 dark:text-gray-400" variant="outline">
          Skill 5
        </Badge>
        <Badge className=" text-gray-500 dark:text-gray-400" variant="outline">
          Skill 6
        </Badge>
      </div>
    </Link>
  );
}
