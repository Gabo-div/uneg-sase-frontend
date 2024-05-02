"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { twJoin } from "tailwind-merge";
import useSubjectForm from "@/hooks/useSubjectForm";
import { AdditionData } from "@/models/inscription";
import AdditionConfirmationDialog from "./AdditionConfirmationDialog";

type Props = {
	additionData: AdditionData;
};

export default function AdditionForm({ additionData }: Props) {
	const {
		sortedSubjects,
		selectedUC,
		selectedSubjects,
		subjectsToInscribe,
		resetSelectedSubjects,
		handleSubjectChange,
	} = useSubjectForm(additionData.availableSubjects);

	const [hideNotAvailable, setHideNotAvailable] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		resetSelectedSubjects();
	};

	const getSectionName = (section: number | undefined): string => {
		if (section === undefined) return "Sección";
		if (section === 0) return "No adicionar";
		return `Sección ${section}`;
	};

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={handleSubmit}
			onReset={handleReset}
		>
			<div className="font-bold">
				<ul>
					<li>UC Inscritas: {additionData.registeredUC}</li>
					<li>UC Disponibles: {additionData.availableUC}</li>
					<li>UC Seleccionadas: {selectedUC}</li>
				</ul>
			</div>

			<div>
				<label className="flex items-center space-x-2">
					<span>Ocultar asignaturas sin cupo</span>
					<Checkbox
						checked={hideNotAvailable}
						onCheckedChange={(checked) => {
							if (checked === "indeterminate") return;
							setHideNotAvailable(checked);
						}}
					/>
				</label>
			</div>

			<div className="space-y-2">
				{sortedSubjects.map((subject) => (
					<Card
						key={subject.code}
						className={twJoin(
							"space-y-2",
							subject.availableSections.length === 0 ? "opacity-50" : "",
							subject.availableSections.length === 0 && hideNotAvailable
								? "hidden"
								: "",
							selectedSubjects[subject.code]?.section
								? "border-zinc-500/30 bg-green-500/20 dark:border-green-500/20 dark:bg-green-500/10"
								: "",
						)}
					>
						<div className="flex items-center space-x-2">
							<div className="font-medium">{subject.name}</div>
							<div className="text-xs font-bold dark:text-zinc-400">
								UC: {subject.uc}
							</div>
						</div>
						<div>
							<Select
								value={selectedSubjects[subject.code]?.section.toString()}
								onValueChange={(value) =>
									handleSubjectChange({
										code: subject.code,
										section: parseInt(value),
										uc: subject.uc,
										name: subject.name,
									})
								}
								disabled={subject.availableSections.length === 0}
							>
								<SelectTrigger
									className={twJoin(
										"bg-transparent dark:bg-transparent",
										selectedSubjects[subject.code]?.section
											? "border-zinc-500/30 dark:border-green-500/20"
											: "",
									)}
								>
									<SelectValue
										placeholder={
											subject.availableSections.length > 0
												? "Sección"
												: "Sin cupo"
										}
									>
										{getSectionName(selectedSubjects[subject.code]?.section)}
									</SelectValue>
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="0">No adicionar</SelectItem>
									{subject.availableSections.map((section) => (
										<SelectItem
											key={subject.code + "-" + section}
											value={section.toString()}
										>
											Sección {section}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</Card>
				))}
			</div>
			<div className="ml-auto space-x-2">
				<Button type="reset" variant="outline">
					Limpiar
				</Button>
				<AdditionConfirmationDialog
					subjectsToInscribe={subjectsToInscribe}
					availableUC={additionData.availableUC}
					selectedUC={selectedUC}
				>
					<Button disabled={subjectsToInscribe.length === 0}>Continuar</Button>
				</AdditionConfirmationDialog>
			</div>
		</form>
	);
}
