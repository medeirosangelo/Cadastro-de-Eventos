import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    categoria: '',
    prioridade: '',
    dataVencimento: new Date(),
    quantidade: '',
    local: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    toast({
      title: "Item adicionado com sucesso!",
      description: "O novo item foi cadastrado no sistema.",
    });
    navigate('/success');
  };

  return (
    <MobileLayout showBack title="Adicionar Novo Item">
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Título</label>
            <Input
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              required
              placeholder="Digite o título do item"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Descrição</label>
            <Textarea
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              required
              placeholder="Descreva o item"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Categoria</label>
            <Select
              value={formData.categoria}
              onValueChange={(value) => setFormData({ ...formData, categoria: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="material">Material</SelectItem>
                <SelectItem value="equipamento">Equipamento</SelectItem>
                <SelectItem value="ferramenta">Ferramenta</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Prioridade</label>
            <Select
              value={formData.prioridade}
              onValueChange={(value) => setFormData({ ...formData, prioridade: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a prioridade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baixa">Baixa</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="urgente">Urgente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Data de Vencimento</label>
            <Calendar
              mode="single"
              selected={formData.dataVencimento}
              onSelect={(date) => date && setFormData({ ...formData, dataVencimento: date })}
              locale={ptBR}
              className="rounded-md border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Quantidade</label>
            <Input
              type="number"
              value={formData.quantidade}
              onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
              placeholder="Digite a quantidade"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Local</label>
            <Input
              value={formData.local}
              onChange={(e) => setFormData({ ...formData, local: e.target.value })}
              placeholder="Digite o local de armazenamento"
            />
          </div>

          <Button type="submit" className="w-full">
            Cadastrar Item
          </Button>
        </form>
      </div>
    </MobileLayout>
  );
};

export default Form;