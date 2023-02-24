import { AboutMe } from 'components/Sections/AboutMe'
import { Contact } from 'components/Sections/Contact'
import { Experiences } from 'components/Sections/Experiences'

function Home() {
  return (
    <div className="mx-auto mt-20 w-full max-w-7xl px-2 md:px-20">
      <Contact />
      <AboutMe />
      <Experiences />
    </div>
  )
}

export { Home }
