"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";

type Props = {
	title: string;
	icon: React.ReactNode;
	links: {
		title: string;
		href: string;
	}[];
};

export default function DashboardLinksSection({ title, icon, links }: Props) {
	const [open, setOpen] = useState(false);

	const [isActive, setIsActive] = useState(false);

	const path = usePathname();

	const sectionPath = useRef(new Set<string>());

	useEffect(() => {
		setIsActive(sectionPath.current.has(path));
	}, [path]);

	useEffect(() => {
		links.forEach((link) => {
			sectionPath.current.add(
				"/dashboard" + (link.href === "/" ? "" : link.href),
			);
		});
	}, [links]);

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger asChild>
				<Button
					className={twJoin(
						"flex w-full items-center justify-between",
						isActive
							? "bg-primary-100 hover:bg-primary-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
							: "",
					)}
					variant="ghost"
				>
					<div className="flex items-center space-x-2">
						{icon}
						<span>{title}</span>
					</div>
					{open ? (
						<FaChevronUp className="text-sm text-gray-500" />
					) : (
						<FaChevronDown className="text-sm text-gray-500" />
					)}
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="mt-2 flex flex-col space-y-2">
				{links.map((link) => (
					<Button
						key={link.title}
						className={twJoin(
							"text-wrap justify-start pl-11",
							path === "/dashboard" + (link.href === "/" ? "" : link.href)
								? "bg-primary-100 hover:bg-primary-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
								: "",
						)}
						variant="ghost"
						asChild
					>
						<Link href={"/dashboard" + link.href}>{link.title}</Link>
					</Button>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
}
