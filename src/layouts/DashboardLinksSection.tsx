"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger asChild>
				<Button
					className="flex w-full items-center justify-between"
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
						className="text-wrap justify-start pl-11"
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
