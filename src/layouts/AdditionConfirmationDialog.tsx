import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type SubjectToInscribe = {
	section: number;
	code: number;
	name: string;
	uc: number;
};

type Props = {
	children: JSX.Element;
	subjectsToInscribe: SubjectToInscribe[];
	availableUC: number;
	selectedUC: number;
};

export default function AdditionConfirmationDialog({
	children,
	subjectsToInscribe,
	availableUC,
	selectedUC,
}: Props) {
	const canInscribe = selectedUC <= availableUC;

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="mb-4">Confirmar adición</DialogTitle>
				</DialogHeader>
				{!canInscribe ? (
					<Alert
						variant="destructive"
						className="dark:bg-red-500/20 dark:text-zinc-200"
					>
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>UC Insuficientes</AlertTitle>
						<AlertDescription>
							No puedes adicionar {selectedUC} UC. Solo tienes {availableUC} UC
							disponibles.
						</AlertDescription>
					</Alert>
				) : null}
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Materia</TableHead>
							<TableHead>UC</TableHead>
							<TableHead>Sección</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="text-black dark:text-zinc-300">
						{subjectsToInscribe.map((subject) => (
							<TableRow key={subject.code}>
								<TableCell>{subject.name}</TableCell>
								<TableCell className="text-center">{subject.uc}</TableCell>
								<TableCell className="text-center">{subject.section}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<DialogFooter className="gap-2">
					<DialogClose asChild>
						<Button variant="outline">Cancelar</Button>
					</DialogClose>
					<Button disabled={!canInscribe}>Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
