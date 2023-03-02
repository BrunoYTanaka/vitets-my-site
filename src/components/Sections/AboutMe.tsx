function AboutMe() {
  const TOOLS = [
    {
      id: 0,
      name: 'Javascript'
    },
    {
      id: 1,
      name: 'NodeJS'
    },
    {
      id: 2,
      name: 'ReactJS'
    },
    {
      id: 3,
      name: 'Typescript'
    },
    {
      id: 4,
      name: 'Jest'
    },
    {
      id: 5,
      name: 'CSS'
    },
    {
      id: 6,
      name: 'NextJS'
    }
  ]

  return (
    <section
      className="grid grid-cols-1 justify-center gap-20 py-12 md:grid-cols-[1fr,1fr] md:gap-12 md:py-24"
      id="about-me"
    >
      <div className="order-2 flex flex-col items-center justify-center space-y-8 md:order-1 md:items-start">
        <img src="/skills.png" alt="" />
      </div>
      <div className="order-1 flex flex-col items-center justify-center space-y-8 md:order-2 md:items-start md:justify-start">
        <h3 className="text-5xl font-bold leading-7">Sobre min</h3>
        <p className="text-center text-base font-medium leading-7 md:text-left">
          Olá, sou o Bruno, um desenvolvedor web que mora no Brasil. Tenho
          experiência em construção, customização e manutenção de sites. Tenho
          experiência com
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 md:items-start md:justify-start">
          {TOOLS.map((tool) => (
            <li
              key={tool.id}
              className="rounded-md border-2 border-solid border-[#42a5f5] px-2 py-1 font-light"
            >
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { AboutMe }
