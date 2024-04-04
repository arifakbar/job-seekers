import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "../ui/separator";
import LoginForm from "../forms/loginForm";
import SignupModal from "./signupModal";

export default function LoginModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-10 px-4 py-2">
        Login
      </AlertDialogTrigger>
      <AlertDialogContent className="md:w-[100%] w-[95%]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-center ">
              Job<span className="text-red-500">Seekers</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By creating an account or signing in, you understand and agree to
              JobSeekers's Terms. You also acknowledge our Cookie and Privacy
              policies.
              <Separator className="bg-gray-500 dark:bg-gray-400 mt-2" />
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="my-2">
              <LoginForm />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Don't have an account? <SignupModal />
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
