import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const basePath = process.env.NODE_ENV === 'production' ? '/deye-inverter-website-redesign' : ''

export function getAssetPath(path: string): string {
  if (path.startsWith('/')) {
    return `${basePath}${path}`
  }
  return path
}
