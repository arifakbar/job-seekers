"use client";

import { useSelector } from "react-redux";

export default function Home() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div>
      <p>Home</p>
      {currentUser && <p>Hi</p>}
    </div>
  );
}
