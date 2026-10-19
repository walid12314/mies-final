import { Link } from 'react-router-dom'
import Button from '../Button'
import { hero } from '../../data/siteConfig'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[480px] overflow-hidden bg-black sm:h-[540px] lg:h-[680px]"
    >
      {/* Background video */}
      <video
     className="absolute inset-0 h-full w-full object-cover object-[35%_50%] lg:object-center"
        src="/images/hh.mp4"
        poster={hero.image}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Subtle black overlay */}
      {/* Blue gradient from left */}
<div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/60 to-transparent" />

      {/* Hero content */}
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 py-8 lg:px-24">
        <span className="mb-5 block h-1 w-[30px] rounded-full bg-gold lg:mb-6 lg:w-14" />

        <h1 className="max-w-[280px] text-[28px] font-bold leading-[1.15] tracking-tight text-white sm:max-w-[520px] sm:text-[40px] lg:max-w-[705px] lg:text-[68px] lg:leading-[1.12]">
          {hero.title}
        </h1>

        <p className="mt-4 max-w-[330px] text-[15px] leading-[1.55] text-white/90 sm:max-w-[480px] lg:mt-6 lg:max-w-[560px] lg:text-lg">
          {hero.text}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-8">
          <Button
            as={Link}
            to={hero.primaryCta.href}
            variant="light"
            size="lg"
            className="w-full sm:w-auto"
          >
            {hero.primaryCta.label}
          </Button>

          <Button
            href={hero.secondaryCta.href}
            variant="ghost"
            size="lg"
            className="w-full bg-transparent sm:w-auto"
          >
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}