import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterData {
  from?: number
  to?: number
  duration: number
  delay: number
}

function useCounter({ from = 0, to = 100, duration, delay }: CounterData) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, {
    once: true
  })

  useEffect(() => {
    const node = nodeRef.current

    const controls = animate(from, to, {
      duration,
      delay,
      onUpdate(value) {
        if (node && isInView) {
          node.textContent = `${value.toFixed(0)}%`
        }
      }
    })

    return () => controls.stop()
  }, [from, to, isInView, duration, delay])

  return nodeRef
}

export { useCounter }
