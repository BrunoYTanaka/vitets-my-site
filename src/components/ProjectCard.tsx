import { Icon } from '@iconify/react'
import cn from 'classnames'
import { OcticonIcon } from './Icons/OcticonIcon'

interface ProjectCardProps {
  title: string
  description?: string | null
  createdAt: string
  languages: string[]
}

function ProjectCard({
  title,
  description,
  createdAt,
  languages
}: ProjectCardProps) {
  const date = new Date(createdAt).toLocaleDateString('pt-br')
  return (
    <div
      className={cn(
        'bg-card',
        'max-w-lg',
        'space-y-4',
        'rounded-md',
        'px-6',
        'py-7',
        'shadow-2xl',
        'shadow-black',
        'cursor-pointer'
      )}
    >
      <h5 className="flex items-center gap-2 text-2xl font-semibold leading-7">
        <OcticonIcon /> {title}
      </h5>
      <p className="inline text-lg leading-7 line-clamp-2">{description}</p>
      <div className="flex w-full items-center justify-between">
        <span className="block text-base leading-7 text-blue-400">
          {`Criado em ${date}`}
        </span>
        <ul className="flex flex-wrap space-x-2">
          {languages.map((language, index) => (
            <Icon
              key={index}
              className="h-8 w-8"
              icon={`skill-icons:${language}`}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ProjectCard }
