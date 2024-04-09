"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { es } from "date-fns/locale"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			locale={es}
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				months: cn(
					"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
					classNames.months,
				),
				month: cn("space-y-4", classNames.month),
				caption: cn(
					"flex justify-center pt-1 relative items-center",
					classNames.caption,
				),
				caption_label: cn(
					"text-sm font-medium capitalize",
					classNames.caption_label,
				),
				nav: cn("space-x-1 flex items-center", classNames.nav),
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
					classNames.nav_button,
				),
				nav_button_previous: cn(
					"absolute left-1",
					classNames.nav_button_previous,
				),
				nav_button_next: cn("absolute right-1", classNames.nav_button_next),
				table: cn("w-full border-collapse space-y-1", classNames.table),
				head_row: cn("flex", classNames.head_row),
				head_cell: cn(
					"text-zinc-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-zinc-400 capitalize",
					classNames.head_cell,
				),
				row: cn("flex w-full mt-2", classNames.row),
				cell: cn(
					"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-zinc-100/50 [&:has([aria-selected])]:bg-zinc-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-zinc-800/50 dark:[&:has([aria-selected])]:bg-zinc-800",
					classNames.cell,
				),
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-9 w-9 p-0 font-normal aria-selected:opacity-100",
					classNames.day,
				),
				day_range_end: cn("day-range-end", classNames.day_range_end),
				day_selected: cn(
					"bg-zinc-900 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 focus:bg-zinc-900 focus:text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 dark:focus:bg-zinc-50 dark:focus:text-zinc-900",
					classNames.day_selected,
				),
				day_today: cn(
					"bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
					classNames.day_today,
				),
				day_outside: cn(
					"day-outside text-zinc-500 opacity-50 aria-selected:bg-zinc-100/50 aria-selected:text-zinc-500 aria-selected:opacity-30 dark:text-zinc-400 dark:aria-selected:bg-zinc-800/50 dark:aria-selected:text-zinc-400",
					classNames.day_outside,
				),
				day_disabled: cn(
					"text-zinc-500 opacity-50 dark:text-zinc-400",
					classNames.day_disabled,
				),
				day_range_middle: cn(
					"aria-selected:bg-zinc-100 aria-selected:text-zinc-900 dark:aria-selected:bg-zinc-800 dark:aria-selected:text-zinc-50",
					classNames.day_range_middle,
				),
				day_hidden: cn("invisible", classNames.day_hidden),
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
				IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
			}}
			{...props}
		/>
	)
}
Calendar.displayName = "Calendar"

export { Calendar }
