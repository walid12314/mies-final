import { Link } from 'react-router-dom'
import { hero } from '../../data/siteConfig'

// Top banner shared by every inner page (same navy + photo look as the home hero).
export default function PageHeader({ title, text, crumb }) {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[35%_60%] lg:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/85 to-navy-deep lg:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-navy-dark/95 via-navy/75 to-navy/30 lg:block" />
      <div className="absolute inset-0 hidden bg-gradient-to-b from-navy/50 via-transparent to-transparent lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-28 lg:px-24 lg:pb-24 lg:pt-[190px]">
        <nav aria-label="Breadcrumb" className="text-[12px] font-medium text-white/70">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-gold">{crumb || title}</span>
        </nav>

        <span className="mb-5 mt-6 block h-1 w-[30px] rounded-full bg-gold lg:w-14" />

        <h1 className="max-w-[720px] text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px] lg:text-[60px] lg:leading-[1.1]">
          {title}
        </h1>

        {text && (
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.6] text-white/90 lg:mt-6 lg:text-lg">
            {text}
          </p>
        )}
      </div>
    </section>
  )
}
