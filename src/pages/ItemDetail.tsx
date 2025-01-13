/**
 * Componente ItemDetail
 * 
 * Exibe e permite editar os detalhes de um item específico.
 */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Tag, Edit2, Trash2, Save, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    titulo: `Projeto ${id}`,
    descricao: 'Sistema completo desenvolvido com tecnologias modernas para atender às necessidades específicas do cliente.',
    dataInicio: '20 de Fevereiro, 2024',
    status: 'Em Andamento',
    equipe: '5 membros',
    categoria: 'Desenvolvimento Web'
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Alterações salvas",
      description: "As alterações foram salvas com sucesso.",
    });
  };

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
            {isEditing ? (
              <Input
                value={formData.titulo}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                className="text-2xl font-bold mb-2"
                placeholder="Título do projeto"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800">{formData.titulo}</h2>
            )}
            
            {isEditing ? (
              <Textarea
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                placeholder="Descrição do projeto"
                className="mt-2"
              />
            ) : (
              <p className="text-gray-600 mt-2">{formData.descricao}</p>
            )}
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <h3 className="font-semibold text-gray-800 mb-4">Informações do Projeto</h3>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Data de Início</p>
                {isEditing ? (
                  <Input
                    value={formData.dataInicio}
                    onChange={(e) => setFormData({ ...formData, dataInicio: e.target.value })}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-sm">{formData.dataInicio}</p>
                )}
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Status</p>
                {isEditing ? (
                  <Input
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-sm">{formData.status}</p>
                )}
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Equipe</p>
                {isEditing ? (
                  <Input
                    value={formData.equipe}
                    onChange={(e) => setFormData({ ...formData, equipe: e.target.value })}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-sm">{formData.equipe}</p>
                )}
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <Tag className="w-5 h-5 mr-3" />
              <div>
                <p className="text-sm font-medium">Categoria</p>
                {isEditing ? (
                  <Input
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-sm">{formData.categoria}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            {isEditing ? (
              <>
                <Button variant="default" className="flex-1" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setIsEditing(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Cancelar
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="flex-1" onClick={() => setIsEditing(true)}>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Editar
                </Button>
                <Button variant="destructive" className="flex-1" onClick={handleDelete}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Excluir
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ItemDetail;