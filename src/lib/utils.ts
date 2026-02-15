import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const styles = {
  default:
    "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white focus:outline-none transition-colors duration-200",
  error: "text-error-500 dark:text-error-400 mt-1 text-sm",
  label: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
};
