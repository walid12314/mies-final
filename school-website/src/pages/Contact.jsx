
import PageHeader from '../components/page/PageHeader'
import Block from '../components/page/Block'
import Heading from '../components/page/Heading'
import Icon from '../components/page/Icon'

const info = [
  {
    icon: 'pin',
    title: 'Visit Us',
    lines: [
      'Bagh-e-Irum, Mardan,',
      'Khyber Pakhtunkhwa, Pakistan',
    ],
  },
  {
    icon: 'phone',
    title: 'Call Us',
    lines: ['+92 [000] [0000000]', '+92 [000] [0000000]'],
  },
  {
    icon: 'mail',
    title: 'Email Us',
    lines: [
      'info@[schoolname].edu.pk',
      'admissions@[schoolname].edu.pk',
    ],
  },
  {
    icon: 'clock',
    title: 'Office Hours',
    lines: [
      'Mon – Fri: 8:00 AM – 2:00 PM',
      'Saturday: 8:00 AM – 12:00 PM',
    ],
  },
]

const field =
  'mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] text-ink outline-none transition placeholder:text-slate-400 focus:border-navy focus:ring-2 focus:ring-navy/15'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        text="We’d love to hear from you. Get in touch with MIES Mardan for information about admissions and our school."
      />

      {/* ---------- Info Cards ---------- */}
      <Block>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((i) => (
            <article
              key={i.title}
              className="rounded-2xl bg-white p-7 shadow-[0_8px_24px_rgba(20,23,46,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,23,46,0.14)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={i.icon} />
              </span>

              <h3 className="mt-5 text-lg font-bold text-navy">
                {i.title}
              </h3>

              <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-slate-500">
                {i.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Contact Form + Google Map ---------- */}
      <Block tone="soft">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* ---------- Contact Form ---------- */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white p-6 shadow-[0_12px_36px_rgba(20,23,46,0.10)] sm:p-9"
          >
            <Heading
              eyebrow="Send A Message"
              title="Get In Touch"
              text="Fill in the form and we will reply as soon as possible."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="text-[12px] font-semibold text-ink">
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className={field}
                  required
                />
              </label>

              <label className="text-[12px] font-semibold text-ink">
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 000 0000000"
                  className={field}
                />
              </label>

              <label className="text-[12px] font-semibold text-ink sm:col-span-2">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  className={field}
                  required
                />
              </label>

              <label className="text-[12px] font-semibold text-ink sm:col-span-2">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className={field}
                  required
                />
              </label>

              <label className="text-[12px] font-semibold text-ink sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className={field}
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-[52px] w-full items-center justify-center rounded-xl bg-navy px-8 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* ---------- Google Maps ---------- */}
          <div className="flex min-h-[360px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(20,23,46,0.10)]">

            <iframe
              title="MIES Mardan Location"
              src="https://maps.google.com/maps?q=Mardan%20International%20Education%20System%2C%20Bagh-e-Irum%2C%20Mardan%2C%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{
                border: 0,
                minHeight: '360px',
                flex: 1,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="border-t border-slate-100 p-6 text-[13px] leading-[1.7] text-slate-600">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name="pin" />
                </span>

                <div>
                  <h3 className="font-bold text-navy">
                    Mardan International Education System (MIES)
                  </h3>

                  <p className="mt-1">
                    Bagh-e-Irum, Mardan, Khyber Pakhtunkhwa, Pakistan
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Mardan+International+Education+System+Bagh-e-Irum+Mardan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex font-semibold text-navy underline underline-offset-4 transition hover:text-amber-500"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Block>
    </>
  )
}
