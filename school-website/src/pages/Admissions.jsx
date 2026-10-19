import { Link } from 'react-router-dom'
import PageHeader from '../components/page/PageHeader'
import Block from '../components/page/Block'
import Heading from '../components/page/Heading'
import CtaBand from '../components/page/CtaBand'
import Icon from '../components/page/Icon'

const steps = [
  { icon: 'file', title: 'Submit Inquiry', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: 'calendar', title: 'Campus Visit', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
  { icon: 'book', title: 'Assessment', text: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
  { icon: 'check', title: 'Confirm Admission', text: 'Duis aute irure dolor in reprehenderit in voluptate.' },
]

const requirements = [
  'Completed admission form',
  'Copy of child’s B-Form / birth certificate',
  'Previous school leaving certificate',
  'Last result card / report',
  '4 passport-size photographs',
  'Copy of parent / guardian CNIC',
]

const dates = [
  { date: '01 Jan', title: 'Admissions Open', text: 'Lorem ipsum dolor sit amet.' },
  { date: '15 Mar', title: 'Entrance Assessment', text: 'Consectetur adipiscing elit.' },
  { date: '01 Apr', title: 'Results Announced', text: 'Sed do eiusmod tempor.' },
  { date: '15 Apr', title: 'New Session Starts', text: 'Incididunt ut labore et dolore.' },
]

const faqs = [
  { q: 'What is the admission process?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { q: 'Which classes are open for admission?', a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { q: 'Is a scholarship or fee concession available?', a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
]

const field =
  'mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] text-ink outline-none transition placeholder:text-slate-400 focus:border-navy focus:ring-2 focus:ring-navy/15'

export default function Admissions() {
  return (
    <>
      <PageHeader
        title="Admissions Open"
        text="Give your child the best start. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* ---------- Steps ---------- */}
      <Block>
        <Heading align="center" eyebrow="How To Apply" title="Simple Admission Process" text="Four easy steps to join our school family." />
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-slate-200 lg:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white shadow-[0_8px_20px_rgba(31,29,122,0.3)]">
                <Icon name={s.icon} className="h-7 w-7" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-navy">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-[1.7] text-slate-500">{s.text}</p>
            </div>
          ))}
        </div>
{/* ---------- Video ---------- */}
<div className="relative mx-auto mt-16 max-w-4xl lg:mt-20">
  {/* Decorative offset frame */}
  <span
    aria-hidden="true"
    className="absolute -bottom-3 -right-3 h-full w-full rounded-[28px] bg-gold/30 sm:-bottom-4 sm:-right-4 sm:rounded-[36px]"
  />

  <span
    aria-hidden="true"
    className="absolute -left-3 -top-3 h-24 w-24 rounded-full bg-navy/10 blur-2xl sm:-left-6 sm:-top-6 sm:h-40 sm:w-40"
  />

  <div className="relative overflow-hidden rounded-[24px] bg-navy-dark shadow-[0_20px_50px_rgba(20,23,46,0.25)] ring-4 ring-white sm:rounded-[32px] sm:ring-8">
    <video
      className="aspect-video w-full object-cover"
      src="/images/hhhh.mp4"
      controls
      loop
      playsInline
      preload="metadata"
    />
  </div>
</div>
      </Block>

      {/* ---------- Requirements + dates ---------- */}
      <Block tone="soft">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-[0_8px_24px_rgba(20,23,46,0.08)] lg:p-10">
            <Heading eyebrow="Documents" title="What You Need" />
            <ul className="mt-7 space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[14px] text-[#3d4160]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-navy">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-navy p-8 lg:p-10">
            <Heading eyebrow="Timeline" title="Important Dates" light />
            <ul className="mt-7 divide-y divide-white/10">
              {dates.map((d) => (
                <li key={d.title} className="flex items-center gap-5 py-4">
                  <span className="flex h-14 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gold text-navy">
                    <span className="text-[15px] font-bold leading-none">{d.date.split(' ')[0]}</span>
                    <span className="mt-1 text-[10px] font-semibold uppercase">{d.date.split(' ')[1]}</span>
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-white">{d.title}</p>
                    <p className="text-[12px] text-white/70">{d.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      {/* ---------- Inquiry form ---------- */}
      <Block>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Heading
              eyebrow="Admission Inquiry"
              title="Apply Online Today"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fill in the form and our team will get back to you shortly."
            />
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white"><Icon name="phone" /></span>
                <div>
                  <p className="text-[12px] text-slate-500">Call us</p>
                  <p className="text-[15px] font-semibold text-ink">+92 [000] [0000000]</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white"><Icon name="mail" /></span>
                <div>
                  <p className="text-[12px] text-slate-500">Email us</p>
                  <p className="text-[15px] font-semibold text-ink">info@[schoolname].edu.pk</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white p-6 shadow-[0_12px_36px_rgba(20,23,46,0.12)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[12px] font-semibold text-ink">Student Name
                <input type="text" placeholder="Full name" className={field} />
              </label>
              <label className="text-[12px] font-semibold text-ink">Parent / Guardian
                <input type="text" placeholder="Full name" className={field} />
              </label>
              <label className="text-[12px] font-semibold text-ink">Phone
                <input type="tel" placeholder="+92 000 0000000" className={field} />
              </label>
              <label className="text-[12px] font-semibold text-ink">Email
                <input type="email" placeholder="name@email.com" className={field} />
              </label>
              <label className="text-[12px] font-semibold text-ink sm:col-span-2">Class Applying For
                <select className={field} defaultValue="">
                  <option value="" disabled>Select a class</option>
                  <option>Early Years</option>
                  <option>Primary (1 – 5)</option>
                  <option>Middle (6 – 8)</option>
                  <option>Secondary (9 – 10)</option>
                </select>
              </label>
              <label className="text-[12px] font-semibold text-ink sm:col-span-2">Message
                <textarea rows="4" placeholder="Lorem ipsum dolor sit amet..." className={field} />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex h-[52px] w-full items-center justify-center rounded-xl bg-navy px-8 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark sm:w-auto">
              Submit Inquiry
            </button>
          </form>
        </div>
      </Block>

      {/* ---------- FAQ ---------- */}
      <Block tone="soft">
        <Heading align="center" eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl bg-white p-5 shadow-[0_4px_16px_rgba(20,23,46,0.06)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy">
                {f.q}
                <span className="text-2xl leading-none text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-slate-500">
          Still have questions?{' '}
          <Link to="/contact" className="font-semibold text-navy underline-offset-4 hover:underline">Contact our admissions office</Link>
        </p>
      </Block>

      <CtaBand />
    </>
  )
}