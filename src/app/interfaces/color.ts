export interface Color {
    selected?: boolean
    level?: string|'primary'|'secondary'|'tertiary'
    hex: string
    red?: number
    green?: number
    blue?: number
    area?: number
    hue?: number
    saturation?: number
    lightness?: number
    intensity?: number
  }
  