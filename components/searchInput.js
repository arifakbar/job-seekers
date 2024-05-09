import { Input } from "./ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(3, "Min. 3 alphates are required"),
  city: z.string().min(3, "Min. 3 alphates are required"),
  exp: z.coerce.number(),
});

export default function SearchInput() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      city: "",
      exp: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const onSubmit = (values) => {
    return router.push(
      `/jobs?title=${values.title}&city=${values.city}&exp=${values.exp}`
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col md:flex-row justify-center gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="py-6 dark:border bg-[#E3E5E8] dark:bg-[#313338] shadow-md dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Job Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex items-center justify-between gap-2">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="py-6 shadow-md bg-[#E3E5E8] dark:bg-[#313338] dark:border dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder="City"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="exp"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={30}
                      disabled={isLoading}
                      className="py-6 shadow-md bg-[#E3E5E8] dark:bg-[#313338] dark:border dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder="Total Exp. (in years)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button
              variant="outline"
              className="shadow-md h-full dark:bg-[#1E1F22] dark:border-gray-500"
            >
              Find Jobs
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
