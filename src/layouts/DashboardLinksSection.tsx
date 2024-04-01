"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
        <Button className="w-full flex items-center justify-between" variant="ghost">
          <div className="flex items-center space-x-2">
            {icon}
            <span>{title}</span>
          </div>
          {open ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col space-y-2 mt-2">
        {links.map((link) => (
          <Button key={link.title} className="pl-11 justify-start text-wrap" variant="ghost" asChild>
            <Link href={"/dashboard" + link.href}>{link.title}</Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
