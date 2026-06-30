import { Bot, CircleHelp, Home, PieChart, Plus } from 'lucide-react'

const navItems = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Spend', icon: PieChart, active: false },
  { label: 'Coach', icon: Bot, active: false },
  { label: 'Help', icon: CircleHelp, active: false },
]

export function BottomNav() {
  return (
    <nav
      className="absolute bottom-0 left-0 right-0 border-t border-black/5 bg-white/90 backdrop-blur-md"
      data-node-id="90:12659"
    >
      <div className="relative h-[82.5px]">
        {navItems.slice(0, 2).map((item, index) => (
          <button
            key={item.label}
            type="button"
            className="absolute top-2 flex w-[82.5px] flex-col items-center gap-1 py-1"
            style={{ left: 8 + index * 82.5 }}
          >
            <item.icon
              className={`size-[22px] ${item.active ? 'text-[#850056]' : 'text-black/40'}`}
              strokeWidth={2}
            />
            <span
              className={`text-[11px] font-medium leading-[16.5px] ${
                item.active ? 'text-[#850056]' : 'text-black/40'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}

        <button
          type="button"
          className="absolute left-1/2 top-[-6.75px] -translate-x-1/2"
          aria-label="Add"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-[#b0fe00] shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)]">
            <Plus className="size-[26px] text-black" strokeWidth={2.5} />
          </span>
        </button>

        {navItems.slice(2).map((item, index) => (
          <button
            key={item.label}
            type="button"
            className="absolute top-2 flex w-[82.5px] flex-col items-center gap-1 py-1"
            style={{ left: 229 + index * 82.5 }}
          >
            <item.icon className="size-[22px] text-black/40" strokeWidth={2} />
            <span className="text-[11px] font-medium leading-[16.5px] text-black/40">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
