"use client";

import SearchInput from "@/components/searchInput";
import { useSelector } from "react-redux";

export default function Home() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div className="h-[calc(100vh-98px)] flex flex-col items-center justify-center gap-6 my-4">
      <div className="flex flex-col gap-4 items-center">
        <h4 className="font-bold text-2xl">Get your preferred jobs here</h4>
        <p className="font-semibold text-md">Over 1 Lakh+ Jobs to search</p>
      </div>
      <div className="md:w-[60%] w-full bg-white dark:bg-black py-8 px-6 shadow-md rounded-md">
        <SearchInput />
      </div>
    </div>
  );
}
