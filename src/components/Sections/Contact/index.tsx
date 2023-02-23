import { TwitterIcon, GithubIcon, LinkedinIcon } from 'components/Icons'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

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
    <section
      className="grid grid-cols-1 justify-center gap-20 py-24 md:grid-cols-[1fr,1fr] md:gap-2"
      id="home"
    >
      <div className="order-2 flex flex-col items-center justify-center space-y-8 md:order-1 md:items-start">
        <h3 className="rounded-t-2xl rounded-r-2xl bg-[#42a5f5] px-7 py-3 text-base font-bold">
          Olá, seja bem vindo
        </h3>
        <h4 className="text-4xl">
          {text} <Cursor />
        </h4>
        <ul className="flex items-center justify-center space-x-8">
          <li className="group transition-all duration-200 ease-in-out hover:scale-125">
            <a href="#">
              <GithubIcon className="group-hover:fill-[#42a5f5]" />
            </a>
          </li>
          <li className="group transition-all duration-200 ease-in-out hover:scale-125">
            <a href="#">
              <TwitterIcon className="group-hover:fill-[#42a5f5]" />
            </a>
          </li>
          <li className="group transition-all duration-200 ease-in-out hover:scale-125">
            <a href="#">
              <LinkedinIcon className="group-hover:fill-[#42a5f5]" />
            </a>
          </li>
        </ul>
      </div>
      <div className="order-1 flex items-center justify-center md:order-2">
        <div className="h-60 w-60 overflow-hidden rounded-full border-[20px] border-solid border-[#212121] transition-all md:h-60 md:w-60 lg:h-80 lg:w-80">
          <img
            src="https://avatars.githubusercontent.com/u/37604496?v=4"
            alt="Bruno Y. Tanaka"
          />
        </div>
      </div>
    </section>
  )
}

export { Contact }
