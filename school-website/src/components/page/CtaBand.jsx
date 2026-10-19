import { Link } from 'react-router-dom'

// Navy call-to-action strip (matches the home page CTA).
export default function CtaBand({
  title = 'Give Your Child a Strong Start to a Bright Future',
  text = 'Join a learning community where students are encouraged to learn, explore, achieve and become their best selves.',
}) {
  return (
    <section className="bg-[#1E2A78] px-4 py-14 text-center lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold leading-tight text-white lg:text-[44px]">{title}</h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">{text}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/admissions"
            className="rounded-xl bg-[#F5B400] px-8 py-3.5 text-sm font-bold text-[#1E2A78] transition hover:brightness-95"
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
