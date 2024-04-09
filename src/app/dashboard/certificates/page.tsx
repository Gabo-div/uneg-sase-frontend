import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaFilePdf } from "react-icons/fa6"

export default function Certificates() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
			<Card className="flex h-[350px] flex-col items-center justify-between">
				<h2 className="text-balance text-center text-lg font-semibold uppercase text-gray-700 dark:text-zinc-300">
					Constancia de Estudios
				</h2>
				<FaFilePdf className="text-8xl" />
				<Button size="sm" variant="outline">
					Descargar
				</Button>
			</Card>

			<Card className="flex h-[350px] flex-col items-center justify-between">
				<h2 className="text-balance text-center text-lg font-semibold uppercase text-gray-700 dark:text-zinc-300">
					Constancia de Inscripción
				</h2>
				<FaFilePdf className="text-8xl" />
				<Button size="sm" variant="outline">
					Descargar
				</Button>
			</Card>

			<Card className="flex h-[350px] flex-col items-center justify-between">
				<h2 className="text-balance text-center text-lg font-semibold uppercase text-gray-700 dark:text-zinc-300">
					Constancia de Culminación
				</h2>
				<FaFilePdf className="text-8xl" />
				<Button size="sm" variant="outline">
					Descargar
				</Button>
			</Card>

			<Card className="flex h-[350px] flex-col items-center justify-between">
				<h2 className="text-balance text-center text-lg font-semibold uppercase text-gray-700 dark:text-zinc-300">
					Constancia de Inscripción de Pasantias
				</h2>
				<FaFilePdf className="text-8xl" />
				<Button size="sm" variant="outline">
					Descargar
				</Button>
			</Card>
		</div>
	)
}
