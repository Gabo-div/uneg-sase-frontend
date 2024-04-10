"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<TooltipProvider>{children}</TooltipProvider>
		</ThemeProvider>
	);
}
