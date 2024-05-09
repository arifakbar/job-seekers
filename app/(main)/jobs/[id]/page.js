"use client";

import ContainerCard from "@/components/cards/containerCard";
import SearchInput from "@/components/searchInput";
import { Separator } from "@/components/ui/separator";

export default function Job(props) {
  const id = props.params.id;
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="w-full flex justify-center items-center">
        <ContainerCard>
          <SearchInput />
        </ContainerCard>
      </div>
      <Separator className="bg-gray-500 dark:bg-gray-400" />
      <div className="flex flex-col gap-3">
        <h1>React JS + Golang Developer</h1>
        <h4>Steady Rabbit Technology</h4>
        <div className="flex items-center gap-4">
          <small>Experience</small> |<small>Salary</small> |
          <small>Ratings</small>
        </div>
        <p>Pune, Delhi | Hybrid</p>
        <div className="flex gap-3">
          <small>
            Posted: <b>2 days ago</b>
          </small>{" "}
          |
          <small>
            Applicants: <b>1052</b>
          </small>
          |
          <small>
            Openings: <b>10</b>
          </small>
        </div>
        <Separator className="bg-gray-500 dark:bg-gray-400" />
        <div className="flex flex-col gap-2">
          <h1>About the Job</h1>
          <div>
            <div className="flex flex-col gap-2">
              <h1>Requirements: </h1>
              <div className="flex flex-col gap-1">
                <p>Min. Experience</p>
                <p>Notice Period</p>
                <p>Skills/Techonolgies</p>
                <p>Graduation</p>
                <p>Certifications</p>
              </div>
            </div>
            <p>Job description</p>
          </div>
          <h1>Roles and Responsibilites</h1>
          <p>
            Craft and nurture top-tier web experiences through React,
            consistently refining and enhancing their functionality.
          </p>
          <p>
            Spearhead the creation and upkeep of backend services using GO,
            infusing them with efficiency and reliability.
          </p>
          <p>
            Uphold the performance, excellence, and adaptability of
            applications, ensuring seamless operation across browsers while
            maximizing their velocity and scalability.
          </p>
        </div>
      </div>
    </div>
  );
}
