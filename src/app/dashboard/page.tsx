import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { adaptUser } from "@/adapters/user";
import { getStudentUser } from "@/services/user";
import DashboardDataField from "@/components/DashboardDataField";
import { translateGender, translateMaritalStatus } from "@/utils/user";

export default async function Dashboard() {
  const studentUser = adaptUser(await getStudentUser());

  const { personalData, academicData, contactData } = studentUser.data;

  return <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <Card>
      <h2 className="uppercase text-sm text-gray-600 font-semibold dark:text-zinc-300">Información Personal</h2>
      <div className="flex flex-col gap-[1px] bg-gray-100 dark:bg-gray-800">
        <DashboardDataField title="Cedula" children={personalData.ic} />
        <DashboardDataField title="Nombres" children={personalData.name + " " + personalData.secondName} />
        <DashboardDataField title="Apellidos" children={personalData.lastName + " " + personalData.secondLastName} />
        <DashboardDataField title="Sexo" asChild children={<Badge className="bg-blue-800 w-fit">{translateGender(personalData.gender)}</Badge>} />
        <DashboardDataField title="Estado Civil" children={translateMaritalStatus(personalData.maritalStatus)} />
        <DashboardDataField title="Fecha de Nacimiento" children={personalData.birthDate.split("T")[0].split("-").reverse().join("/")} />
        <DashboardDataField title="Lugar de Nacimiento" children={personalData.birthPlace} />
      </div>
    </Card>
    <Card>
      <h2 className="uppercase text-sm text-gray-600 font-semibold dark:text-zinc-300">Información Académica</h2>
      <div className="flex flex-col gap-[1px] bg-gray-100 dark:bg-gray-800">
        <DashboardDataField title="Estatus" asChild children={<Badge className="bg-blue-800 w-fit">{academicData.status === "active" ? "Activo" : "Inactivo"}</Badge>} />
        <DashboardDataField title="Sede" children={academicData.campus} />
        <DashboardDataField title="Carrera" children={academicData.career} />
        <DashboardDataField title="Expediente" children={academicData.record} />
        <DashboardDataField title="UC Aprobados / Cursados" children={`${academicData.approvedUc} / ${academicData.totalUc}`} />
        <DashboardDataField title="Nivel" children={academicData.level} />
        <DashboardDataField title="Indice Academico" children={academicData.index} />
      </div>
    </Card>
    <Card className="sm:col-span-2 lg:col-span-1">
      <h2 className="uppercase text-sm text-gray-600 font-semibold dark:text-zinc-300">Información de Contacto</h2>
      <div className="flex flex-col gap-[1px] bg-gray-100 dark:bg-gray-800">
        <DashboardDataField title="Correo" children={contactData.email} />
        <DashboardDataField title="Correo Alternativo" children={contactData.alternativeEmail} />
        <DashboardDataField title="Correo UNEG" children={contactData.universityEmail} />
        <DashboardDataField title="Telefono" children={contactData.phoneNumber} />
        <DashboardDataField title="Telefono Alternativo" children={contactData.alternativePhoneNumber} />
        <DashboardDataField title="Dirección" children={contactData.houseAddress} />
        <DashboardDataField title="Dirección de Trabajo" children={contactData.workAddress} />
      </div>
    </Card>
  </div>;
}
