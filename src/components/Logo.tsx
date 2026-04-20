// Image: 1920x1080, circle: 313x312px centered at (962, 543)
const SCALE = 1080 / 312

export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <img
        src="/logo.png"
        alt="JG Alimentos"
        style={{
          height: size * SCALE,
          width: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}
