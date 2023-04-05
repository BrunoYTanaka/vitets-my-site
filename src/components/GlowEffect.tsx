import { useEffect, useState } from 'react'

function GlowEffect() {
  const [rx, setRx] = useState('')

  useEffect(() => {
    const glowEffect = document.querySelector('.glow-effect')

    if (glowEffect) {
      setRx(() => getComputedStyle(glowEffect).borderRadius)
    }
  }, [])

  return (
    <svg className="glow-container hidden md:block">
      <rect
        rx={rx}
        pathLength={100}
        strokeLinecap="round"
        className="glow-blur"
      />
      <rect
        rx={rx}
        pathLength={100}
        strokeLinecap="round"
        className="glow-line"
      />
    </svg>
  )
}

export { GlowEffect }
