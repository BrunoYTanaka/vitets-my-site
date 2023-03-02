function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex h-20 w-full flex-col items-center justify-evenly bg-gray-800 md:flex-row">
      <span className="text-base font-medium leading-7">
        Todos os direitos reservados @ {year}
      </span>
      <span className="text-base font-medium leading-7">Obrigado por vir</span>
    </footer>
  )
}

export { Footer }
