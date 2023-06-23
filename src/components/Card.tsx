import cn from 'classnames'

interface CardProps {
  isCardOnLeft: boolean
  title: string
  duration: string
  description: string
}

function Card({ isCardOnLeft, title, duration, description }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card relative max-w-lg space-y-4 rounded-md px-6 py-7 shadow-2xl shadow-black',
        'before:card-arrow before:card-arrow-right',
        'ml-4 md:ml-0',
        {
          'md:before:card-arrow-left': !isCardOnLeft
        }
      )}
    >
      <h5 className="text-2xl font-semibold leading-7">{title}</h5>
      <span className="block text-base leading-7 text-blue-400">
        {duration}
      </span>
      <p className="text-lg leading-6">{description}</p>
    </div>
  )
}

export { Card }
