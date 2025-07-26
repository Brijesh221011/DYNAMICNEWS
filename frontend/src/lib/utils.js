import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


 export function convertToReadable(input){
  const dateObj=new Date(input);

  const options={
      year: "numeric",
      month: "long",
      day: "numeric"
  }

  const readableDate= dateObj.toLocaleString("en-US",options);
  return readableDate;
}
