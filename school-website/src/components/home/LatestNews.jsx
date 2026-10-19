import { Link } from 'react-router-dom'
import Section from '../Section'

const GOLD = '#F5B400'
const NAVY = '#1E2A78'

const news = [
  {
    src: '/images/a20.png',
    alt: 'Annual Sports Day',
    date: '12 Mar 2026',
    tag: 'Sports',
    title: 'Annual Sports Day',
    text: 'Students showcased their talent, teamwork and sportsmanship during our annual sports event.',
  },
  {
    src: '/images/a21.png',
    alt: 'Parent-Teacher Meeting',
    date: '28 Feb 2026',
    tag: 'Community',
    title: 'Parent-Teacher Meeting',
    text: 'An opportunity for parents and teachers to connect and discuss student progress.',
  },
  {
    src: '/images/a22.png',
    alt: 'Annual School Function',
    date: '15 Feb 2026',
    tag: 'Events',
    title: 'Annual School Function',
    text: 'Celebrating the achievements, creativity and talent of our students.',
  },
  {
    src: '/images/a23.png',
    alt: 'Academic Achievement',
    date: '30 Jan 2026',
    tag: 'Academics',
    title: 'Academic Achievement',
    text: 'Celebrating another excellent performance by our students.',
  },
]

function NewsCard({ src, alt, date, tag, title, text }) {
  return (
    <article>
      {/* PNGs already include their own rounded corners + shadow */}
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full border-0 outline-none" />

      <div className="px-1">
        <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
          <span>{date}</span>
          <span
            className="rounded-full bg-[#E8ECFA] px-3 py-1 text-[10px] font-semibold"
            style={{ color: NAVY }}
          >
            {tag}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-ink">{title}</h3>

        <p className="mt-2 text-xs leading-relaxed text-slate-500">{text}</p>

        <Link
          to="/news-events"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold"
          style={{ color: NAVY }}
        >
          Read More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default function LatestNews() {
  return (
    <Section id="campus-life">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block h-[3px] w-8 rounded-full" style={{ background: GOLD }} />
            <h2 className="text-3xl font-bold text-ink lg:text-[44px] lg:leading-tight">
              Latest News &amp; Events
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
              Stay connected with everything happening across our school community.
            </p>
          </div>

          <Link
            to="/news-events"
            className="inline-flex items-center gap-2 text-xs font-semibold sm:mb-1"
            style={{ color: NAVY }}
          >
            View All News <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Section>
  )
}
