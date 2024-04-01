"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";
import { IoMdMenu } from "react-icons/io";
import ToggleTheme from "@/components/ToggleTheme";
import { FaTimes } from "react-icons/fa";

type Props = {
  name: string;
  menu: React.ReactNode;
  page: React.ReactNode;
}

const defaultOpenWidth = 1280; // tailwind xl breakpoint

export default function DashboardClientLayout({ name, menu, page }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= defaultOpenWidth) {
      setOpen(false);
    }
  }, [])

  const handleMenuClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName !== "A") {
      return;
    }

    if (window.innerWidth >= defaultOpenWidth) {
      return;
    }

    setOpen(false);
  }

  const headerHeightClass = "h-16"
  const headerSpaceClass = "pt-16"

  return (
    <div className="relative h-screen w-full">
      <div className={twJoin("fixed top-0 z-10 w-full h-16 bg-pattern px-8 flex items-center text-gray-300 dark:bg-none dark:bg-zinc-950 dark:border-b dark:border-zinc-800", headerHeightClass)}>
        <Button variant="link" className="p-0" onClick={() => setOpen(!open)}>
          <IoMdMenu className="text-2xl text-gray-300" />
        </Button>
        <h1 className="ml-2 font-bold uppercase">
          SASE
        </h1>
        <div className="ml-auto font-bold uppercase text-sm hidden md:block">
          {name}
        </div>
      </div>

      <div className="relative w-full h-full flex">
        <div data-open={open} className={twJoin("absolute top-0 left-0 h-full bg-black/50 z-10 overflow-hidden xl:static xl:z-0 data-[open=true]:w-full xl:data-[open=true]:w-[300px] data-[open=false]:w-0")}>
          <div className="flex flex-col bg-white h-full border-r dark:bg-zinc-950 dark:border-zinc-800 sm:w-[300px] xl:w-full">
            <div className={twJoin("hidden xl:block", headerSpaceClass)}></div>

            <div className="flex w-full px-4 h-16 items-center border-b dark:border-zinc-800 xl:hidden">
              <Button size="icon" variant="ghost" className="ml-auto text-zinc-400" onClick={() => setOpen(false)}>
                <FaTimes />
              </Button>
            </div>

            <ScrollArea className="w-full flex-1" onClick={handleMenuClick}>
              {menu}
            </ScrollArea>

            <div className="w-full px-4 py-4 border-t dark:border-zinc-800">
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
  );
}

