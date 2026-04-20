export default function Logo({ className = 'h-28 w-auto' }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="JG Alimentos"
      className={className}
      style={{ display: 'block', margin: 0, padding: 0 }}
    />
  )
}
