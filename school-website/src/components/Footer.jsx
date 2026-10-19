import { Link } from 'react-router-dom'

const navColumns = [
  [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
  ],
  [
    { label: 'Campus Life', href: '/campus-life' },
    { label: 'Gallery', href: '/#life-at-school' },
    { label: 'News & Events', href: '/news-events' },
    { label: 'Contact', href: '/contact' },
  ],
]

const socials = [
  { label: 'Facebook', short: 'f', href: '#' },
  { label: 'Instagram', short: 'Ig', href: '#' },
  { label: 'YouTube', short: 'Yt', href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0e45] text-white">
      <div className="mx-auto max-w-[1100px] px-5 pb-8 pt-12 lg:px-0 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1.4fr_1.1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="MIES Mardan"
              className="h-[46px] w-auto"
            />
            <p className="mt-5 max-w-[260px] text-[12px] leading-[1.9] text-white/70">
              A trusted school in Mardan, committed to shaping bright minds and
              building better futures through quality education and strong
              character.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#f5b800]">
              Navigation
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-6">
              {navColumns.map((col, i) => (
                <ul key={i} className="space-y-3">
                  {col.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[12px] text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#f5b800]">
              Contact Information
            </h3>
            <div className="mt-4 space-y-3 text-[12px] leading-[1.6] text-white/80">
              <p>
                [School Address], Mardan,
                <br />
                Khyber Pakhtunkhwa, Pakistan
              </p>
              <p>+92 [000] [0000000]</p>
              <p>info@[schoolname].edu.pk</p>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#f5b800]">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-[29px] w-[29px] items-center justify-center rounded-full border border-white/40 text-[10px] font-bold text-white transition-colors hover:bg-white hover:text-[#0f0e45]"
                >
                  {s.short}
                </a>
              ))}
            </div>

            <Link
              to="/#app"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#f5b800] px-5 py-2.5 text-[12px] font-bold text-[#0f0e45] transition-opacity hover:opacity-90"
            >
              Download Our App
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 border-t border-white/10 pt-6 text-[11px] text-white/60">
          © 2026 [School Name]. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}