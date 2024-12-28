"use client";

import { useLogData } from "@/hooks/useLogData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogDetailDialog } from "@/components/shared/LogDetailDialog";

export default function SupportPortal() {
  const { logs } = useLogData();

  return (
    <Card className="w-full max-w-6xl mx-auto mt-4">
      <CardHeader>
        <CardTitle>Portal de Soporte | Dev</CardTitle>
        <CardDescription>Resumen de logs de errores</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tipo</TableHead>
              <TableHead>App</TableHead>
              <TableHead>Fuente</TableHead>
              <TableHead>Url</TableHead>
              <TableHead>Fecha y Hora</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.type}</TableCell>
                <TableCell>{log.app}</TableCell>
                <TableCell>{log.errorSource}</TableCell>
                <TableCell>{log.url}</TableCell>
                <TableCell>
                  {new Date(log.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{log.user_name}</TableCell>
                <TableCell>
                  <LogDetailDialog log={log} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
