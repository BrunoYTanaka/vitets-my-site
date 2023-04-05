import { Icon } from '@iconify/react'
import cn from 'classnames'
import { OcticonIcon } from './Icons/OcticonIcon'
import { GlowEffect } from './GlowEffect'

interface ProjectCardProps {
  title: string
  description?: string | null
  createdAt: string
  languages: string[]
  githubUrl: string
}

function ProjectCard({
  title,
  description,
  createdAt,
  languages,
  githubUrl
}: ProjectCardProps) {
  const date = new Date(createdAt).toLocaleDateString('pt-br')

  const handleClickCard = () => {
    window.open(githubUrl, '_blank')
  }

  return (
    <div
      className={cn(
        'bg-card',
        'max-w-lg',
        'rounded-md',
        'p-8',
        'shadow-2xl',
        'shadow-black',
        'cursor-pointer',
        'glow-effect'
      )}
      onClick={handleClickCard}
    >
      <div className="flex items-center justify-between">
        <h5 className="flex items-center gap-2 text-2xl font-semibold leading-7">
          <OcticonIcon /> {title}
        </h5>
        <Icon className="h-6 w-6" icon="material-symbols:open-in-new" />
      </div>
      <p className="mt-4 inline text-lg leading-7 line-clamp-3">
        {description}
      </p>
      <div className="mt-4 flex w-full items-center justify-between">
        <span className="block text-base leading-7 text-blue-400">
          Criado em {date}
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
      <GlowEffect />
    </div>
  )
}

export { ProjectCard }
