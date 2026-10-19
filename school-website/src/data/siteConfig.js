// Change school details and menu links here (each menu link is a page route) — components read from this file.

export const school = {
  name: 'MIES',
  location: 'Mardan, KPK',
  logo: '/images/logo.png',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  title: 'Shaping Bright Minds, Building Better Futures',
  text: 'A place where learning inspires confidence, character and a lifelong passion for success.',
  image: '/images/hero.jpg',
  primaryCta: { label: 'Explore Our School', href: '/about' },
  secondaryCta: { label: 'Watch Our Story', href: '#story' },
}
