// Gold bar + eyebrow + title + text — same heading style as the home sections.
export default function Heading({ eyebrow, title, text, align = 'left', light = false, className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-[640px] ${className}`}>
      <span className={`block h-[3px] w-8 rounded-full bg-gold ${center ? 'mx-auto' : ''}`} />
      {eyebrow && (
        <p
          className={`mt-3 text-[11px] font-semibold uppercase tracking-wide ${
            light ? 'text-gold' : 'text-navy'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold leading-[1.15] lg:text-[40px] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-[15px] leading-[1.75] ${light ? 'text-white/80' : 'text-slate-500'}`}
        >
          {text}
        </p>
      )}
    </div>
  )
}
