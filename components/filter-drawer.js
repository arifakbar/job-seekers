import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

import {
  salary,
  jobTypes,
  workingType,
  timePosted,
  industry,
  companies,
} from "@/lib/utils";
import { useState } from "react";
import SelectMap from "./selectMap";
import { useDispatch } from "react-redux";
import { applyFilters } from "@/lib/redux/actions";

export default function Filters() {
  const [preferredSalary, setPreferredSalary] = useState("");
  const [preferredJobTypes, setPreferredJobTypes] = useState("");
  const [preferredTimePosted, setPreferredTimePosted] = useState("");
  const [preferredWorkingType, setPreferredWorkingType] = useState("");
  const [preferredIndustry, setPreferredIndustry] = useState("");
  const [preferredCompanies, setPreferredCompanies] = useState("");

  const dispatch = useDispatch();

  const onApply = () => {
    const applied_Filters = [];
    if (
      preferredSalary === "" &&
      preferredJobTypes === "" &&
      preferredWorkingType === "" &&
      preferredTimePosted === "" &&
      preferredIndustry === "" &&
      preferredCompanies === ""
    ) {
      dispatch(applyFilters(applied_Filters));
    } else {
      applied_Filters.push(
        { salary: preferredSalary },
        { jobTypes: preferredJobTypes },
        { workingType: preferredWorkingType },
        { timePosted: preferredTimePosted },
        { industry: preferredIndustry },
        { companies: preferredCompanies }
      );
      dispatch(applyFilters(applied_Filters));
    }
  };

  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-10 px-4 py-2">
        Add Filters
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>
            Apply filters to extract out more relevant search results.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex gap-4 px-4 py-2 flex-wrap">
          <div className="flex flex-col gap-1">
            <label className="text-md text-gray-500 dark:text-gray-400 font-semibold">
              Salary
            </label>
            <SelectMap index={1} array={salary} setValue={setPreferredSalary} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-md text-gray-500 dark:text-gray-400 font-semibold">
              Job Type
            </label>
            <SelectMap
              array={jobTypes}
              index={2}
              setValue={setPreferredJobTypes}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-md text-gray-500 dark:text-gray-400 font-semibold">
              Date Posted
            </label>
            <SelectMap
              array={timePosted}
              index={4}
              setValue={setPreferredTimePosted}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-md text-gray-500 dark:text-gray-400 font-semibold">
              Industry
            </label>
            <SelectMap
              array={industry}
              index={5}
              setValue={setPreferredIndustry}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-md text-gray-500 dark:text-gray-400 font-semibold">
              Working Type
            </label>
            <SelectMap
              array={workingType}
              index={3}
              setValue={setPreferredWorkingType}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-md text-gray-500 dark:text-gray-400 font-semibold">
              Companies
            </label>
            <SelectMap
              array={companies}
              index={6}
              setValue={setPreferredCompanies}
            />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose className="flex gap-2">
            <Button onClick={onApply} className="w-full md:w-auto">
              Apply
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
