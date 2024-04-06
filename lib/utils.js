import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Search Filters
export const salary = [
  "1LPA - 3LPA",
  "3LPA - 7LPA",
  "7LPA - 15LAP",
  "15LPA - 30LPA",
  "30LPA - 50LPA",
  "50LPA +",
];

export const jobTypes = [
  "Part Time",
  "Full Time",
  "Internship",
  "Temporary",
  "Contract",
];

export const workingType = ["Remote", "Hybrid"];

export const timePosted = [
  "Last 24 Hours",
  "Last 2 days",
  "Last 7 days",
  "This Month",
  "Before This Month",
];

export const industry = [
  "Civil/Mechanical/Electrical",
  "IT/Computer",
  "Sales and Marketing",
  "Data Entry",
  "Customer Service",
  "Human Resource",
  "Time Management",
  "Gaming",
];

export const companies = ["MNC's", "Start up's", "Product based"];
