import DashboardLinksSection from "@/layouts/DashboardLinksSection"

import { AiOutlineFileText, AiOutlineIdcard } from "react-icons/ai"
import { IoBriefcaseOutline, IoPersonOutline } from "react-icons/io5"
import { BsPencilSquare } from "react-icons/bs"
import { FaRegBuilding } from "react-icons/fa"

export default function DashboardMenu() {
	return (
		<div className="flex flex-col px-4 py-6">
			<div className="space-y-4">
				<DashboardLinksSection
					icon={<AiOutlineIdcard className="text-lg" />}
					title="Consultas"
					links={[
						{ title: "Datos", href: "/" },
						{ title: "Pensum", href: "/curriculum" },
						{ title: "Asignaturas", href: "/courses" },
						{
							title: "Constancias y Planillas",
							href: "/certificates",
						},
					]}
				/>
				<DashboardLinksSection
					icon={<FaRegBuilding className="text-lg" />}
					title="Inscripción"
					links={[
						{ title: "Cronograma", href: "/schedule" },
						{ title: "Registro de Deposito", href: "/payment" },
						{
							title: "Registro de Asignaturas",
							href: "/inscription",
						},
					]}
				/>

				<DashboardLinksSection
					icon={<IoPersonOutline className="text-lg" />}
					title="Usuario"
					links={[
						{ title: "Cambiar Contraseña", href: "/password" },
						{ title: "Preguntas De Seguridad", href: "/security" },
					]}
				/>
				<DashboardLinksSection
					icon={<BsPencilSquare className="text-lg" />}
					title="Evaluación Docente"
					links={[
						{ title: "Docentes", href: "#" },
						{ title: "Datos De Contacto", href: "#" },
					]}
				/>
				<DashboardLinksSection
					icon={<AiOutlineFileText className="text-lg" />}
					title="Solicitud"
					links={[
						{ title: "Solicitud de Grado", href: "#" },
						{
							title: "Culminación de Servicio Comunitario",
							href: "#",
						},
						{ title: "Carnet", href: "#" },
						{ title: "Taller de Servicio Comunitario", href: "#" },
						{ title: "Retiro de Semestre", href: "#" },
						{ title: "Reingreso", href: "#" },
						{ title: "Cambios", href: "#" },
					]}
				/>
				<DashboardLinksSection
					icon={<IoBriefcaseOutline className="text-lg" />}
					title="Pasantias"
					links={[
						{ title: "Carta de Presentación", href: "#" },
						{ title: "Carta de Postulación", href: "#" },
						{ title: "Plan de Trabajo", href: "#" },
						{ title: "Documentos y Formatos", href: "#" },
					]}
				/>
			</div>
		</div>
	)
}
