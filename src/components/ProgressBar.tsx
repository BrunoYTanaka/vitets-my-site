import { duration, delay, transition } from 'constants/motion'
import { motion } from 'framer-motion'
import { useCounter } from 'hooks/useCounter'

interface ProgressBar {
  title: string
  percentage: number
}

function ProgressBar({ title, percentage }: ProgressBar) {
  const nodeRef = useCounter({ delay, duration, to: percentage })

  const variants = {
    empty: {
      width: 0
    },
    fill: {
      width: `${percentage}%`
    }
  }

  return (
    <div className="flex w-full flex-col items-center space-y-2">
      <div className="flex w-full items-center justify-between">
        <span className="text-base font-medium leading-snug">{title}</span>
        <span className="text-base font-medium leading-snug" ref={nodeRef} />
      </div>
      <div className="relative h-2 w-full rounded-xl bg-[#8c8c8c]">
        <motion.div
          variants={variants}
          initial="empty"
          viewport={{ once: true }}
          whileInView="fill"
          className="absolute inset-0 rounded-xl bg-[#42a5f5]"
          transition={transition}
        />
      </div>
    </div>
  )
}

export default ProgressBar
