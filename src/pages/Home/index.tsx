import { AboutMe } from 'components/Sections/AboutMe'
import { Contact } from 'components/Sections/Contact'
import { Experiences } from 'components/Sections/Experiences'
import { Skills } from 'components/Sections/Skills'

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-20">
      <Contact />
      <AboutMe />
      <Skills />
      <Experiences />
    </div>
  )
}

export { Home }
