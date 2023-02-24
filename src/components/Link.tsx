interface CustomLinkProps {
  children: React.ReactNode
  isActive: boolean
  to: string
  onClick: (to: string) => void
}

function Link({ children, to, isActive, onClick }: CustomLinkProps) {
  return (
    <button className="relative border-none bg-transparent text-lg font-bold capitalize leading-7 transition-colors hover:text-[#90caf9]">
      {children}
    </button>
  )
}

export { Link }
