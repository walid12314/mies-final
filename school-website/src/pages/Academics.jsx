import { Link } from 'react-router-dom'
import PageHeader from '../components/page/PageHeader'
import Block from '../components/page/Block'
import Heading from '../components/page/Heading'
import CtaBand from '../components/page/CtaBand'
import Icon from '../components/page/Icon'

// Framed PNGs: zoom in and crop the baked-in white frame (same trick as the home page).
function Photo({ src, alt, ratio }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(20,23,46,0.12)] ${ratio}`}>
      <img src={src} alt={alt} className="absolute left-0 top-0 block h-auto max-w-none" style={{ width: '121%', marginLeft: '-10%', marginTop: '-6.6%' }} />
    </div>
  )
}

const levels = [
  { img: '/images/a5.png', tag: 'Ages 3 – 5', title: 'Early Years', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.' },
  { img: '/images/a9.png', tag: 'Grades 1 – 5', title: 'Primary School', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
  { img: '/images/a6.png', tag: 'Grades 6 – 8', title: 'Middle School', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  { img: '/images/a7.png', tag: 'Grades 9', title: 'Secondary School', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
]

const subjects = [
  { icon: 'book', name: 'English' },
  { icon: 'library', name: 'Urdu & Islamiat' },
  { icon: 'target', name: 'Mathematics' },
  { icon: 'flask', name: 'Science' },
  { icon: 'laptop', name: 'Computer Science' },
  { icon: 'palette', name: 'Art & Craft' },
  { icon: 'ball', name: 'Physical Education' },
  { icon: 'users', name: 'Social Studies' },
]

const steps = [
  { no: '01', title: 'Learn', text: 'Curiosity that leads to discovery. Lorem ipsum dolor sit amet consectetur.' },
  { no: '02', title: 'Grow', text: 'Confidence built through experience. Sed do eiusmod tempor incididunt.' },
  { no: '03', title: 'Achieve', text: 'Turning effort into meaningful success. Ut enim ad minim veniam.' },
]

export default function Academics() {
  return (
    <>
      <PageHeader
        title="Academics"
        text="Learning happens everywhere — in classrooms, on the playground and through experiences that shape every student."
      />

      {/* ---------- Programs ---------- */}
      <Block>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow="Our Programs" title="A Path for Every Stage of Learning" />
          <p className="max-w-[360px] text-[13px] leading-[1.75] text-[#6b6f8d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => (
            <article
              key={l.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(20,23,46,0.10)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,23,46,0.16)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.title} className="absolute inset-0 h-full w-full scale-[1.22] object-cover transition-transform duration-500 group-hover:scale-[1.3]" />
              </div>
              <div className="p-5">
                <div className="border-l-2 border-gold pl-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{l.tag}</p>
                  <h3 className="mt-1 text-[20px] font-bold leading-tight text-navy">{l.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.6] text-slate-500">{l.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Learn / Grow / Achieve ---------- */}
      <Block tone="soft">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-[18px]">
            <div className="flex flex-col gap-[18px]">
              <Photo src="/images/a10.png" alt="Girl with flag" ratio="aspect-[165/127]" />
              <Photo src="/images/a8.png" alt="Students in camouflage uniforms" ratio="aspect-[165/91]" />
            </div>
            <div className="mt-8 flex flex-col gap-[18px]">
              <Photo src="/images/a11.png" alt="Boy painting a leaf" ratio="aspect-[165/69]" />
              <Photo src="/images/a6.png" alt="Student speaking on the microphone" ratio="aspect-[165/115]" />
            </div>
          </div>

          <div>
            <Heading eyebrow="Our Approach" title="Learn, Grow, Achieve" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
            <ol className="mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.no} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-bold text-gold">
                    {s.no}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.7] text-slate-500">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Block>

      {/* ---------- Subjects ---------- */}
      <Block>
        <Heading align="center" eyebrow="Curriculum" title="Subjects We Teach" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-8 text-center transition hover:border-navy hover:shadow-[0_10px_26px_rgba(31,29,122,0.12)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
                <Icon name={s.icon} />
              </span>
              <p className="mt-4 text-[14px] font-semibold text-ink">{s.name}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Highlight ---------- */}
      <section className="bg-navy px-5 py-14 lg:px-24 lg:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-[640px] text-center lg:text-left">
            <span className="mx-auto block h-[3px] w-8 rounded-full bg-gold lg:mx-0" />
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-[38px]">
              Outstanding Results in Mardan Board
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Link to="/admissions" className="inline-flex h-14 items-center gap-2 whitespace-nowrap rounded-xl bg-white px-8 text-[15px] font-semibold text-navy transition-colors hover:bg-gray-100">
            Join Our School <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
