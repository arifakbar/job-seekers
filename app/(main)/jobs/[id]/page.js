"use client";

import ContainerCard from "@/components/cards/containerCard";
import SearchInput from "@/components/searchInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, IndianRupee, MapIcon, StarIcon } from "lucide-react";

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
        <div className="flex md:flex-row gap-y-3 justify-between md:items-end flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">React JS + Golang Developer</h1>
            <h4 className="text-md font-semibold">Steady Rabbit Technology</h4>
            <div className="flex items-center gap-1 md:gap-4">
              <small className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
                <Briefcase
                  size={16}
                  strokeWidth="3"
                  className=" text-gray-500 dark:text-gray-400"
                />{" "}
                Experience
              </small>{" "}
              |
              <small className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
                {" "}
                <IndianRupee
                  size={16}
                  strokeWidth="3"
                  className=" text-gray-500 dark:text-gray-400"
                />{" "}
                Salary
              </small>{" "}
              |
              <small className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
                <StarIcon
                  size={16}
                  strokeWidth="3"
                  className=" text-gray-500 dark:text-gray-400"
                />{" "}
                Ratings
              </small>
            </div>
            <p className="flex gap-2 items-center text-sm font-semibold text-gray-500 dark:text-gray-400">
              <MapIcon
                size={16}
                strokeWidth="3"
                className=" text-gray-500 dark:text-gray-400"
              />{" "}
              Pune, Delhi | Hybrid
            </p>
            <div className="flex gap-1 md:gap-3">
              <small className=" text-gray-500 dark:text-gray-400">
                Posted: <b>2 days ago</b>
              </small>{" "}
              |
              <small className=" text-gray-500 dark:text-gray-400">
                Applicants: <b>1052</b>
              </small>
              |
              <small className=" text-gray-500 dark:text-gray-400">
                Openings: <b>10</b>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Notice Period : Immediately
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Skills/Techonolgies : React, Node, DevOps, Golang
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Graduation : Graduate
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Certifications : None
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-md font-semibold text-gray-500 dark:text-gray-400 underline">
              Roles and Responsibilites:
            </h1>
            <ul className="flex flex-col gap-1 list-disc mx-10">
              <li className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                Craft and nurture top-tier web experiences through React,
                consistently refining and enhancing their functionality.
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                Spearhead the creation and upkeep of backend services using GO,
                infusing them with efficiency and reliability.
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                Uphold the performance, excellence, and adaptability of
                applications, ensuring seamless operation across browsers while
                maximizing their velocity and scalability.
              </li>
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
    </div>
  );
}
