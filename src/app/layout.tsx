import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Providers from "@/components/Providers";

import "moment/locale/es";
import moment from "moment";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

moment.locale("es");

export const metadata: Metadata = {
	title: "SASE",
	description: "Sistema de Apoyo a los Servicios Estudiantiles",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
