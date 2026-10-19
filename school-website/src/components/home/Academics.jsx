import Section from '../Section'

// All pictures live in /public/images/ — change the file names here to match yours.
const IMG = {
  mic: '/images/a6.png',            // boy speaking on mic
  boyPainting: '/images/a11.png',    // boy painting a leaf
  flag: '/images/a10.png',           // girl with flag + camo hat
  camo: '/images/a8.png',           // two kids in camo uniforms
  kidsPainting: '/images/a9.png',   // 3 kids painting on wall
  group: '/images/a7.png',         // boys in white shalwar kameez lined up
  learn: '/images/a5.png',         // girl writing in notebook (big, left column)
}

// The exported pictures have a white rounded frame + shadow baked in around the photo.
// We zoom in and crop that frame away, then draw our own rounded corners + soft shadow.
function Photo({ src, alt, ratio }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(20,23,46,0.12)] ${ratio}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute left-0 top-0 block h-auto max-w-none"
        style={{ width: '121%', marginLeft: '-10%', marginTop: '-6.6%' }}
      />
    </div>
  )
}

function Label({ no, title, text }) {
  return (
    <div className="border-l-2 border-[#f5b800] pl-3">
      <p className="text-[10px] font-medium text-[#6b6f8d]">{no}</p>
      <h3 className="mt-1 text-[20px] font-bold leading-none text-[#1f2a8c]">{title}</h3>
      <p className="mt-2 text-[11px] leading-[1.55] text-[#6b6f8d]">{text}</p>
    </div>
  )
}

export default function Academics() {
  return (
    <Section id="academics" tone="soft">
      {/* ---------- header ---------- */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="block h-[3px] w-[22px] rounded bg-[#f5b800]" />
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#14172e] lg:text-[40px]">
            More Than Just a School
          </h2>
        </div>
        <p className="max-w-[360px] text-[13px] leading-[1.75] text-[#6b6f8d]">
          Learning happens everywhere — in classrooms, on the playground, through
          friendships, challenges and experiences that shape every student.
        </p>
      </div>

      {/* ---------- 4 columns ---------- */}
      <div className="mt-12 grid grid-cols-2 gap-[18px] lg:grid-cols-4">
        {/* column 1 : Learn */}
        <div className="flex flex-col gap-[18px]">
          <Photo src={IMG.learn} alt="Student writing in a notebook" ratio="aspect-[166/196]" />
          <Label no="01" title="Learn" text="Curiosity that leads to discovery." />
        </div>

        {/* column 2 : two pictures */}
        <div className="flex flex-col gap-[18px]">
          <Photo src={IMG.mic} alt="Student speaking on the microphone" ratio="aspect-[165/115]" />
          <Photo src={IMG.group} alt="Students lined up in front of the MIES banner" ratio="aspect-[165/150]" />
        </div>

        {/* column 3 : Grow */}
        <div className="flex flex-col gap-[18px]">
          <Label no="02" title="Grow" text="Confidence built through experience." />
          <div className="mt-2 flex flex-col gap-[18px]">
            <Photo src={IMG.kidsPainting} alt="Children painting on a wall" ratio="aspect-[165/86]" />
            <Photo src={IMG.camo} alt="Two students in camouflage uniforms" ratio="aspect-[165/91]" />
          </div>
        </div>

        {/* column 4 : Achieve */}
        <div className="flex flex-col gap-[18px]">
          <Photo src={IMG.flag} alt="Girl holding a flag and a camouflage hat" ratio="aspect-[165/127]" />
          <Label no="03" title="Achieve" text="Turning effort into meaningful success." />
          <Photo src={IMG.boyPainting} alt="Boy painting a green leaf" ratio="aspect-[165/69]" />
        </div>
      </div>
    </Section>
  )
}
