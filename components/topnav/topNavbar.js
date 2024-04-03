"use client";

import { BellDot } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { Input } from "../ui/input";
import { ModeToggle } from "../mode-toggle";
import TopUserlinks from "./topUserLinks";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Fragment } from "react";
import LoginModal from "../modal/loginModal";
import Link from "next/link";

export default function TopNavbar() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div className="bg-white px-4 flex items-center justify-between h-full text-primary w-full dark:bg-[#1E1F22]">
      <div className="flex items-center gap-4">
        <MobileToggle />
        <label
          className="hidden md:block mr-4 font-semibold
        dark:text-white
        "
        >
          Job<span className="text-red-500">Seekers</span>
        </label>
      </div>
      <div className="hidden md:flex px-4 space-x-4 items-center justify-between h-full text-primary dark:bg-[#1E1F22] bg-white">
        <Link href="/">
          <button className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1">
            <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
              Home
            </p>
          </button>
        </Link>
        <Link href="/companies">
          <button className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1">
            <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
              Companies
            </p>
          </button>
        </Link>
        <div>
          <ModeToggle />
        </div>
        {currentUser ? (
          <>
            <button className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1">
              <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
                <BellDot />
              </p>
            </button>
            <TopUserlinks
              name="Light"
              profilePic="https://github.com/shadcn.png"
            />
          </>
        ) : (
          <LoginModal />
        )}
      </div>
      <div className="flex md:hidden space-x-2 items-center justify-between h-full text-primary dark:bg-[#1E1F22] bg-white">
        {currentUser ? (
          <>
            <button className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1">
              <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
                <BellDot />
              </p>
            </button>
            <TopUserlinks
              name="Light"
              profilePic="https://github.com/shadcn.png"
            />
          </>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  );
}
