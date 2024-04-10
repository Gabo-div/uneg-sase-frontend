import moment from "moment";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";

export default function Schedule() {
	const registrationDate = moment().add(0, "day");
	const registrationDateEnd = registrationDate.add(2, "hour");

	const isRegistrationPeriod = true;

	if (!isRegistrationPeriod) {
		return (
			<div className="flex w-full items-center justify-center">
				<Alert>
					<AlertTitle className="text-2xl text-zinc-800 dark:text-zinc-200">
						No es periodo de inscripción
					</AlertTitle>
					<AlertDescription className="text-zinc-500 dark:text-zinc-400">
						Mantente alerta a los medios informativos para confirmar cuándo
						podrás consultar tu calendario de inscripción.
					</AlertDescription>
				</Alert>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center">
			<h1 className="mb-1 text-center text-3xl font-bold md:mb-8">
				Horario de Inscripción
			</h1>
			<div className="grid w-full max-w-3xl grid-cols-1 gap-8">
				<p className="text-center text-zinc-500 dark:text-zinc-400">
					Su fecha de inscripción es el{" "}
					{registrationDate.format(
						"dddd, DD [de] MMMM [de] YYYY [a patir de las] hh:mm a [hasta las]",
					)}{" "}
					{registrationDateEnd.format("hh:mm a.")}{" "}
					<span className="text-center font-semibold text-red-500">
						Pasado su horario de inscripción deberá esperar hasta despues de las
						6:00 pm.
					</span>
				</p>
				<Calendar
					mode="single"
					selected={registrationDate.toDate()}
					className="w-full rounded-md border border-zinc-300 dark:border-zinc-700"
					classNames={{
						nav: "hidden",
						month: "w-full",
						head_cell: "flex-1",
						cell: "flex-1 dark:[&:has([aria-selected])]:bg-transparent [&:has([aria-selected])]:bg-transparent",
						day_selected: "text-zinc-100 dark:text-zinc-950 dark:bg-zinc-100",
					}}
				/>
			</div>
		</div>
	);
}
