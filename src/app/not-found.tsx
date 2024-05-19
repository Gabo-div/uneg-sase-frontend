import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-primary-800 dark:bg-zinc-950">
			<Card className="flex h-full w-full flex-col items-center justify-center p-14 md:h-auto md:w-auto md:max-w-xl">
				<h1 className="text-9xl font-bold">404</h1>
				<p className="mt-6">
					La página a la que intentas acceder no existe. Si crees que esto es un
					error, no dudes en contactarnos.
				</p>
				<Button asChild className="mt-6 w-full bg-primary-800">
					<Link href="/login">Volver al inicio</Link>
				</Button>
			</Card>
		</div>
	);
}
