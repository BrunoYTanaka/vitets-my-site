import { CircularProgress } from 'components/CircularProgress'

function Skills() {
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
    <section
      className="grid grid-cols-1 justify-center gap-20 py-12 md:grid-cols-[1fr,1fr] md:gap-12 md:py-24"
      id="about-me"
    >
      <div className="order-2 flex flex-col items-center justify-start space-y-8 md:order-1">
        <h4 className="text-4xl font-bold leading-snug">
          Habilidades Técnicas
        </h4>
        <div className="grid grid-cols-1 justify-center gap-20 lg:grid-cols-2">
          {professionalSkills.map((skill) => (
            <CircularProgress
              key={skill.id}
              percentage={skill.percentage}
              title={skill.title}
            />
          ))}
        </div>
      </div>
      <div className="order-1 flex flex-col items-center justify-start space-y-8 md:order-2">
        <h4 className="text-4xl font-bold leading-snug">
          Habilidades Profissionais
        </h4>
      </div>
    </section>
  )
}

export { Skills }
