// Shared wrapper for the placeholder sections.
export default function Section({ id, tone = 'white', children }) {
  const bg = tone === 'soft' ? 'bg-slate-50' : 'bg-white'

  return (
    <section id={id} className={`${bg} px-5 py-24 lg:px-24`}>
      <div className="mx-auto flex min-h-[40vh] max-w-[1440px] flex-col justify-center">
        {children}
      </div>
    </section>
  )
}