"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import usePasswordStrengthChecker from "@/hooks/usePasswordStrengthChecker";
import { FormEvent, useEffect, useState } from "react";

import { FaTimes, FaCheck } from "react-icons/fa";

export default function Password() {
	const { check, results } = usePasswordStrengthChecker({
		validators: [
			{
				message: "La contraseña debe tener entre 8 y 15 caracteres.",
				validator: (password: string) =>
					password.length >= 8 && password.length <= 15,
			},
			{
				message: "La contraseña debe tener al menos un número.",
				validator: (password: string) => /\d/.test(password),
			},
			{
				message: "La contraseña debe tener al menos una letra mayúscula.",
				validator: (password: string) => /[A-Z]/.test(password),
			},
			{
				message: "La contraseña debe tener al menos una letra minúscula.",
				validator: (password: string) => /[a-z]/.test(password),
			},
		],
	});

	const [password, setPassword] = useState("");

	useEffect(() => {
		check(password);
	}, [password]);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Card className="flex flex-col gap-4">
			<h2 className="mb-2 font-semibold uppercase text-gray-600">
				Cambiar contraseña
			</h2>
			<form className="flex flex-col gap-4" onSubmit={onSubmit}>
				<Label>
					<p className="mb-1">Nueva contraseña</p>
					<Input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Label>

				<div className="mb-4">
					<p className="mb-2 text-sm">
						La contraseña debe tener las siguientes características:
					</p>
					<ul className="space-y-1 text-xs">
						{results.map((result) => (
							<li key={result.message}>
								<div className="flex items-center">
									{result.valid ? (
										<FaCheck className="mr-2 text-green-500" />
									) : (
										<FaTimes className="mr-2 text-red-500" />
									)}
									<span>{result.message}</span>
								</div>
							</li>
						))}
					</ul>
				</div>

				<Label>
					<p className="mb-2">Confirmar nueva contraseña</p>
					<Input type="password" />
				</Label>

				<Button className="self-end" type="submit">
					Registrar
				</Button>
			</form>
		</Card>
	);
}
