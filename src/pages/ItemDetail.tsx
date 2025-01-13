/**
 * Componente ItemDetail
 * 
 * Exibe os detalhes completos de um item específico,
 * permitindo edição e exclusão.
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Tag, Edit2, Trash2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const handleDelete = () => {
    toast({
      title: "Projeto excluído",
      description: "O projeto foi removido com sucesso.",
      variant: "destructive"
    });
  };

  return (
    <MobileLayout showBack title="Detalhes do Projeto">
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="space-y-6">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Projeto"
            className="w-full h-48 object-cover rounded-lg shadow-sm"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Projeto {id}</h2>
            <p className="text-gray-600 mt-2">
              Sistema completo desenvolvido com tecnologias modernas para atender
              às necessidades específicas do cliente.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <h3 className="font-semibold text-gray-800 mb-4">Informações do Projeto</h3>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Data de Início</p>
                <p className="text-sm">20 de Fevereiro, 2024</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Status</p>
                <p className="text-sm">Em Andamento</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Equipe</p>
                <p className="text-sm">5 membros</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Tag className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Categoria</p>
                <p className="text-sm">Desenvolvimento Web</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">
              <Edit2 className="w-4 h-4 mr-2" />
              Editar
            </Button>
            <Button variant="destructive" className="flex-1" onClick={handleDelete}>
              <Trash2 className="w-4 h-4 mr-2" />
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ItemDetail;