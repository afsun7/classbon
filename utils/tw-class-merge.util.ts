import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const twClassMerge = (...classes: ClassValue[]) => twMerge(clsx(classes))
