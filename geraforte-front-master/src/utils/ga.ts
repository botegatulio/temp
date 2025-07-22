// src/utils/ga.ts

export const pageview = (_url?: string): void => {}

type Event = {
  category: string
  action: string
  label?: string
  value?: number
}

export const gaEvent = (_event: Event): void => {}
