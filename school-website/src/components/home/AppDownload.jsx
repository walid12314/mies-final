import Section from '../Section'
import Button from '../Button'

function GooglePlayIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 3.5v17l14-8.5-14-8.5Z" />
      <path d="M5 3.5 14 12l-9 8.5" />
    </svg>
  )
}

function AppStoreIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3-6 11M12 3l6 11" />
      <path d="M4 18h16" />
      <path d="M8.5 11.5H5M15.5 11.5H19" />
    </svg>
  )
}

function StoreButton({ href, icon, small, label }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg bg-[#10142b] px-5 py-2.5 text-white transition-opacity hover:opacity-90"
    >
      {icon}

      <span className="flex flex-col leading-tight">
        <span className="text-[9px] uppercase tracking-wide text-white/80">
          {small}
        </span>

        <span className="text-[15px] font-semibold">{label}</span>
      </span>
    </a>
  )
}

export default function AppDownload() {
  return (
    <Section id="app">
      <div className="w-full bg-white py-12 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1100px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          {/* Left: text */}
          <div className="lg:max-w-[520px]">
            <span className="mb-5 block h-[3px] w-11 rounded-full bg-[#f5b800]" />

            <h2 className="text-3xl font-bold leading-tight text-ink lg:text-[40px] lg:leading-[1.2]">
              Everything About Your Child&apos;s School, Right at Your Fingertips
            </h2>

            <p className="mt-5 max-w-[400px] text-[15px] leading-relaxed text-ink/70">
              Stay updated with attendance, academic progress, announcements,
              events and important school information through our mobile app.
            </p>

            <div className="mt-7">
              <Button href="#app" variant="primary" size="lg">
                Download Our App
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <StoreButton
                href="#"
                small="Get it on"
                label="Google Play"
                icon={<GooglePlayIcon className="h-6 w-6" />}
              />

              <StoreButton
                href="#"
                small="Download on the"
                label="App Store"
                icon={<AppStoreIcon className="h-6 w-6" />}
              />
            </div>
          </div>

          {/* Right: phones image */}
          <div className="flex justify-center">
            <img
              src="/images/mockup 33.png"
              alt="MIES school app and website on two phones"
              className="-my-6 w-full max-w-[380px] object-contain mix-blend-multiply lg:-my-10 lg:max-w-[460px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}