import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const navColumns = [
  [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
  ],
  [
    { label: "Campus Life", href: "/campus-life" },
    { label: "Gallery", href: "/#life-at-school" },
    { label: "News & Events", href: "/news-events" },
    { label: "Contact", href: "/contact" },
  ],
];

const socials = [
  {
    label: "Facebook",
    Icon: FaFacebookF,
    href: "https://www.facebook.com/joinmies",
  },
  {
    label: "TikTok",
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@mies_school",
  },
  {
    label: "YouTube",
    Icon: FaYoutube,
    href: "https://www.youtube.com/@miesschoolmardan",
  },
];

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
                Bagh-e-Irum Road, Mardan,
                <br />
                Khyber Pakhtunkhwa, Pakistan
              </p>
              <p>+(0937) 866646</p>
              {/* Add the official school email here when available. */}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#f5b800]">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit MIES Mardan on ${label}`}
                  title={label}
                  className="flex h-[29px] w-[29px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#0f0e45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b800]"
                >
                  <Icon size={15} aria-hidden="true" />
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
          © {new Date().getFullYear()} MIES Mardan. All Rights Reserved.
          Developed By{" "}
          <a
            href="https://aisystems.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-yellow-700"
          >
            aisystems.pk
          </a>
        </div>
      </div>
    </footer>
  );
}
