import { adaptWithdrawData } from "@/adapters/inscription";
import { getWithdrawData } from "@/services/inscription";
import WithdrawForm from "@/layouts/WithdrawForm";

export default async function Witddraw() {
	const withdrawData = adaptWithdrawData(await getWithdrawData());

	return (
		<div>
			<h2 className="text-xl font-bold">Retiro de asignaturas</h2>
			<p>
				Seleccione las secciones de las asignaturas que desea retirar y presione
				el botón para confirmar.
			</p>
			<div className="mt-6">
				<WithdrawForm withdrawData={withdrawData} />
			</div>
		</div>
	);
}
