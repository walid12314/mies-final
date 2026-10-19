import Section from '../Section'

const GOLD = '#F5B400'
const NAVY = '#1E2A78'

const columns = [
  [
    { src: '/images/a12.png', alt: 'Welcome Back to School craft', flex: 33 },
    { src: '/images/a13.png', alt: 'Student holding a jar with a plant', flex: 21 },
  ],
  [
    { src: '/images/a14.png', alt: 'Students with smiley wristbands', flex: 23 },
    { src: '/images/a15.png', alt: 'Teachers at a table', flex: 31 },
  ],
  [
    { src: '/images/a16.png', alt: 'Clay fruits and vegetables', flex: 30 },
    { src: '/images/a17.png', alt: 'Student writing on a sheet', flex: 25 },
  ],
  [
    { src: '/images/a18.png', alt: 'Students with painted hands', flex: 20 },
    { src: '/images/a19.png', alt: 'Student giving a speech', flex: 34 },
  ],
]

function GalleryPhoto({ src, alt, flex, onClick }) {
  return (
    <div
      className="min-h-0 min-w-0 overflow-hidden"
      style={{ flex: `${flex} 1 0%` }}
    >
      <button
        type="button"
        onClick={() => onClick({ src, alt })}
        aria-label={`View ${alt}`}
        className="group block h-full w-full cursor-zoom-in border-0 bg-transparent p-0 text-left outline-none"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block h-full w-full border-0 object-cover outline-none transition-[filter] duration-300 group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.7)] group-focus-visible:drop-shadow-[0_0_14px_rgba(59,130,246,0.7)]"
        />
      </button>
    </div>
  )
}

export default function LifeAtSchool({ onSelectImage }) {
  return (
    <Section id="life-at-school">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span
          className="mx-auto mb-3 block h-[3px] w-8 rounded-full"
          style={{ background: GOLD }}
        />

        <h2 className="text-3xl font-bold text-ink lg:text-4xl">
          Life at Our School
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
          Explore the moments, memories and experiences that make our school
          community special.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-0 lg:grid-cols-4">
          {columns.map((col, i) => (
            <div
              key={i}
              className="flex h-[340px] min-w-0 flex-col gap-0 lg:h-[430px]"
            >
              {col.map((img) => (
                <GalleryPhoto
                  key={img.src}
                  {...img}
                  onClick={onSelectImage}
                />
              ))}
            </div>
          ))}
        </div>

        <a
          href="/gallery"
          className="mt-10 inline-flex items-center rounded-lg border bg-white px-8 py-2.5 text-xs font-semibold transition hover:bg-slate-50"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          View All Gallery <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  )
}