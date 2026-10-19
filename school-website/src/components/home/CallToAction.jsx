import { Link } from 'react-router-dom'

const GOLD = '#F5B400'
const NAVY = '#1E2A78'

export default function CallToAction() {
  return (
    <section className="px-4 py-14 text-center lg:py-16" style={{ background: NAVY }}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold leading-tight text-white lg:text-[44px]">
          Give Your Child a Strong Start to a Bright Future
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
          Join a learning community where students are encouraged to learn, explore, achieve and
          become their best selves.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/admissions"
            className="rounded-xl px-8 py-3.5 text-sm font-bold transition hover:brightness-95"
            style={{ background: GOLD, color: NAVY }}
          >
            Apply for Admission
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
