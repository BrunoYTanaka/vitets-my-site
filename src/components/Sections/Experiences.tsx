import { Card } from 'components/Card'

function Experiences() {
  const educations = [
    {
      id: 0,
      title: 'Universidade Estadual de Mato Grosso do Sul (UEMS)',
      duration: '2014 - 2018',
      description: 'Bacharelado em ciência da computação'
    }
  ]

  const experiences = [
    {
      id: 0,
      title: 'Agile Content',
      duration: '2021 - atual',
      description:
        'Desenvolver fullstack responsável por manutenção e desenvolvimento de novas funcionalidades do site Claro tv+'
    },
    {
      id: 1,
      title: 'E-deploy',
      duration: '2019 - 2021',
      description:
        'Desenvolver frontend responsável por manutenção e desenvolvimento de vários sites como. Burger King, Natura, Pax Primavera, etc.'
    }
  ]

  return (
    <section
      className="grid grid-cols-1 justify-center gap-20 py-12 md:grid-cols-[1fr,1fr] md:gap-12 md:py-24"
      id="about-me"
    >
      <div className="order-2 flex flex-col items-center justify-start space-y-8 md:order-1">
        <h4 className="text-4xl font-bold leading-5">Educação</h4>
        {educations.map((education) => (
          <Card key={education.id} {...education} />
        ))}
      </div>
      <div className="order-1 flex flex-col items-center justify-start space-y-8 md:order-2">
        <h4 className="text-4xl font-bold leading-5">Experiência</h4>
        {experiences.map((experience) => (
          <Card key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  )
}

export { Experiences }
