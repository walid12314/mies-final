import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons'
import { navLinks } from '../data/siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const { pathname } = useLocation()

  // Close the mobile menu after choosing a page
  const handleNavClick = () => setOpen(false)

  // Highlight the link that matches the current page
  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white lg:inset-x-10 lg:top-6 lg:rounded-2xl lg:shadow-[0_8px_30px_rgba(15,14,69,0.18)]">
      <div className="flex h-16 items-center justify-between px-5 lg:h-[76px] lg:px-5">
        <Logo />

        {/* Desktop links */}
        <nav
          className="hidden items-center gap-[26px] lg:ml-auto lg:mr-6 lg:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={handleNavClick}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`relative py-2 text-[13px] font-medium transition-colors hover:text-navy ${
                isActive(link.href) ? 'text-navy' : 'text-ink'
              }`}
            >
              {link.label}

              {isActive(link.href) && (
                <span className="absolute inset-x-0 -bottom-[14px] h-[3px] rounded-full bg-navy" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            as={Link}
            to="/#app"
            variant="outline"
            size="md"
            className="!bg-navy !text-white transition-colors hover:!bg-white hover:!text-navy"
          >
            <PhoneIcon className="h-4 w-4" />
            Download Our App
          </Button>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button as={Link} to="/contact" variant="primary" size="sm">
            Contact Us
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="relative z-[60] text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          className="absolute inset-x-0 top-full z-50 border-t border-gray-100 bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden"
          aria-label="Mobile"
        >
          <ul className="divide-y divide-gray-100">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={handleNavClick}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`block py-3 text-[15px] font-medium transition-colors hover:text-navy ${
                    isActive(link.href) ? 'text-navy' : 'text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            as={Link}
            to="/#app"
            variant="outline"
            size="lg"
            className="mt-3 w-full !bg-navy !text-white transition-colors hover:!bg-white hover:!text-navy"
          >
            <PhoneIcon className="h-4 w-4" />
            Download Our App
          </Button>
        </nav>
      )}
    </header>
  )
}