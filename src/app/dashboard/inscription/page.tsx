import { adaptInscriptionData } from "@/adapters/inscription";
import { getInscriptionData } from "@/services/inscription";
import InscriptionForm from "@/layouts/InscriptionForm";

export default async function Inscription() {
	const inscriptionData = adaptInscriptionData(await getInscriptionData());

	return (
		<div>
			<h2 className="text-xl font-bold">Inscripción de asignaturas</h2>
			<p>
				Seleccione las secciones de las asignaturas que desea inscribir y
				presione el botón para confirmar.
			</p>
			<div className="mt-6">
				<InscriptionForm inscriptionData={inscriptionData} />
			</div>
		</div>
	);
}
