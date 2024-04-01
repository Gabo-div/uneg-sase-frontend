type Props = {
  title: string
  children: React.ReactNode
  asChild?: boolean
}

export default function DashboardDataField({ title, children, asChild }: Props) {
  return (
    <div className="flex flex-col gap-1 bg-white py-1 dark:bg-zinc-950">
      <p className="text-gray-600 text-xs dark:text-gray-500">{title}</p>
      {asChild ? <>{children}</> : <p className="text-sm">{children}</p>}
    </div>
  )
}
