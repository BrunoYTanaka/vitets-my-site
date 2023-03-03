interface CardProps {
  title: string
  duration: string
  description: string
  delay?: number
}

function Card({ title, duration, description }: CardProps) {
  return (
    <div className="bg-card max-w-lg space-y-4 rounded-md  px-6 py-7 shadow-2xl shadow-black">
      <h5 className="text-2xl font-semibold leading-7">{title}</h5>
      <span className="block text-base leading-7 text-[#42a5f5]">
        {duration}
      </span>
      <p className="text-lg leading-6">{description}</p>
    </div>
  )
}

export { Card }
