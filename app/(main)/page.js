"use client";

import SearchInput from "@/components/searchInput";
import { useSelector } from "react-redux";

export default function Home() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div>
      <p>Home</p>
      <div className="bg-red-500 p-4">
        <SearchInput />
      </div>
    </div>
  );
}
