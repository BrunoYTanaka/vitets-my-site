import {
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon
} from 'components/Icons'
import { MailIcon } from 'components/Icons/MailIcon'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Section } from 'components/Section'

function Contact() {
  const [text] = useTypewriter({
    words: [
      'Eu sou Bruno Yoichi Tanaka',
      'Programador Frontend',
      'Adorador de café'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <Section
      className="grid grid-cols-1 justify-center gap-20 py-12 md:grid-cols-[1fr,1fr] md:gap-2 md:py-24"
      id="home"
    >
      <div className="order-2 flex flex-col items-center justify-center space-y-8 md:order-1 md:items-start">
        <h3 className="rounded-t-2xl rounded-r-2xl bg-blue-400 px-7 py-3 text-base font-bold">
          Olá, seja bem vindo
        </h3>
        <h4 className="min-h-[80px] text-center text-4xl md:text-left lg:min-h-0">
          {text} <Cursor />
        </h4>
        <ul className="flex flex-col items-start justify-center space-y-8">
          <li className="flex flex-row items-center justify-center space-x-4">
            <LocationIcon />
            <span> MS, Dourados, Brasil 🇧🇷 </span>
          </li>
          <li className="flex flex-row items-center justify-center space-x-4">
            <MailIcon />
            <span> brunoyoichi2@gmail.com </span>
          </li>
        </ul>
        <ul className="flex items-center justify-center space-x-8">
          <li className="group transition-all duration-200 ease-in-out hover:scale-125">
            <a href="#">
              <GithubIcon className="text-primary group-hover:fill-blue-400" />
            </a>
          </li>
          <li className="group transition-all duration-200 ease-in-out hover:scale-125">
            <a href="#">
              <TwitterIcon className="text-primary group-hover:fill-blue-400" />
            </a>
          </li>
          <li className="group transition-all duration-200 ease-in-out hover:scale-125">
            <a href="#">
              <LinkedinIcon className="text-primary group-hover:fill-blue-400" />
            </a>
          </li>
        </ul>
      </div>
      <div className="order-1 flex items-center justify-center md:order-2">
        <div className="h-60 w-60 overflow-hidden rounded-full border-[20px] border-solid border-gray-300 transition-all dark:border-gray-600 md:h-60 md:w-60 lg:h-80 lg:w-80">
          <img
            src="https://avatars.githubusercontent.com/u/37604496?v=4"
            alt="Bruno Y. Tanaka"
          />
        </div>
      </div>
    </Section>
  )
}

export { Contact }
