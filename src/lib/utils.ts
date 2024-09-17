import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CDN_URI = (path: string) => process.env.NEXT_PUBLIC_CDN_URI + path;
