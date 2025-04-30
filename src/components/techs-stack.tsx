type TechsStackProps = {
  name: string
  description: string
  icon?: React.ReactNode
}

export function TechsStack({ name, description, icon }: TechsStackProps) {
  return (
    <div className="relative animated-border p-[2px] rounded-2xl w-full">
      <div className="w-full px-4 py-3 rounded-2xl bg-[#18181B] flex gap-4 items-center hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#242938]">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-white">{name}</p>
          <span className="text-sm text-white/70">{description}</span>
        </div>
      </div>
    </div>
  )
}
