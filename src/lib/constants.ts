export type NavItem = 'dashboard' | 'vision-map' | 'goals' | 'roadmap' | 'accounts'

export const NAV_ITEMS: { id: NavItem; label: string; path: string }[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/' },
  { id: 'vision-map', label: 'Vision Map', path: '/vision-map' },
  { id: 'goals', label: 'Goals', path: '/goals' },
  { id: 'roadmap', label: 'Roadmap', path: '/roadmap' },
  { id: 'accounts', label: 'Accounts', path: '/accounts' },
]

export const THRIVE_LOGO = '/assets/thrive-logo.png'
export const THRIVE_CARD = '/assets/thrive-card.png'
