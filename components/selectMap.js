import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useSelector } from "react-redux";

export default function SelectMap({ index, array, setValue }) {
  const filters = useSelector((state) => state.appliedFilters.filters);
  let defaultValue = "";
  if (filters.length > 0) defaultValue = Object.values(filters[index - 1])[0];

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value) => setValue(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {array.map((a, i) => (
          <SelectItem key={i} value={a}>
            {a}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
