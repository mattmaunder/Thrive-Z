type PageHeaderProps = {
  title: string
  subtitle: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-navy">{title}</h1>
          <span className="text-xs font-medium text-black/40">Thrive Compass</span>
        </div>
        <p className="mt-1 text-[13px] text-muted">{subtitle}</p>
      </div>
      {action}
    </div>
  )
}
