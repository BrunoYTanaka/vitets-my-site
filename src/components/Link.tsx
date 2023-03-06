import cn from 'classnames'
import { motion } from 'framer-motion'
interface LinkProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  onClick: (to: string) => void
}

function Link({ children, to, isActive, onClick }: LinkProps) {
  return (
    <button
      onClick={() => onClick(to)}
      type="button"
      aria-label={`Navegar para ${to}`}
      className={cn(
        'relative',
        'border-none',
        'bg-transparent',
        'text-lg',
        'font-bold',
        'capitalize',
        'leading-7',
        'transition-colors',
        'hover:text-blue-300'
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className={cn(
            'absolute',
            'top-full',
            'left-0',
            'w-full',
            'h-1',
            'rounded-2xl',
            'opacity-80',
            'bg-black',
            'dark:bg-white'
          )}
        />
      )}
    </button>
  )
}

export { Link }
