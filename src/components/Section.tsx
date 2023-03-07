import { ReactNode } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

interface SectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode
  className?: string
}

function Section({ children, className, ...rest }: SectionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }
  const transition = {
    duration: 0.8,
    ease: 'easeInOut'
  }

  return (
    <motion.section
      {...rest}
      className={className}
      variants={variants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      transition={transition}
    >
      {children}
    </motion.section>
  )
}

export { Section }
