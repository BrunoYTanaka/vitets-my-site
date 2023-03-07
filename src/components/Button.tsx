import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => (
    <button
      {...rest}
      ref={ref}
      type="button"
      className={cn(
        'rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors',
        className
      )}
    >
      {children}
    </button>
  )
)

Button.displayName = 'Button'
