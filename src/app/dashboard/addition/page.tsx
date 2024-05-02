import { adaptAdditionData } from "@/adapters/inscription";
import AdditionForm from "@/layouts/AdditionForm";
import { getAdditionData } from "@/services/inscription";

export default async function Addition() {
	const inscriptionData = adaptAdditionData(await getAdditionData());

	return (
		<div>
			<h2 className="text-xl font-bold">Adición de asignaturas</h2>
			<p>
				Seleccione las secciones de las asignaturas que desea adicionar y
				presione el botón para confirmar.
			</p>
			<div className="mt-6">
				<AdditionForm additionData={inscriptionData} />
			</div>
		</div>
	);
}
