import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { adaptUser } from "@/adapters/user";
import { getStudentUser } from "@/services/user";
import DashboardDataField from "@/components/DashboardDataField";
import { translateGender, translateMaritalStatus } from "@/utils/user";

export default async function Dashboard() {
	const studentUser = adaptUser(await getStudentUser());

	const { personalData, academicData, contactData } = studentUser.data;

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<Card>
				<h2 className="text-sm font-semibold uppercase text-gray-600 dark:text-zinc-300">
					Información Personal
				</h2>
				<div className="flex flex-col gap-[1px] bg-gray-100 dark:bg-gray-800">
					<DashboardDataField title="Cedula">
						{personalData.ic}
					</DashboardDataField>
					<DashboardDataField title="Nombres">
						{personalData.name + " " + personalData.secondName}
					</DashboardDataField>
					<DashboardDataField title="Apellidos">
						{personalData.lastName + " " + personalData.secondLastName}
					</DashboardDataField>
					<DashboardDataField title="Sexo" asChild>
						{
							<Badge className="w-fit bg-primary-800">
								{translateGender(personalData.gender)}
							</Badge>
						}
					</DashboardDataField>
					<DashboardDataField title="Estado Civil">
						{translateMaritalStatus(personalData.maritalStatus)}
					</DashboardDataField>
					<DashboardDataField title="Fecha de Nacimiento">
						{personalData.birthDate
							.split("T")[0]
							.split("-")
							.reverse()
							.join("/")}
					</DashboardDataField>
					<DashboardDataField title="Lugar de Nacimiento">
						{personalData.birthPlace}
					</DashboardDataField>
				</div>
			</Card>
			<Card>
				<h2 className="text-sm font-semibold uppercase text-gray-600 dark:text-zinc-300">
					Información Académica
				</h2>
				<div className="flex flex-col gap-[1px] bg-gray-100 dark:bg-gray-800">
					<DashboardDataField title="Estatus" asChild>
						{
							<Badge className="w-fit bg-primary-800">
								{academicData.status === "active" ? "Activo" : "Inactivo"}
							</Badge>
						}
					</DashboardDataField>
					<DashboardDataField title="Sede">
						{academicData.campus}
					</DashboardDataField>
					<DashboardDataField title="Carrera">
						{academicData.career}
					</DashboardDataField>
					<DashboardDataField title="Expediente">
						{academicData.record}
					</DashboardDataField>
					<DashboardDataField title="UC Aprobados / Cursados">
						{`${academicData.approvedUc} / ${academicData.totalUc}`}
					</DashboardDataField>
					<DashboardDataField title="Nivel">
						{academicData.level}
					</DashboardDataField>
					<DashboardDataField title="Indice Academico">
						{academicData.index}
					</DashboardDataField>
				</div>
			</Card>
			<Card className="sm:col-span-2 lg:col-span-1">
				<h2 className="text-sm font-semibold uppercase text-gray-600 dark:text-zinc-300">
					Información de Contacto
				</h2>
				<div className="flex flex-col gap-[1px] bg-gray-100 dark:bg-gray-800">
					<DashboardDataField title="Correo">
						{contactData.email}
					</DashboardDataField>
					<DashboardDataField title="Correo Alternativo">
						{contactData.alternativeEmail}
					</DashboardDataField>
					<DashboardDataField title="Correo UNEG">
						{contactData.universityEmail}
					</DashboardDataField>
					<DashboardDataField title="Telefono">
						{contactData.phoneNumber}
					</DashboardDataField>
					<DashboardDataField title="Telefono Alternativo">
						{contactData.alternativePhoneNumber}
					</DashboardDataField>
					<DashboardDataField title="Dirección">
						{contactData.houseAddress}
					</DashboardDataField>
					<DashboardDataField title="Dirección de Trabajo">
						{contactData.workAddress}
					</DashboardDataField>
				</div>
			</Card>
		</div>
	);
}
