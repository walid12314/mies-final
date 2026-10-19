import { Link } from 'react-router-dom'
import Section from '../Section'

// Right-side pictures live in /public/images/
// (the images already include their white rounded frame + shadow)
const IMG = {
  robot: '/images/1.png',     // main big picture (boy with AI robot drawing)
  face: '/images/4.png',     // top right (girl with face paint)
  soldiers: '/images/2.png',   // bottom right (kids in uniform)
  star: '/images/3.png',      // bottom left (girl with star crown)
}

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* ---------- LEFT: text ---------- */}
        <div className="max-w-xl">
          <span className="block h-[3px] w-[28px] rounded bg-[#f5b800]" />
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[#1f2a8c]">
            About Our School
          </p>

          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] text-[#14172e] lg:text-[46px]">
            Welcome to Our
            <br />
            School
          </h2>

          <p className="mt-7 text-[16px] leading-[1.75] text-[#3d4160]">
            We believe every child has the potential to achieve extraordinary
            things. Our school provides a nurturing environment where students
            learn, grow, discover their talents and prepare for a successful
            future.
          </p>

          <p className="mt-5 text-[14px] leading-[1.75] text-[#6b6f8d]">
            Dedicated teachers, a disciplined campus and a strong commitment to
            every student — building character alongside academic excellence.
          </p>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#1f2a8c] px-[19px] py-[13px] text-[14px] font-semibold text-white transition hover:bg-[#161f6e]"
          >
            Discover More About Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ---------- RIGHT: collage (relative parent, absolute children) ---------- */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[430px] w-[505px] origin-top max-[560px]:h-[300px] max-[560px]:w-[350px] max-[560px]:scale-[0.69] max-[560px]:[margin-bottom:-130px]">
            {/* decorative blocks */}
            <span className="absolute left-[12px] top-[240px] h-[62px] w-[43px] bg-[#1f2a8c]" />
            <span className="absolute left-[413px] top-[188px] h-[18px] w-[50px] bg-[#f0b90b]" />

            {/* main picture */}
            <img
              src={IMG.robot}
              alt="Student showing an AI robot drawing"
              className="absolute left-[40px] top-[22px] z-10 h-[360px] w-[300px] object-contain"
            />

            {/* top right */}
            <img
              src={IMG.face}
              alt="Student with face paint"
              className="absolute left-[292px] top-[-6px] z-20 h-[220px] w-[220px] object-contain"
            />

            {/* bottom right */}
            <img
              src={IMG.soldiers}
              alt="Students in uniform at a school event"
              className="absolute left-[215px] top-[195px] z-20 h-[240px] w-[290px] object-contain"
            />

            {/* bottom left */}
            <img
              src={IMG.star}
              alt="Smiling student wearing a star crown"
              className="absolute left-[-12px] top-[290px] z-30 h-[160px] w-[210px] object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
