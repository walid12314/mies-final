const GOLD = '#F5B400'
const NAVY = '#1E2A78'

function Trophy() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-24 w-24"
      fill={GOLD}
      aria-hidden="true"
    >
      <path d="M16 6h32v4h10v8c0 7-5 12-12 13-2 4-6 7-10 8v6h8a4 4 0 0 1 4 4v5H16v-5a4 4 0 0 1 4-4h8v-6c-4-1-8-4-10-8C11 30 6 25 6 18v-8h10V6Zm-4 8v4c0 3 2 6 5 8-1-3-1-7-1-12h-4Zm40 0h-4c0 5 0 9-1 12 3-2 5-5 5-8v-4Z" />
    </svg>
  )
}

export default function Achievement({ onSelectImage }) {
  return (
    <section
      id="achievement"
      className="overflow-x-clip bg-[#F4F6FC] px-4 py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className="relative rounded-[28px] px-6 py-12 lg:min-h-[462px] lg:pl-[544px] lg:pr-12"
          style={{ background: NAVY }}
        >
          {/* Soft background circle */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
            <div className="absolute -right-[198px] -top-[75px] h-[440px] w-[440px] rounded-full bg-white/[0.05]" />
          </div>

          {/* Gold ring */}
          <div
            className="pointer-events-none absolute -right-[138px] -top-[15px] hidden h-[320px] w-[320px] rounded-full border lg:block"
            style={{ borderColor: GOLD }}
          />

          {/* Trophy */}
          <div className="absolute right-[26px] top-[33px] hidden lg:block">
            <Trophy />
          </div>

          {/* Clickable achievement image */}
          <button
            type="button"
            onClick={() =>
              onSelectImage({
                src: '/images/congratulations.png',
                alt: 'Congratulations Muskan Rehman — 1079/1200, 89.9%, Grade A+',
              })
            }
            aria-label="View achievement image"
            className="group relative mx-auto mb-8 block w-[300px] max-w-full cursor-zoom-in border-0 bg-transparent p-0 outline-none transition-[filter] duration-300 hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.8)] focus-visible:drop-shadow-[0_0_18px_rgba(59,130,246,0.8)] lg:absolute lg:-top-[54px] lg:left-[11px] lg:mb-0 lg:w-[488px]"
          >
            <img
              src="/images/congratulations.png"
              alt="Congratulations Muskan Rehman — 1079/1200, 89.9%, Grade A+"
              className="block h-auto w-full border-0 outline-none"
            />
          </button>

          {/* Achievement text */}
          <div className="relative">
            <span
              className="mb-4 block h-[3px] w-8 rounded-full"
              style={{ background: GOLD }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: GOLD }}
            >
              Achievement
            </p>

            <h3 className="mt-3 max-w-[480px] text-3xl font-bold leading-tight text-white lg:text-[42px]">
              Excellence That Makes Us Proud
            </h3>

            <p
              className="mt-3 text-xl font-semibold lg:text-2xl"
              style={{ color: GOLD }}
            >
              Outstanding Results in Mardan Board
            </p>

            <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/75">
              Our students continue to make us proud with their outstanding academic performance and
              remarkable achievements in the Mardan Board examinations.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-8">
              <div
                className="flex h-[109px] w-[169px] flex-col items-center justify-center rounded-2xl text-center"
                style={{ background: GOLD, color: NAVY }}
              >
                <span className="text-2xl font-bold">[POSITION]</span>
                <span className="mt-2 text-sm font-medium">Class [X]</span>
              </div>

              <ul className="space-y-3 text-sm text-white">
                {[
                  'Mardan Board Examination',
                  'Academic Achievement',
                  "Our Student's Outstanding Performance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: GOLD }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
