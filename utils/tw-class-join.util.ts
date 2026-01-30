import clsx, { ClassValue } from 'clsx'
import { twJoin } from 'tailwind-merge'

export const twClassJoin = (...classes: ClassValue[]) => twJoin(clsx(classes))
