"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import { twJoin } from "tailwind-merge"
import { IoMdMenu } from "react-icons/io"
import ToggleTheme from "@/components/ToggleTheme"
import { FaTimes } from "react-icons/fa"

type Props = {
	name: string
	menu: React.ReactNode
	page: React.ReactNode
}

const defaultOpenWidth = 1280 // tailwind xl breakpoint

export default function DashboardClientLayout({ name, menu, page }: Props) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (window.innerWidth >= defaultOpenWidth) {
			setOpen(false)
		}
	}, [])

	const handleMenuClick = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement

		if (target.tagName !== "A") {
			return
		}

		if (window.innerWidth >= defaultOpenWidth) {
			return
		}

		setOpen(false)
	}

	const headerHeightClass = "h-16"
	const headerSpaceClass = "pt-16"

	return (
		<div className="relative h-screen w-full">
			<div
				className={twJoin(
					"bg-pattern fixed top-0 z-10 flex h-16 w-full items-center px-8 text-gray-300 dark:border-b dark:border-zinc-800 dark:bg-zinc-950 dark:bg-none",
					headerHeightClass,
				)}
			>
				<Button variant="link" className="p-0" onClick={() => setOpen(!open)}>
					<IoMdMenu className="text-2xl text-gray-300" />
				</Button>
				<h1 className="ml-2 font-bold uppercase">SASE</h1>
				<div className="ml-auto hidden text-sm font-bold uppercase md:block">
					{name}
				</div>
			</div>

			<div className="relative flex h-full w-full">
				<div
					data-open={open}
					className={twJoin(
						"absolute left-0 top-0 z-10 h-full overflow-hidden bg-black/50 data-[open=false]:w-0 data-[open=true]:w-full xl:static xl:z-0 xl:data-[open=true]:w-[300px]",
					)}
				>
					<div className="flex h-full flex-col border-r bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:w-[300px] xl:w-full">
						<div className={twJoin("hidden xl:block", headerSpaceClass)}></div>

						<div className="flex h-16 w-full items-center border-b px-4 dark:border-zinc-800 xl:hidden">
							<Button
								size="icon"
								variant="ghost"
								className="ml-auto text-zinc-400"
								onClick={() => setOpen(false)}
							>
								<FaTimes />
							</Button>
						</div>

						<ScrollArea className="w-full flex-1" onClick={handleMenuClick}>
							{menu}
						</ScrollArea>

						<div className="w-full border-t px-4 py-4 dark:border-zinc-800">
							<ToggleTheme />
						</div>
					</div>
				</div>

				<ScrollArea className="h-full flex-1 bg-gray-50 dark:bg-zinc-950">
					<div className={headerSpaceClass}></div>
					<div className="px-4 py-12 sm:px-8 md:px-16">{page}</div>
				</ScrollArea>
			</div>
		</div>
	)
}
