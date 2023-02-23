import { useState } from 'react'
import { Link } from 'components/Link'
import { CloseIcon, MenuIcon, SunIcon } from 'components/Icons'

function Header() {
  const LINKS = [
    {
      id: 0,
      text: 'Início',
      to: 'home'
    },
    {
      id: 1,
      text: 'Sobre',
      to: 'about'
    },
    {
      id: 2,
      text: 'Habilidades',
      to: 'skills'
    },
    {
      id: 3,
      text: 'Experiências',
      to: 'experiences'
    }
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 mx-auto h-20 w-full bg-gray-800 px-20">
        <nav className="m-auto flex h-full w-full max-w-7xl items-center justify-between p-5">
          <ul className="hidden items-center justify-between space-x-12 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.id}
                to="/"
                isActive={false}
                onClick={() => {
                  console.log('click')
                }}
              >
                {link.text}
              </Link>
            ))}
          </ul>
          <button className="block md:hidden" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </button>
          <button>
            <SunIcon />
          </button>
        </nav>
      </header>
      <aside
        className={`absolute ${
          isOpen ? 'left-0' : 'left-[-100%]'
        } flex h-screen w-80 flex-col space-y-6 bg-gray-800 p-10 transition-all md:hidden`}
      >
        <div className="text-end">
          <button onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav className="">
          <ul className="flex h-full flex-col items-start justify-center space-y-6">
            {LINKS.map((link) => (
              <Link
                key={link.id}
                to="/"
                isActive={false}
                onClick={() => {
                  console.log('click')
                }}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export { Header }
