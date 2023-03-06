import { radius, duration, delay, transition } from 'constants/motion'
import { motion } from 'framer-motion'
import { useCounter } from 'hooks/useCounter'

interface ProgressProps {
  title: string
  percentage: number
}

function CircularProgressBar({ percentage, title }: ProgressProps) {
  const nodeRef = useCounter({ delay, duration, to: percentage })

  const circumference = Math.ceil(2 * Math.PI * radius)
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percentage - 100))
  )

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
        className="absolute top-[62px] text-base font-medium leading-snug"
        ref={nodeRef}
      />
      <svg viewBox="0 0 100 100" className="h-28 w-28 overflow-visible">
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="fill-none stroke-black stroke-[10px]"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-progress-empty fill-none stroke-[8px]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          className="fill-none stroke-blue-400 stroke-[8px]"
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

export { CircularProgressBar }
