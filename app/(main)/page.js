"use client";

import SearchInput from "@/components/searchInput";
import { useSelector } from "react-redux";

export default function Home() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div>
      <p>Home</p>
      <SearchInput />
    </div>
  );
}
