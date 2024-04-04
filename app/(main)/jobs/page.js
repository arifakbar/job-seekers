"use client";

import ContainerCard from "@/components/cards/containerCard";
import Filters from "@/components/filter-drawer";
import SearchInput from "@/components/searchInput";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Jobs() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const city = searchParams.get("city");
  const exp = searchParams.get("exp");

  const filters = ["remote", "freshers", "Pune,Bhopal", "> 10 Lacs"];

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-gray-500 dark:text-gray-400 underline underline-offset-4">
        Search Results for <span className="capitalize">{title}</span> in{" "}
        <span className="capitalize">{city}</span>
      </h1>
      <div className="w-full flex justify-center items-center">
        <ContainerCard>
          <SearchInput />
        </ContainerCard>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-[60%] flex justify-between ">
          <div className="flex gap-2 items-start md:flex-row flex-col">
            <p className="text-md font-semibold text-gray-500 dark:text-gray-400">
              Filters :
            </p>
            {filters.length < 1 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-[2px]">
                None
              </p>
            ) : (
              filters.map((f, i) => {
                return (
                  <div
                    key={i}
                    className="rounded-3xl px-2 py-1 flex  items-center gap-4 shadow-md dark:bg-[#1E1F22] bg-white"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {f}
                    </p>
                    <X
                      size={14}
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-red-400 dark:hover:text-red-400 transition "
                    />
                  </div>
                );
              })
            )}
          </div>
          <Filters />
        </div>
      </div>
      <Separator className="bg-gray-500 dark:bg-gray-500 h-[1px]" />
    </div>
  );
}
