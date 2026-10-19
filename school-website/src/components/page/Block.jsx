// Standard section wrapper for inner pages. tone: 'white' | 'soft' | 'navy'
export default function Block({ id, tone = 'white', className = '', children }) {
  const bg = { white: 'bg-white', soft: 'bg-slate-50', navy: 'bg-navy' }[tone]
  return (
    <section id={id} className={`${bg} px-5 py-16 lg:px-24 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  )
}
