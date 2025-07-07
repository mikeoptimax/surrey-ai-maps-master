import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and applies Tailwind's merge utility
 * @param inputs - Array of class values to be combined
 * @returns A string of combined and optimized class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a monetary amount to a currency string
 * @param amount - The amount to format
 * @param currency - Currency code (defaults to GBP)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = "GBP"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(amount)
}

/**
 * Checks if the code is running in a browser environment
 */
export const isBrowser = typeof window !== "undefined"