import { useCallback, useState } from 'react'
import PageHeader from '../components/page/PageHeader'
import Block from '../components/page/Block'
import Heading from '../components/page/Heading'
import CtaBand from '../components/page/CtaBand'
import Icon from '../components/page/Icon'
import ImageModal from '../components/home/ImageModal'

const activities = [
  { icon: 'ball', title: 'Sports & Games', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
  { icon: 'palette', title: 'Art & Craft', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { icon: 'mic', title: 'Public Speaking', text: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
  { icon: 'flask', title: 'Science Club', text: 'Excepteur sint occaecat cupidatat non proident sunt in culpa.' },
  { icon: 'music', title: 'Music & Nasheed', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
  { icon: 'users', title: 'Scouts & Leadership', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.' },
]

const gallery = [
  { src: '/images/a12.png', alt: 'Welcome Back to School craft' },
  { src: '/images/a14.png', alt: 'Students with smiley wristbands' },
  { src: '/images/a16.png', alt: 'Clay fruits and vegetables' },
  { src: '/images/a18.png', alt: 'Students with painted hands' },
  { src: '/images/a13.png', alt: 'Student holding a jar with a plant' },
  { src: '/images/a15.png', alt: 'Teachers at a table' },
  { src: '/images/a17.png', alt: 'Student writing on a sheet' },
  { src: '/images/a19.png', alt: 'Student giving a speech' },
]

const facilities = [
  { icon: 'library', title: 'Library' },
  { icon: 'flask', title: 'Science Labs' },
  { icon: 'laptop', title: 'Computer Lab' },
  { icon: 'ball', title: 'Playground' },
  { icon: 'bus', title: 'Transport' },
  { icon: 'heart', title: 'Safe Campus' },
]

export default function CampusLife() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <>
      <PageHeader
        title="Campus Life"
        text="Moments, memories and experiences that make our school community special."
      />

      {/* ---------- Intro + highlight image ---------- */}
      <Block>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <Heading eyebrow="Beyond The Classroom" title="Life at MIES Is Full of Discovery" />
            <p className="mt-6 text-[16px] leading-[1.75] text-[#3d4160]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <p className="mt-5 text-[14px] leading-[1.75] text-[#6b6f8d]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <span className="absolute -left-3 top-10 h-16 w-10 bg-navy" />
            <span className="absolute -right-3 bottom-12 h-[18px] w-12 bg-[#f0b90b]" />
            <img src="/images/a22.png" alt="Annual school function" className="relative block h-auto w-full" />
          </div>
        </div>
      </Block>

      {/* ---------- Activities ---------- */}
      <Block tone="soft">
        <Heading align="center" eyebrow="Clubs & Activities" title="Something For Every Student" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl bg-white p-7 shadow-[0_8px_24px_rgba(20,23,46,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,23,46,0.14)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={a.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{a.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">{a.text}</p>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Gallery ---------- */}
      <Block>
        <Heading align="center" eyebrow="Gallery" title="Moments We Love" text="Tap any photo to view it full size." />
        <div className="mt-12 columns-2 gap-4 lg:columns-4">
          {gallery.map((g) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setSelected(g)}
              aria-label={`View ${g.alt}`}
              className="group mb-4 block w-full cursor-zoom-in break-inside-avoid border-0 bg-transparent p-0 outline-none"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="block h-auto w-full transition-[filter] duration-300 group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.7)] group-focus-visible:drop-shadow-[0_0_14px_rgba(59,130,246,0.7)]"
              />
            </button>
          ))}
        </div>
      </Block>

      {/* ---------- Facilities ---------- */}
      <section className="bg-navy px-5 py-16 lg:px-24 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <Heading align="center" light eyebrow="Facilities" title="A Campus Built For Learning" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {facilities.map((f) => (
              <div key={f.title} className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-4 py-8 text-center transition hover:bg-white/10">
                <span className="text-gold"><Icon name={f.icon} className="h-9 w-9" /></span>
                <p className="mt-4 text-[14px] font-semibold text-white">{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <ImageModal image={selected} onClose={close} />
    </>
  )
}
