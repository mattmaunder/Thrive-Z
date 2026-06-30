import profileImage from '../../assets/thrivez/profile.jpg'

export const THRIVE_Z = {
  bg: '#f2ffd1',
  maroon: '#64002d',
  pink: '#ff91f2',
  forest: '#0a3c00',
  lime: '#b0fe00',
  link: '#850056',
  profileRing: '#0f5d00',
  white: '#ffffff',
  black: '#000000',
} as const

export const THRIVE_Z_ASSETS = {
  profile: profileImage,
} as const

/** Coin spawn positions from Figma (x within 402px frame). */
export const COIN_POSITIONS = [
  { id: 'c1', left: 241, delay: 0 },
  { id: 'c2', left: 266, delay: 0.15 },
  { id: 'c3', left: 40, delay: 0.3 },
  { id: 'c4', left: 287, delay: 0.45 },
  { id: 'c5', left: 78, delay: 0.6 },
  { id: 'c6', left: 368, delay: 0.75 },
  { id: 'c7', left: 210, delay: 0.9 },
  { id: 'c8', left: 300, delay: 1.05 },
  { id: 'c9', left: 195, delay: 1.2 },
  { id: 'c10', left: 82, delay: 1.35 },
  { id: 'c11', left: 258, delay: 0.2 },
  { id: 'c12', left: 107, delay: 0.5 },
  { id: 'c13', left: 112, delay: 0.8 },
  { id: 'c14', left: 59, delay: 1.1 },
  { id: 'c15', left: 9, delay: 0.35 },
  { id: 'c16', left: 145, delay: 0.65 },
  { id: 'c17', left: 179, delay: 0.95 },
  { id: 'c18', left: 154, delay: 1.25 },
  { id: 'c19', left: 126, delay: 0.55 },
] as const

export const SPENDING_CATEGORIES = [
  { label: 'Travel', amount: '$212', color: '#b0fe00', width: '58%' },
  { label: 'Entertainment', amount: '$56', color: '#56d7ff', width: '13%' },
  { label: 'Food', amount: '$29', color: '#ff91f2', width: '13%' },
  { label: 'Clothes', amount: '$27', color: '#aa8bff', width: '13%' },
] as const

export const GOALS = [
  {
    name: 'Headphones',
    target: '$280.00',
    saved: '$76.50',
    remaining: '$203.50 to go',
    progress: 27,
    progressColor: '#c9109b',
    iconBg: '#ffc6f8',
  },
  {
    name: 'Sneakers',
    target: '$120.00',
    saved: '$100.00',
    remaining: '$20.00 to go',
    progress: 83,
    progressColor: '#7747ff',
    iconBg: '#cebeff',
  },
  {
    name: 'Spring Trip',
    target: '$500.00',
    saved: '$18.20',
    remaining: '$481.80 to go',
    progress: 4,
    progressColor: '#5aba00',
    iconBg: '#d4ff72',
  },
] as const
