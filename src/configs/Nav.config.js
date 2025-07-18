import { House,Trophy, Globe, Clapperboard  } from 'lucide-react';

export const NAV_ITEMS = [
    { id: 'nav_home', label: "Home", icon: House, path: '/'},
    { id: 'nav_global', label: "Global", icon: Globe, path: '/global-news'},
    { id: 'nav_sports', label: "Sports", icon: Trophy, path: '/sports-news'},
    { id: 'nav_entertain', label: "Entertainment", icon: Clapperboard, path: '/entertianment-news'},
]