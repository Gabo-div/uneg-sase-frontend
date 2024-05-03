"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
	return (
		<main className="bg-pattern h-screen w-full dark:bg-zinc-900 dark:bg-none">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<Card className="w-[500px] px-8 py-6">
					<div className="flex flex-col items-center justify-center">
						<Image
							className="mb-4"
							src="/logo.png"
							alt="UNEG Logo"
							width={75}
							height={75}
						/>
						<h1 className="mb-8 text-center font-semibold">
							Sistema de Apoyo a los Servicios Estudiantiles
						</h1>

						<h2 className="mb-6 text-2xl font-bold">Iniciar Sesión</h2>

						<form className="mb-8 flex w-full flex-col gap-8">
							<div className="flex flex-col gap-2">
								<label className="font-bold" htmlFor="username">
									Usuario
								</label>
								<Input id="username" placeholder="Usuario" />
								<p className="text-sm text-slate-500">
									Por lo general, el usuario se compone de la inicial de su
									nombre, seguida de su apellido y los 3 últimos dígitos de su
									cédula.
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<label className="font-bold" htmlFor="password">
									Contraseña
								</label>
								<Input id="password" type="password" placeholder="Contraseña" />
							</div>
							<Button className="bg-primary-800 hover:bg-primary-800/90 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700/80">
								Ingresar
							</Button>
						</form>

						<div className="flex gap-3">
							<Link
								className="text-sm text-primary-500 hover:underline dark:text-primary-800"
								href="#"
							>
								¿Olvidó su contraseña?
							</Link>
							<Link
								className="text-sm text-primary-500 hover:underline dark:text-primary-800"
								href="#"
							>
								¿Olvidó su usuario?
							</Link>
						</div>
					</div>
				</Card>
			</div>
		</main>
	);
}
