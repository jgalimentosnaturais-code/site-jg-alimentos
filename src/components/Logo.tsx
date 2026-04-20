export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <img
      src="/logo.svg"
      alt="JG Alimentos"
      style={{ width: size, height: size, display: 'block', flexShrink: 0 }}
    />
  )
}
