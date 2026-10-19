import { Link } from 'react-router-dom'
import { school } from '../data/siteConfig'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${school.name} home`}>
      <img src={school.logo} alt={`${school.name} logo`} className="h-10 w-auto object-contain lg:h-11" />
      <span className="leading-tight">
        <span className="block text-[15px] font-bold text-ink">{school.name}</span>
        <span className="hidden text-[11px] font-medium text-navy/70 sm:block">
          {school.location}
        </span>
      </span>
    </Link>
  )
}
