import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';
import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Dados de exemplo para a agenda
  const eventos = [
    {
      id: 1,
      titulo: "Manutenção de Equipamentos",
      data: new Date(),
      prioridade: "alta"
    },
    {
      id: 2,
      titulo: "Inventário Mensal",
      data: new Date(Date.now() + 86400000), // Amanhã
      prioridade: "media"
    },
    {
      id: 3,
      titulo: "Revisão de Ferramentas",
      data: new Date(Date.now() + 172800000), // Depois de amanhã
      prioridade: "baixa"
    }
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
                  <Card key={evento.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{evento.titulo}</span>
                        <Badge className={getPrioridadeColor(evento.prioridade)}>
                          {evento.prioridade}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {format(evento.data, "dd 'de' MMMM", { locale: ptBR })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prioridade">
            <div className="space-y-4">
              {['alta', 'media', 'baixa'].map((prioridade) => (
                <div key={prioridade} className="space-y-2">
                  <h3 className="capitalize font-medium text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Prioridade {prioridade}
                  </h3>
                  {eventos
                    .filter(evento => evento.prioridade === prioridade)
                    .map(evento => (
                      <Card key={evento.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{evento.titulo}</span>
                            <div className="flex items-center text-sm text-gray-500">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {format(evento.data, "dd/MM", { locale: ptBR })}
                            </div>
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