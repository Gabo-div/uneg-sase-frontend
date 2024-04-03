import { adaptRegisteredSubjects, adaptSubjects } from "@/adapters/subjects";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  getStudentRegisteredSubjects,
  getStudentSubjects,
} from "@/services/subjects";
import { groupSubjectsByCategory } from "@/utils/subject";

export default async function Courses() {
  const registeredSubjects = adaptRegisteredSubjects(
    await getStudentRegisteredSubjects(),
  );
  const allSubjects = adaptSubjects(await getStudentSubjects());

  const subjectCategory = groupSubjectsByCategory(allSubjects);

  return (
    <Tabs defaultValue="pending" className="w-full grid grid-cols-1">
      <TabsList className="flex mb-4 w-full relative overflow-auto justify-normal">
        <TabsTrigger value="registered" className="flex-1">
          Inscritas
        </TabsTrigger>
        <TabsTrigger value="pending" className="flex-1">
          Pendientes
        </TabsTrigger>
        <TabsTrigger value="approved" className="flex-1">
          Aprobadas
        </TabsTrigger>
        <TabsTrigger value="failed" className="flex-1">
          Reprobadas
        </TabsTrigger>
      </TabsList>
      <TabsContent value="registered">
        <Card className="p-4">
          <h2 className="mb-4 uppercase text-gray-700 text-sm font-medium dark:text-zinc-300">
            Materias Inscritas
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Materia</TableHead>
                <TableHead>Sección</TableHead>
                <TableHead>UCs</TableHead>
                <TableHead>Profesor</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {registeredSubjects.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.section}</TableCell>
                  <TableCell>{subject.uc}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {subject.teacher}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </TabsContent>
      <TabsContent value="pending">
        <Card className="p-4">
          <h2 className="mb-4 uppercase text-gray-700 text-sm font-medium dark:text-zinc-300">
            Materias Pendientes
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Materia</TableHead>
                <TableHead>UC</TableHead>
                <TableHead>Observaciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {subjectCategory.pending.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.uc}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </TabsContent>
      <TabsContent value="approved">
        <Card className="p-4">
          <h2 className="mb-4 uppercase text-gray-700 text-sm font-medium dark:text-zinc-300">
            Materias Aprobadas
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Materia</TableHead>
                <TableHead>UC</TableHead>
                <TableHead>Nota</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {subjectCategory.approved.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.uc}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </TabsContent>
      <TabsContent value="failed">
        <Card className="p-4">
          <h2 className="mb-4 uppercase text-gray-700 text-sm font-medium dark:text-zinc-300">
            Materias Reprobadas
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Materia</TableHead>
                <TableHead>UC</TableHead>
                <TableHead>Veces</TableHead>
                <TableHead>Pendiente</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {subjectCategory.failed.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.uc}</TableCell>
                  <TableCell>{subject.timesFailed}</TableCell>
                  <TableCell>{subject.approved ? "Si" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
