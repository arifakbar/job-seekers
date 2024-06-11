import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, IndianRupee, MapIcon, StarIcon } from "lucide-react";
import { Fragment } from "react";

export default function JobInfo({ job }) {
  const calcTimeDiff = (postedDate) => {
    const date1 = new Date();
    const date2 = new Date(postedDate);
    let Difference_In_Time = date1.getTime() - date2.getTime();
    let Difference_In_Days = Math.round(
      Difference_In_Time / (1000 * 3600 * 24)
    );
    return Difference_In_Days;
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex md:flex-row gap-y-3 justify-between md:items-end flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{job?.name}</h1>
          <h4 className="text-md font-semibold">{job?.company_name}</h4>
          <div className="flex items-center gap-1 md:gap-4">
            <small className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
              <Briefcase
                size={16}
                strokeWidth="3"
                className=" text-gray-500 dark:text-gray-400"
              />{" "}
              Min. {job?.min_experience} years
            </small>{" "}
            |
            <small className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
              {" "}
              <IndianRupee
                size={16}
                strokeWidth="3"
                className=" text-gray-500 dark:text-gray-400"
              />{" "}
              Rs. {job?.salary_range?.min} - Rs. {job?.salary_range?.max}
            </small>{" "}
            |
            <small className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
              <StarIcon
                size={16}
                strokeWidth="3"
                className=" text-gray-500 dark:text-gray-400"
              />{" "}
              {job?.ratings}
            </small>
          </div>
          <p className="flex gap-2 items-center text-sm font-semibold text-gray-500 dark:text-gray-400">
            <MapIcon
              size={16}
              strokeWidth="3"
              className=" text-gray-500 dark:text-gray-400"
            />{" "}
            {job?.location} | {job?.job_type}
          </p>
          <div className="flex gap-1 md:gap-3">
            <small className=" text-gray-500 dark:text-gray-400">
              Posted: <b>{calcTimeDiff(job?.posted_on)} days ago </b>{" "}
            </small>{" "}
            |
            <small className=" text-gray-500 dark:text-gray-400">
              Applicants: <b>{job?.total_applicants}</b>
            </small>
            |
            <small className=" text-gray-500 dark:text-gray-400">
              Openings: <b>{job?.total_openings}</b>
            </small>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Apply</Button>
          <Button variant="destructive">Report</Button>
        </div>
      </div>
      <Separator className="bg-gray-500 dark:bg-gray-400" />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400 underline">
          About the Job
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-semibold text-gray-500 dark:text-gray-400 underline">
            Requirements:{" "}
          </h1>
          <div className="flex flex-col gap-1">
            {job?.requirements?.noticePeriod && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Notice Period : {job?.requirements?.noticePeriod}
              </p>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Skills/Techonolgies :{" "}
              {job?.requirements?.skills.map((s, i) => {
                return <b key={i}>{(i > 0 ? ", " : " ") + s}</b>;
              })}
            </p>
            {job?.requirements?.graduation && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Graduation : {job?.requirements?.graduation}
              </p>
            )}
            {job?.requirements?.certifications && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Certifications :{" "}
                {job?.requirements?.certifications.map((c, i) => {
                  return (
                    <Fragment key={i}>{(i > 0 ? ", " : " ") + c}</Fragment>
                  );
                })}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-semibold text-gray-500 dark:text-gray-400 underline">
            Roles and Responsibilites:
          </h1>
          <ul className="flex flex-col gap-1 list-disc mx-10">
            {job?.roles_and_responsibilities?.map((r, i) => {
              return (
                <li
                  key={i}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  {r}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Separator className="bg-gray-500 dark:bg-gray-400" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400 underline">
          About Company
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Steady Rabbit is a leading - Product Engineering and DevOps service
          organization with offices in India, US and Italy. Our Motto - Expect
          more from us. We are more then a technical partner; we are your
          business partner.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <b>Address:</b> 61 A,GF,NEHRU COOPERATIVE HOUSING SOCIETY,AMBEDKAR ,
          GHAZIABAD, Uttar Pradesh, India
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <b>Contact</b>: email@address.com/phone no.
        </p>
      </div>
    </div>
  );
}
