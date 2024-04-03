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
import SignupForm from "../forms/signupForm";

export default function SignupModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-semibold text-black dark:text-white">
        Signup
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-center ">
              Job<span className="text-red-500">Seekers</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sign Up and Continue.
              <Separator className="bg-gray-500 dark:bg-gray-400 mt-2" />
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="my-2">
              <SignupForm />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
