"use client";

import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";
import { Building, MessageCircle, Search } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

function SideNavbar(props) {
  const router = useRouter();

  return (
    <div className="px-2 space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-white py-3">
      <ScrollArea className="flex-1 w-full pt-6 md:pt-0">
        <div className="md:hidden mt-4 gap-y-4 px-2 flex flex-col items-center justify-between h-full text-primary dark:bg-[#1E1F22] bg-white">
          <div className="w-full">
            <div className="flex items-center justify-between ">
              <label className="font-semibold text-xl text-dark dark:text-white">
                Videofy
              </label>
              <ModeToggle className="w-2 h-2" />
            </div>
            <Separator className="mt-2 bg-zinc-500 dark:bg-zinc-700" />
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="group rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"
          >
            <Search className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
              Jobs
            </p>
          </button>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="group rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"
          >
            <Building className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
              Companies
            </p>
          </button>
          <button className="group rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1">
            <MessageCircle className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
              Chat with Us
            </p>
          </button>
        </div>
        {/* <Separator className="md:hidden h-[2px] bg-zinc-500 dark:bg-zinc-700 rounded-md w-full my-3" /> */}
        {/* {links?.map((l) => {
          return <SideNavlinks key={l} name={l} />;
        })} */}
      </ScrollArea>
      <Button variant="outline" className="w-full">
        Sign Out
      </Button>
    </div>
  );
}

export default SideNavbar;
