import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

//For merging classes conditionally
export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};


// For creating unique ids
export const generateUniqueId = (): string => uuidv4();

