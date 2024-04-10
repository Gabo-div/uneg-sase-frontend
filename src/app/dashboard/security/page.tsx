import { Card } from "@/components/ui/card";
import SecurityQuestionsForm from "@/layouts/SecurityQuestionsForm";

export default function Security() {
	return (
		<Card>
			<div className="mb-8">
				<h2 className="mb-2 text-xl font-bold text-zinc-700 dark:text-zinc-100">
					Actualizar preguntas de seguridad
				</h2>
				<p className="text-sm text-zinc-600 dark:text-zinc-400">
					Para mantener protegida tu cuenta, es crucial que actualices tus
					preguntas de seguridad regularmente. Recuerda siempre las respuestas
					que proporcionas, ya que serán esenciales para recuperar el acceso a
					tu cuenta en caso de que olvides tus credenciales.
				</p>
			</div>

			<SecurityQuestionsForm />
		</Card>
	);
}
