import { useState } from 'react'
import PageHeader from '../components/page/PageHeader'
import Block from '../components/page/Block'
import Heading from '../components/page/Heading'
import CtaBand from '../components/page/CtaBand'
import Icon from '../components/page/Icon'

const values = [
  { icon: 'target', title: 'Our Mission', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: 'eye', title: 'Our Vision', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { icon: 'heart', title: 'Our Values', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
]

const stats = [
  { n: '25+', label: 'Years of Excellence' },
  { n: '1,200+', label: 'Happy Students' },
  { n: '80+', label: 'Dedicated Teachers' },
  { n: '98%', label: 'Success Rate' },
]

const pillars = [
  { icon: 'book', title: 'Quality Learning', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
  { icon: 'users', title: 'Caring Community', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
  { icon: 'star', title: 'Strong Character', text: 'Ut enim ad minim veniam quis nostrud exercitation.' },
  { icon: 'flask', title: 'Modern Facilities', text: 'Duis aute irure dolor in reprehenderit in voluptate.' },
]

const principalMessage = `True education releases capacities, develops analytical abilities, confidence, will, and goal-setting competencies, and instills the vision serving the best interests of the community...!!

It is my pleasure and privilege to serve as the Director of Mardan International Education System not only because it is my passion but also because I enjoy the company of my dearly loved students and talented, zealous teachers and Supporting Staff who keep me energized all the time. MIES is not just ONE More school in the already long list of educational institutions in the Mardan City , but it is ONE school which has made a great difference in its Qualitative journey of Over past years. Our children represent our hopes and dreams. As a parent, you certainly want the best for your child and we are indeed happy to be working with you to ensure that they are given the right knowledge to face future challenges. The Management, Parents, Students and the Teaching Fraternity are a team and complement each other's efforts. Education is not just a process of giving knowledge for a high profiled job but a lifelong process which creates an understanding of moral and ethical values to guide and make our students morally upright citizens of the country. We try to create an atmosphere of reverence for education and a healthy environment where academics , sports and co-curricular Facilities mould our students and motivate them to be the brightest and the best. In order to do this, the school works towards inculcating certain values in the students in order to enrich their mind and spirit and also to develop essential moral attributes like truthfulness, courtesy, generosity, compassion, justice, love and trustworthiness in them. The students are taught to study in an atmosphere of love and unity where each student sees himself or herself as a member of one global family, free from the prejudices of ethnicities, nationalities, class and religious dogmas "If a plant is carefully nurtured by a gardener, it will become good, and produce better fruit. Therefore, children must be given a good training from their earliest childhood". This is what we at MIES are striving to do, Our role is identical to that of a gardener and we strive to perform this role to the best of our ability by nurturing these "seeds" at school so that they bear the " Best Fruits " in the years to come. I am very grateful to each and every member of the MIES Fraternity Our Staff who know very well how to synchronize and harmonize with our process of growth. Our Students who constantly show by their performance and conduct that it makes a difference to be a student of MIES; and last but not the least Our Parents whose trust inspires us to move ahead ...!!.`

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <PageHeader
        title="About Our School"
        crumb="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A place where learning inspires confidence and character."
      />

      {/* ---------- Our story ---------- */}
      <Block className="overflow-x-clip">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <Heading
              eyebrow="Our Story"
              title="A Legacy of Learning, Growing Every Year"
            />
            <p className="mt-6 text-[16px] leading-[1.75] text-[#3d4160]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-5 text-[14px] leading-[1.75] text-[#6b6f8d]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>

            <ul className="mt-7 grid gap-3 text-[14px] text-ink sm:grid-cols-2">
              {['Experienced teachers', 'Disciplined campus', 'Safe environment', 'Modern curriculum'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-navy">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* collage — same construction as the home About section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[430px] w-[505px] origin-top max-[560px]:h-[300px] max-[560px]:w-[350px] max-[560px]:scale-[0.69] max-[560px]:[margin-bottom:-130px]">
              <span className="absolute left-[12px] top-[240px] h-[62px] w-[43px] bg-[#1f2a8c]" />
              <span className="absolute left-[413px] top-[188px] h-[18px] w-[50px] bg-[#f0b90b]" />
              <img src="/images/1.png" alt="Student showing an AI robot drawing" className="absolute left-[40px] top-[22px] z-10 h-[360px] w-[300px] object-contain" />
              <img src="/images/4.png" alt="Student with face paint" className="absolute left-[292px] top-[-6px] z-20 h-[220px] w-[220px] object-contain" />
              <img src="/images/2.png" alt="Students in uniform at a school event" className="absolute left-[215px] top-[195px] z-20 h-[240px] w-[290px] object-contain" />
              <img src="/images/3.png" alt="Smiling student wearing a star crown" className="absolute left-[-12px] top-[290px] z-30 h-[160px] w-[210px] object-contain" />
            </div>
          </div>
        </div>
      </Block>

      {/* ---------- Mission / Vision / Values ---------- */}
      <Block tone="soft">
        <Heading
          align="center"
          eyebrow="What Guides Us"
          title="Mission, Vision & Values"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl bg-white p-8 shadow-[0_8px_24px_rgba(20,23,46,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,23,46,0.14)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={v.icon} />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy">{v.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-slate-500">{v.text}</p>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Stats ---------- */}
      <section className="bg-navy px-5 py-14 lg:px-24 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-gold lg:text-5xl">{s.n}</p>
              <p className="mt-2 text-[13px] font-medium text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Principal message ---------- */}
      <Block>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[420px]">
            <span className="absolute -left-4 -top-4 h-24 w-24 bg-gold" />
            <span className="absolute -bottom-4 -right-4 h-24 w-24 bg-navy" />
            <div className="relative aspect-[12/10] overflow-hidden rounded-2xl bg-slate-50 shadow-[0_8px_24px_rgba(20,23,46,0.12)]">
              <img
                src="/images/WhatsApp%20Image%202026-10-16%20at%2015.23.30.jpeg"
                alt="Principal"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <Heading eyebrow="Principal's Message" title="Words From Our Principal" />

            <blockquote
              className={`mt-6 whitespace-pre-line border-l-2 border-gold pl-5 text-[14px] italic leading-[1.75] text-[#3d4160] ${
                expanded ? '' : 'line-clamp-6'
              }`}
            >
              {principalMessage}
            </blockquote>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy underline-offset-4 transition hover:text-navy-dark hover:underline"
            >
              {expanded ? 'Read less' : 'Read more'}
              <span aria-hidden="true" className={`text-gold transition-transform ${expanded ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {expanded && (
              <p className="mt-4 text-[13px] leading-[1.75] text-[#6b6f8d]">
                We wish you and your child a very rewarding experience at MIES Come and Join Us for a Better Future....!!!
              </p>
            )}

            <p className="mt-6 text-[15px] font-bold text-ink">Zafar Ali Khan Yousafzai</p>
            <p className="text-[12px] text-slate-500">Director Mardan International Education System</p>
          </div>
        </div>
      </Block>

      {/* ---------- Pillars ---------- */}
      <Block tone="soft">
        <Heading eyebrow="Why Choose Us" title="What Makes Us Different" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.title} className="border-l-2 border-gold pl-5">
              <span className="text-navy">
                <Icon name={p.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">{p.text}</p>
            </article>
          ))}
        </div>
      </Block>

      <CtaBand />
    </>
  )
}