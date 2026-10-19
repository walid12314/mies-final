const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'

const variants = {
  // navy filled (nav "Contact Us")
  primary: 'bg-navy text-white hover:bg-navy-dark',
  // navy outline (nav "Download Our App")
  outline: 'border border-navy bg-white text-navy hover:bg-navy hover:text-white',
  // white filled (hero "Explore Our School")
  light: 'bg-white text-navy hover:bg-gray-100',
  // white outline on dark bg (hero "Watch Our Story")
  ghost: 'border border-white/80 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'h-10 rounded-lg px-4 text-[13px]',
  md: 'h-11 rounded-xl px-5 text-[13px]',
  lg: 'h-[52px] rounded-xl px-8 text-[15px] lg:h-14',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
