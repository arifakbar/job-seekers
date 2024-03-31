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

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex md:flex-row w-full flex-col items-center justify-center gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
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
              <FormItem className="w-full">
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
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={30}
                    disabled={isLoading}
                    className="dark:border dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter Experience"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Search</Button>
        </div>
      </form>
    </Form>
  );
}
