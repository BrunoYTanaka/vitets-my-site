import { useRef } from 'react'
import { Card } from 'components/Card'
import { Section } from 'components/Section'
import cn from 'classnames'
import { motion, useScroll } from 'framer-motion'

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

  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'center start']
  })

  return (
    <Section className="flex flex-col items-center py-12" id="experiences">
      <h4 className="mb-12 text-4xl font-bold leading-5">Experiência</h4>
      <div className={cn('relative w-full block space-y-8')} ref={timelineRef}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={cn(
            'absolute inset-0 h-full w-2 rounded-lg bg-white origin-top',
            'left-4 md:left-[50%]'
          )}
        />
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
