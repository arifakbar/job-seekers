import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

import { exp } from "@/lib/utils";

const formSchema = z.object({
  title: z.string().min(3, "Min. 3 alphates are required"),
  city: z.string().min(3, "Min. 3 alphates are required"),
  exp: z.number(),
});

export default function SearchInput() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      city: "",
      exp: 0,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex space-y-8 px-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="dark:border dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter Job Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="dark:border dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter City"
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
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0">
                      Freshers{" "}
                      <span className="font-sm text-gray-400 dark:text-gray-500">
                        (less than 1 years)
                      </span>
                    </SelectItem>
                    {exp.map((e) => {
                      return (
                        <SelectItem key={e} value={e}>
                          {e} Years
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

/*
  <SelectContent>
                      <SelectItem value="0">
                        Freshers{" "}
                        <span className="font-sm text-gray-400 dark:text-gray-500">
                          (less than 1 years)
                        </span>
                      </SelectItem>
                      {exp.map((e) => {
                        return (
                          <SelectItem key={e} value={e}>
                            {e} Years
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
*/
