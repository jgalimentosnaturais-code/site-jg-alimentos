// Image: 1920x1080, circle: 313x312px centered at (962, 543)
// Scale factor to fill container with exactly the circle: 1080/312 ≈ 3.46
const SCALE = 1080 / 312

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
          height: size * SCALE,
          width: 'auto',
          display: 'block',
          flexShrink: 0,
        }}
      />
    </div>
  )
}
