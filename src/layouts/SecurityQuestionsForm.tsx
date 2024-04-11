"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const securityQuestions = [
	"Año de nacimiento de su madre",
	"Año de nacimiento de su padre",
	"Color favorito",
	"Heroe de la infancia",
	"Nombre de su primera mascota",
	"Nombre de su mejor amigo de la infancia",
];

const numberOfQuestions = 5;

export default function SecurityQuestionsForm() {
	const [selectValues, setSelectValues] = useState<(string | undefined)[]>(
		new Array(numberOfQuestions).fill(undefined),
	);

	const [inputValues, setInputValues] = useState<string[]>(
		new Array(numberOfQuestions).fill(""),
	);

	const handleSelectChange = (value: string, index: number) => {
		setSelectValues((current) => current.with(index, value));
	};

	const handleInputChange = (value: string, index: number) => {
		setInputValues((current) => current.with(index, value));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
			{Array.from({ length: numberOfQuestions }).map((_, i) => (
				<div key={i} className="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<p className="font-bold text-zinc-700 dark:text-zinc-100 lg:col-span-2">
						Pregunta {i + 1}
					</p>
					<Select
						value={selectValues[i]}
						onValueChange={(value) => handleSelectChange(value, i)}
					>
						<SelectTrigger>
							<SelectValue placeholder={"Pregunta " + (i + 1)} />
						</SelectTrigger>
						<SelectContent>
							{securityQuestions.map((question) => (
								<SelectItem
									disabled={selectValues.some((value) => value === question)}
									key={question}
									value={question}
								>
									{question}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Input
						placeholder={"Respuesta " + (i + 1)}
						disabled={!selectValues[i]}
						value={inputValues[i]}
						onChange={(e) => handleInputChange(e.target.value, i)}
					/>
				</div>
			))}

			<Button className="mt-4" type="submit">
				Guardar
			</Button>
		</form>
	);
}
