import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast"

interface LogData {
  id: string;
  type: string;
  message: string;
  stack: string;
  file: string;
  lineNumber: string;
  timestamp: string;
  url: string;
  environment: string;
  browser: string;
  os: string;
  appVersion: string;
  app: string;
  user_uid: string;
  user_name: string;
  business_day_uid: string;
  business_dt: string;
  shift_uid: string;
  shift_number: number;
  business_unit_uid: string;
  business_unit_name: string;
  frontDetails: {
    componentName: string | null;
    params: string | null;
  };
  backendDetails: {
    type: string | null;
    endpoint: string | null;
    method: string | null;
    params: string | null;
    response: string | null;
    url: string | null;
  };
  errorSource: string;
}

interface LogDetailDialogProps {
  log: LogData;
}

export function LogDetailDialog({ log }: LogDetailDialogProps) {

  const { toast } = useToast()

  const copyJsonToClipboard = () => {
    const jsonString = JSON.stringify(log, null, 2)
    navigator.clipboard.writeText(jsonString).then(() => {
      toast({
        title: "JSON copiado",
        description: "El JSON del log ha sido copiado al portapapeles.",
      })
    }).catch((err) => {
      console.error('Error al copiar el JSON: ', err)
      toast({
        title: "Error",
        description: "No se pudo copiar el JSON. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ver detalles</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>
            {log.type}: {log.message}
          </DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Button onClick={copyJsonToClipboard}>
            Copiar JSON
          </Button>
        </div>
        <ScrollArea className="h-[60vh] pb-11">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campo</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Tipo</TableCell>
                <TableCell>{log.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mensaje</TableCell>
                <TableCell>{log.message}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marca de tiempo</TableCell>
                <TableCell>
                  {new Date(log.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Archivo</TableCell>
                <TableCell>{log.file}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Línea</TableCell>
                <TableCell>{log.lineNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">URL</TableCell>
                <TableCell>{log.url}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Entorno</TableCell>
                <TableCell>{log.environment}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Navegador</TableCell>
                <TableCell>{log.browser}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sistema Operativo</TableCell>
                <TableCell>{log.os}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Versión de la App</TableCell>
                <TableCell>{log.appVersion}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">UID del Usuario</TableCell>
                <TableCell>{log.user_uid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Usuario</TableCell>
                <TableCell>{log.user_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  UID de la Unidad de Negocio
                </TableCell>
                <TableCell>{log.business_unit_uid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Unidad de Negocio</TableCell>
                <TableCell>{log.business_unit_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  UID del Día de Negocio
                </TableCell>
                <TableCell>{log.business_day_uid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Fecha del Día de Negocio
                </TableCell>
                <TableCell>
                  {new Date(log.business_dt).toLocaleString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">UID del Turno</TableCell>
                <TableCell>{log.shift_uid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Número del Turno</TableCell>
                <TableCell>{log.shift_number}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Origen del Error</TableCell>
                <TableCell>{log.errorSource}</TableCell>
              </TableRow>
              {log.errorSource === "frontend" && (
                <TableRow>
                  <TableCell className="font-medium">
                    Detalles del Frontend
                  </TableCell>
                  <TableCell>
                    <pre className="whitespace-pre-wrap text-xs">
                      {JSON.stringify(log.frontDetails, null, 2)}
                    </pre>
                  </TableCell>
                </TableRow>
              )}
              {log.errorSource === "backend" && (
                <TableRow>
                  <TableCell className="font-medium">
                    Detalles del Backend
                  </TableCell>
                  <TableCell>
                    <pre className="whitespace-pre-wrap text-xs">
                      {JSON.stringify(log.backendDetails, null, 2)}
                    </pre>
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell className="font-medium">Traza de Pila</TableCell>
                <TableCell>
                  <pre className="whitespace-pre-wrap text-xs">{log.stack}</pre>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
