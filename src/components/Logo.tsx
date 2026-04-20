// Image: 1920x1080, circle center at ~50% x 50.3%, diameter ~312px (28.9% of height)
const SCALE = 1080 / 312

export default function Logo({ size = 56 }: { size?: number }) {
  const imgHeight = size * SCALE

  return (
    <div style={{ width: size, height: size, flexShrink: 0, position: 'relative' }}>
      <img
        src="/logo.png"
        alt="JG Alimentos"
        style={{
          height: imgHeight,
          width: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          clipPath: `circle(${size * 0.5}px at 50.1% 50.3%)`,
        }}
      />
    </div>
  )
}
