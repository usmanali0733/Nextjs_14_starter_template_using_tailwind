import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

//For merging classes conditionally
export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};


// For creating unique ids
export const generateUniqueId = (): string => uuidv4();

// Helper to generate random dark color
export const generateDarkColorHex = (): string => {
  const randomHex = () =>
    Math.floor(Math.random() * 128)
      .toString(16)
      .padStart(2, '0');
  const r = randomHex(); // Generate a random value between 0 and 127 for red
  const g = randomHex(); // Generate a random value between 0 and 127 for green
  const b = randomHex(); // Generate a random value between 0 and 127 for blue

  return `#${r}${g}${b}`;
};
