import { CircularProgressBar } from 'components/CircularProgressBar'
import ProgressBar from 'components/ProgressBar'
import { Section } from 'components/Section'

function Skills() {
  const technicalSkills = [
    {
      id: 0,
      title: 'Javascript',
      percentage: 81
    },
    {
      id: 1,
      title: 'ReactJS',
      percentage: 68
    },
    {
      id: 2,
      title: 'NodeJS',
      percentage: 61
    },
    {
      id: 3,
      title: 'Typescript',
      percentage: 55
    },
    {
      id: 4,
      title: 'CSS',
      percentage: 67
    }
  ]

  const professionalSkills = [
    {
      id: 0,
      title: 'Trabalho em equipe',
      percentage: 90
    },
    {
      id: 1,
      title: 'Responsabilidade',
      percentage: 87
    },

    {
      id: 2,
      title: 'Comunicação',
      percentage: 75
    }
  ]

  return (
    <Section
      className="grid grid-cols-1 justify-center gap-20 py-12 md:grid-cols-[1fr,1fr] md:gap-12 md:py-24"
      id="skills"
    >
      <div className="order-2 flex flex-col items-center justify-start space-y-8 md:order-1">
        <h4 className="text-center text-3xl font-bold leading-snug md:text-4xl">
          Habilidades Técnicas
        </h4>
        <div className="flex w-full flex-col items-center justify-center gap-10 px-4 md:px-0">
          {technicalSkills.map((skill) => (
            <ProgressBar
              key={skill.id}
              percentage={skill.percentage}
              title={skill.title}
            />
          ))}
        </div>
      </div>
      <div className="order-1 flex flex-col items-center justify-start space-y-8 md:order-2">
        <h4 className="text-3xl font-bold leading-snug md:text-4xl">
          Habilidades Profissionais
        </h4>
        <div className="grid w-10/12 grid-cols-1 justify-center gap-6 text-center lg:grid-cols-2">
          {professionalSkills.map((skill) => (
            <CircularProgressBar
              key={skill.id}
              percentage={skill.percentage}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export { Skills }
