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

type SubjectToInscribe = {
	section: number;
	code: number;
	name: string;
	uc: number;
};

type Props = {
	children: JSX.Element;
	subjectsToWithdraw: SubjectToInscribe[];
	selectedUC: number;
};

export default function WithdrawConfirmationDialog({
	children,
	subjectsToWithdraw,
}: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="mb-4">Confirmar retiro</DialogTitle>
				</DialogHeader>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Materia</TableHead>
							<TableHead>UC</TableHead>
							<TableHead>Sección</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="text-black dark:text-zinc-300">
						{subjectsToWithdraw.map((subject) => (
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
					<Button>Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
