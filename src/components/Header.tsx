import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Link } from 'components/Link'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from 'components/Icons'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'hooks/useTheme'
import { Button } from './Button'

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

const getDimensions = (ele: HTMLElement) => {
  const { height } = ele.getBoundingClientRect()

  const offsetTop = ele.offsetTop
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom
  }
}

interface RefData {
  current: HTMLElement
  section: string
}

function Header() {
  const { mode, changeTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [visibleSection, setVisibleSection] = useState('home')
  const [refs, setRefs] = useState<RefData[]>([])

  useEffect(() => {
    if (refs.length === 0) {
      const elements = LINKS.map((link) => {
        return {
          current: document.getElementById(link.to) as HTMLElement,
          section: link.to
        }
      })
      setRefs(elements)
    }
  }, [refs])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      const selected = refs.find((ref) => {
        const { offsetBottom, offsetTop } = getDimensions(ref.current)
        return scrollPosition > offsetTop && scrollPosition < offsetBottom
      })

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [refs, visibleSection])

  const onClick = (to: string) => {
    setIsOpen(false)
    const section = document.getElementById(to)
    console.log(section)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  const handleChangeTheme = () => {
    changeTheme(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <header
        className={cn(
          'sticky',
          'top-0',
          'h-20',
          'w-full',
          'z-40',
          'flex-none',
          'bg-primary',
          'border-b',
          'border-slate-900/20',
          'dark:border-slate-50/[0.06]'
        )}
      >
        <nav className="m-auto flex h-full w-full max-w-7xl items-center justify-between px-20">
          <ul className="hidden items-center justify-between space-x-12 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.id}
                isActive={visibleSection === link.to}
                to={link.to}
                onClick={onClick}
              >
                {link.text}
              </Link>
            ))}
          </ul>
          <Dialog.Trigger asChild>
            <Button
              className="block md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir o menu lateral"
            >
              <MenuIcon />
            </Button>
          </Dialog.Trigger>
          <Button
            onClick={handleChangeTheme}
            aria-label={
              mode === 'dark'
                ? 'Alterar o tema para claro'
                : 'Alterar o tema para escuro'
            }
          >
            {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay
              forceMount
              className="fixed inset-0 bg-[#00000070]"
            />
            <Dialog.Content forceMount asChild>
              <motion.aside
                className="bg-primary fixed inset-0 flex h-screen w-80 flex-col space-y-6 p-10 md:hidden"
                initial={{ x: '-100%' }}
                exit={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <div className="text-end">
                  <Dialog.Close asChild>
                    <Button
                      onClick={() => setIsOpen(false)}
                      aria-label="Fechar o menu lateral"
                    >
                      <CloseIcon />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="">
                  <ul className="flex h-full flex-col items-start justify-center space-y-6">
                    {LINKS.map((link) => (
                      <Link
                        key={link.id}
                        to={link.to}
                        isActive={false}
                        onClick={onClick}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </ul>
                </nav>
              </motion.aside>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export { Header }
