/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError(error: any) { 
  if( error instanceof Error) {
    return {errorMessage: error.message}
  } else {
    return {errorMessage: "An unknown error occurred"}
  }
}