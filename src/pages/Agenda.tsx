import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';
import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, AlertTriangle, Calendar as CalendarIcon } from 'lucide-react';

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Dados de exemplo para a agenda
  const eventos = [
    {
      id: 1,
      titulo: "Manutenção de Equipamentos",
      data: new Date(),
      prioridade: "alta",
      descricao: "Realizar manutenção preventiva nos equipamentos do setor A"
    },
    {
      id: 2,
      titulo: "Inventário Mensal",
      data: new Date(),
      prioridade: "media",
      descricao: "Realizar contagem de estoque no almoxarifado"
    },
    // Adicione mais eventos conforme necessário
  ];

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case 'baixa': return 'bg-green-100 text-green-800';
      case 'media': return 'bg-yellow-100 text-yellow-800';
      case 'alta': return 'bg-red-100 text-red-800';
      case 'urgente': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MobileLayout showBack title="Agenda">
      <div className="p-4">
        <Tabs defaultValue="calendario" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calendario">Por Data</TabsTrigger>
            <TabsTrigger value="prioridade">Por Prioridade</TabsTrigger>
          </TabsList>

          <TabsContent value="calendario">
            <div className="space-y-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                locale={ptBR}
                className="rounded-md border"
              />

              <div className="space-y-2">
                {eventos.map((evento) => (
                  <Card key={evento.id}>
                    <CardHeader className="py-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-sm font-medium">
                          {evento.titulo}
                        </CardTitle>
                        <Badge variant="outline" className={getPrioridadeColor(evento.prioridade)}>
                          {evento.prioridade}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm text-gray-600">{evento.descricao}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {format(evento.data, "dd 'de' MMMM', às' HH:mm", { locale: ptBR })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prioridade">
            <div className="space-y-4">
              {['urgente', 'alta', 'media', 'baixa'].map((prioridade) => (
                <div key={prioridade} className="space-y-2">
                  <h3 className="capitalize font-medium text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Prioridade {prioridade}
                  </h3>
                  {eventos
                    .filter(evento => evento.prioridade === prioridade)
                    .map(evento => (
                      <Card key={evento.id}>
                        <CardHeader className="py-3">
                          <CardTitle className="text-sm font-medium">
                            {evento.titulo}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-sm text-gray-600">{evento.descricao}</p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            {format(evento.data, "dd 'de' MMMM", { locale: ptBR })}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default Agenda;