import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaFilePdf } from "react-icons/fa6";

export default function Certificates() {
  return (<div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <Card className="flex flex-col items-center justify-between h-[350px]">
      <h2 className="text-lg uppercase font-semibold text-gray-700 text-center text-balance dark:text-zinc-300">Constancia de Estudios</h2>
      <FaFilePdf className="text-8xl" />
      <Button size="sm" variant="outline">
        Descargar
      </Button>
    </Card>

    <Card className="flex flex-col items-center justify-between h-[350px]">
      <h2 className="text-lg uppercase font-semibold text-gray-700 text-center text-balance dark:text-zinc-300">Constancia de Inscripción</h2>
      <FaFilePdf className="text-8xl" />
      <Button size="sm" variant="outline">
        Descargar
      </Button>
    </Card>

    <Card className="flex flex-col items-center justify-between h-[350px]">
      <h2 className="text-lg uppercase font-semibold text-gray-700 text-center text-balance dark:text-zinc-300">Constancia de Culminación</h2>
      <FaFilePdf className="text-8xl" />
      <Button size="sm" variant="outline">
        Descargar
      </Button>
    </Card>

    <Card className="flex flex-col items-center justify-between h-[350px]">
      <h2 className="text-lg uppercase font-semibold text-gray-700 text-center text-balance dark:text-zinc-300">Constancia de Inscripción de Pasantias</h2>
      <FaFilePdf className="text-8xl" />
      <Button size="sm" variant="outline">
        Descargar
      </Button>
    </Card>

  </div>);
}
