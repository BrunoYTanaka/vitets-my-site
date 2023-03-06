import { useState } from 'react'
import cn from 'classnames'
import { Link } from 'components/Link'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from 'components/Icons'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'hooks/useTheme'

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

  const { mode, changeTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

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
          <Dialog.Trigger asChild>
            <button className="block md:hidden" onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </button>
          </Dialog.Trigger>
          <button onClick={handleChangeTheme}>
            {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
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
                className={`fixed inset-0 flex h-screen w-80 flex-col space-y-6 bg-gray-800 p-10 md:hidden`}
                initial={{ x: '-100%' }}
                exit={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <div className="text-end">
                  <Dialog.Close asChild>
                    <button onClick={() => setIsOpen(false)}>
                      <CloseIcon />
                    </button>
                  </Dialog.Close>
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
              </motion.aside>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export { Header }
