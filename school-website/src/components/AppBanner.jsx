import { Link } from 'react-router-dom'
import { PhoneIcon } from './Icons'

// Top strip shown on mobile only.
export default function AppBanner() {
  return (
    <div className="lg:hidden bg-gradient-to-r from-navy-dark to-navy text-white">
      <div className="flex h-10 items-center justify-between px-5 text-[12px]">
        <span className="flex items-center gap-2 font-medium">
          <PhoneIcon className="h-4 w-4" />
          Download Our School App
        </span>
        <Link to="/#app" className="font-semibold text-gold">
          Install &rsaquo;
        </Link>
      </div>
    </div>
  )
}
