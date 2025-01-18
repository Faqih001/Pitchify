import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// function for twMerge and clsx to merge the classes together and return the result
export function cn(...inputs: ClassValue[]) {

  // return the result of twMerge with the result of clsx with the inputs
  return twMerge(clsx(inputs));
}

// function for formatting the date with the date string and returning the result
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}
