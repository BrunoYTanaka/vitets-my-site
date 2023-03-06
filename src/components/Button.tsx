import { ReactNode, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} type="button" className={cn('', className)}>
      {children}
    </button>
  )
}
