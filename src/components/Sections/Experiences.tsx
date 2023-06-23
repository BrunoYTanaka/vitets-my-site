import { Card } from 'components/Card'
import { Section } from 'components/Section'
import cn from 'classnames'

function Experiences() {
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
      title: 'Universidade Estadual de Mato Grosso do Sul (UEMS)',
      duration: '2014 - 2018',
      description: 'Bacharelado em ciência da computação'
    },
    {
      id: 2,
      title: 'E-deploy',
      duration: '2019 - 2021',
      description:
        'Desenvolver frontend responsável por manutenção e desenvolvimento de vários sites como. Burger King, Natura, Pax Primavera, etc.'
    }
  ]

  return (
    <Section className="flex flex-col items-center py-12" id="experiences">
      <h4 className="mb-12 text-4xl font-bold leading-5">Experiência</h4>
      <div
        className={cn(
          'relative w-full block space-y-8',
          'after:absolute after:inset-0 after:h-full after:w-2 after:rounded-lg after:bg-white after:content-[""]',
          'after:left-4 md:after:left-[50%]'
        )}
      >
        {experiences.map((experience) => {
          const isCardOnLeft = experience.id % 2 === 0
          return (
            <div
              key={experience.id}
              className={cn('relative', 'md:w-[50%] w-full', 'px-8', 'left-0', {
                'md:left-[50%]': isCardOnLeft
              })}
            >
              <Card {...experience} isCardOnLeft={isCardOnLeft} />
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export { Experiences }
