import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BannerCard({ para1, para2, btnText }) {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div className="flex flex-col items-center justify-center gap-2 shadow-md p-4 rounded-md w-[90%] md:w-[35%] bg-white dark:bg-[#1E1F22] h-[180px]">
      <p className="font-semibold text-md text-gray-500 dark:text-gray-400">
        {para1}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{para2}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className={`}dark:bg-[#1E1F22] dark:border-gray-500 ${
                !currentUser &&
                "cursor-not-allowed dark:hover:bg-black hover:bg-white"
              }`}
            >
              {btnText}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {currentUser ? <p>Click to Continue</p> : <p>Login to Continue</p>}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
