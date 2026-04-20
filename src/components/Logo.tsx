export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <img
        src="/logo.png"
        alt="JG Alimentos"
        style={{
          height: size * 1.62,
          width: 'auto',
          display: 'block',
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  )
}
