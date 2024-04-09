import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

export default function Payment() {
	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
			<Card className="flex flex-col lg:col-span-2">
				<h2 className="mb-4 font-semibold uppercase text-gray-600 dark:text-zinc-300">
					Saldo Actual
				</h2>
				<p className="text-2xl font-bold text-gray-700 dark:text-zinc-100">
					-170.00 Bs
				</p>
				<div className="mt-4 flex items-center">
					<p className="mr-1 text-sm text-gray-500 dark:text-zinc-400">
						Total a cancelar: 100.00 Bs.
					</p>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="link"
								className="h-auto w-auto p-0 text-sm text-blue-500"
							>
								Más información
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle className="mb-4">
									Detalles de conceptos a cancelar
								</DialogTitle>
								<DialogDescription>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Concepto</TableHead>
												<TableHead>Monto</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody className="text-black dark:text-zinc-300">
											<TableRow>
												<TableCell>Inscripción Estudiante Regular</TableCell>
												<TableCell className="text-nowrap">100 Bs</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Inscripción Segunda Carrera UNEG</TableCell>
												<TableCell className="text-nowrap">0 Bs</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>
													Inscripción Estudiante por Equivalencia de Institución
													Pública
												</TableCell>
												<TableCell className="text-nowrap">0 Bs</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>
													Inscripción Estudiante por Equivalencia de Institución
													Privada
												</TableCell>
												<TableCell className="text-nowrap">0 Bs</TableCell>
											</TableRow>
											<TableRow className="bg-gray-100 dark:bg-zinc-900">
												<TableCell>Total</TableCell>
												<TableCell className="text-nowrap">100 Bs</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
			</Card>

			<Card className="flex flex-col">
				<h2 className="mb-4 font-semibold uppercase text-gray-600 dark:text-zinc-300">
					Registrar Deposito Bancario
				</h2>
				<form className="flex flex-col gap-4">
					<Label>
						<p className="mb-2">Banco</p>
						<Select value="venezuela" defaultValue="venezuela">
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="venezuela">Venezuela</SelectItem>
							</SelectContent>
						</Select>
					</Label>

					<Label>
						<p className="mb-1">Número de Deposito</p>
						<p className="mb-2 text-xs text-gray-500">
							Últimos 6 dígitos de del número de deposito
						</p>
						<Input placeholder="000000" />
					</Label>

					<Label>
						<p className="mb-2">Número de Cedula</p>
						<p className="mb-2 text-xs text-gray-500">
							Número de cedula del titular de la cuenta
						</p>
						<Input placeholder="V00000000" />
					</Label>

					<Button className="self-end" type="submit">
						Registrar
					</Button>
				</form>
			</Card>

			<Card className="flex flex-col">
				<h2 className="mb-4 font-semibold uppercase text-gray-600 dark:text-zinc-300">
					Depositos registrados
				</h2>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Fecha</TableHead>
							<TableHead>Deposito</TableHead>
							<TableHead>Banco</TableHead>
							<TableHead>Monto</TableHead>
							<TableHead>Estado</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>22/07/2022</TableCell>
							<TableCell>000000</TableCell>
							<TableCell>Venezuela</TableCell>
							<TableCell>100 Bs</TableCell>
							<TableCell>Pagado</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
		</div>
	)
}
