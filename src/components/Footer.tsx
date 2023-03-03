import cn from 'classnames'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'bg-primary',
        'flex',
        'h-20',
        'w-full',
        'flex-col',
        'items-center',
        'justify-evenly',
        'md:flex-row',
        'border-t',
        'border-slate-900/10',
        'dark:border-slate-50/[0.06]'
      )}
    >
      <span className="text-base font-medium leading-7">
        Todos os direitos reservados @ {year}
      </span>
      <span className="text-base font-medium leading-7">Obrigado por vir</span>
    </footer>
  )
}

export { Footer }
