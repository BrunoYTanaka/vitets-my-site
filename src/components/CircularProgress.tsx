import { motion } from 'framer-motion'
import { useCounter } from 'hooks/useCounter'

interface ProgressProps {
  title: string
  percentage: number
}

function CircularProgress({ percentage, title }: ProgressProps) {
  const duration = 1.5
  const delay = 0.5
  const radius = 50

  const nodeRef = useCounter({ delay, duration, to: percentage })

  const circumference = Math.ceil(2 * Math.PI * radius)
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percentage - 100))
  )

  const transition = {
    duration: duration,
    delay: delay,
    ease: 'easeIn'
  }

  const variants = {
    hidden: {
      strokeDashoffset: circumference
    },
    show: {
      strokeDashoffset: fillPercents
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center space-y-4">
      <span
        className="absolute top-[85px] text-base font-medium leading-snug"
        ref={nodeRef}
      />
      <svg viewBox="0 0 100 100" className="h-40 w-40 overflow-visible">
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="fill-none stroke-[#8c8c8c] stroke-[8px]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          className="fill-none stroke-[#42a5f5] stroke-[8px]"
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={transition}
        />
      </svg>
      <span className="text-base font-medium leading-6">{title}</span>
    </div>
  )
}

export { CircularProgress }
