import { AboutMe } from 'components/Sections/AboutMe'
import { Contact } from 'components/Sections/Contact'

function Home() {
  return (
    <div className="mx-auto mt-20 w-full max-w-7xl px-2 md:px-20">
      <Contact />
      <AboutMe />
    </div>
  )
}

export { Home }
