export function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <img
      src="/logo-yayasan.png"
      alt="Yayasan Saint Lusia Angello"
      className={`${className} object-contain rounded-full`}
      loading="eager"
      decoding="async"
    />
  )
}
