import { useState } from 'react'
import PageHeader from '../components/page/PageHeader'
import Block from '../components/page/Block'
import Heading from '../components/page/Heading'
import Icon from '../components/page/Icon'

const NAVY = '#1E2A78'

const posts = [
  { src: '/images/a20.png', date: '12 Mar 2026', tag: 'Sports', title: 'Annual Sports Day', text: 'Students showcased their talent, teamwork and sportsmanship during our annual sports event.' },
  { src: '/images/a21.png', date: '28 Feb 2026', tag: 'Community', title: 'Parent-Teacher Meeting', text: 'An opportunity for parents and teachers to connect and discuss student progress.' },
  { src: '/images/a22.png', date: '15 Feb 2026', tag: 'Events', title: 'Annual School Function', text: 'Celebrating the achievements, creativity and talent of our students.' },
  { src: '/images/a23.png', date: '30 Jan 2026', tag: 'Academics', title: 'Academic Achievement', text: 'Celebrating another excellent performance by our students.' },
  { src: '/images/a22.png', date: '18 Jan 2026', tag: 'Events', title: 'Winter Art Exhibition', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.' },
  { src: '/images/a20.png', date: '05 Jan 2026', tag: 'Sports', title: 'Inter-School Cricket Trophy', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
  { src: '/images/a23.png', date: '20 Dec 2025', tag: 'Academics', title: 'Science Fair Winners', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  { src: '/images/a21.png', date: '02 Dec 2025', tag: 'Community', title: 'Charity Drive Update', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
]

const events = [
  { d: '24', m: 'Oct', title: 'Parent Orientation Day', meta: '10:00 AM · Main Hall' },
  { d: '05', m: 'Nov', title: 'Mid-Term Examinations Begin', meta: 'All classes' },
  { d: '14', m: 'Nov', title: 'Annual Science Exhibition', meta: '09:00 AM · School Ground' },
  { d: '02', m: 'Dec', title: 'Sports Week', meta: 'All week · Playground' },
]

const tabs = ['All', 'Sports', 'Community', 'Events', 'Academics']

export default function NewsEvents() {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? posts : posts.filter((p) => p.tag === tab)

  return (
    <>
      <PageHeader
        title="News & Events"
        text="Stay connected with everything happening across our school community."
      />

      {/* ---------- Featured ---------- */}
      <Block>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img src="/images/a22.png" alt="Annual School Function" className="block h-auto w-full" />
          <div className="max-w-xl">
            <Heading eyebrow="Featured Story" title="Annual School Function Celebrates Student Talent" />
            <div className="mt-5 flex items-center gap-3 text-[12px] text-slate-500">
              <span>15 Feb 2026</span>
              <span className="rounded-full bg-[#E8ECFA] px-3 py-1 text-[10px] font-semibold" style={{ color: NAVY }}>Events</span>
            </div>
            <p className="mt-5 text-[15px] leading-[1.75] text-[#3d4160]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </p>
            <a href="#latest" className="mt-7 inline-flex h-12 items-center gap-2 rounded-xl bg-navy px-7 text-[14px] font-semibold text-white transition-colors hover:bg-navy-dark">
              Read Full Story <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Block>

      {/* ---------- Latest news with filter ---------- */}
      <Block id="latest" tone="soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow="Latest News" title="From Our School Community" />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter news">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-colors ${
                  tab === t ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-[#E8ECFA]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((n) => (
            <article key={n.title}>
              <img src={n.src} alt={n.title} loading="lazy" className="block h-auto w-full" />
              <div className="px-1">
                <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
                  <span>{n.date}</span>
                  <span className="rounded-full bg-[#E8ECFA] px-3 py-1 text-[10px] font-semibold" style={{ color: NAVY }}>{n.tag}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{n.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{n.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: NAVY }}>
                  Read More <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Upcoming events + newsletter ---------- */}
      <Block>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Heading eyebrow="Calendar" title="Upcoming Events" />
            <ul className="mt-8 space-y-4">
              {events.map((e) => (
                <li key={e.title} className="flex items-center gap-5 rounded-2xl bg-white p-4 shadow-[0_6px_20px_rgba(20,23,46,0.08)]">
                  <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
                    <span className="text-xl font-bold leading-none text-gold">{e.d}</span>
                    <span className="mt-1 text-[10px] font-semibold uppercase">{e.m}</span>
                  </span>
                  <div>
                    <p className="text-[16px] font-bold text-ink">{e.title}</p>
                    <p className="mt-1 flex items-center gap-2 text-[12px] text-slate-500">
                      <Icon name="clock" className="h-3.5 w-3.5" /> {e.meta}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start rounded-2xl bg-navy p-8 lg:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy">
              <Icon name="mail" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-white">Get School Updates</h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-3">
              <input type="email" placeholder="Your email address" aria-label="Email address" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/50 focus:border-gold" />
              <button type="submit" className="h-12 w-full rounded-xl bg-gold text-[14px] font-bold text-navy transition hover:brightness-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Block>
    </>
  )
}
