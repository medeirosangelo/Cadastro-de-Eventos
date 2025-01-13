/**
 * Componente Items
 * 
 * Lista todos os itens disponíveis no sistema, permitindo
 * navegação para detalhes e adição de novos itens.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Plus, Star, Clock } from 'lucide-react';

const Items = () => {
  const navigate = useNavigate();
  const items = [
    { 
      id: 1, 
      title: 'Projeto React', 
      description: 'Desenvolvimento de interface moderna',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      status: 'Em andamento'
    },
    { 
      id: 2, 
      title: 'App Mobile', 
      description: 'Aplicativo para iOS e Android',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      status: 'Concluído'
    },
    { 
      id: 3, 
      title: 'API REST', 
      description: 'Desenvolvimento de backend',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      status: 'Pendente'
    },
    { 
      id: 4, 
      title: 'Website', 
      description: 'Site institucional responsivo',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      status: 'Em revisão'
    },
  ];

  return (
    <MobileLayout showBack title="Projetos">
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white">
        <Button 
          className="w-full mb-6"
          onClick={() => navigate('/form')}
        >
          <Plus className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md"
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Items;