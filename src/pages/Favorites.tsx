import React from 'react';
import MobileLayout from '../components/MobileLayout';
import { Heart, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigate = useNavigate();
  
  // Dados de exemplo para itens favoritos
  const favoriteItems = [
    {
      id: 1,
      titulo: 'Manutenção Preventiva',
      categoria: 'Equipamento',
      prioridade: 'alta',
      dataVencimento: '25/03/2024',
      imagem: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      id: 2,
      titulo: 'Revisão de Inventário',
      categoria: 'Material',
      prioridade: 'media',
      dataVencimento: '28/03/2024',
      imagem: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
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
    <MobileLayout showBack title="Favoritos">
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white">
        {favoriteItems.length === 0 ? (
          <div className="text-center py-10">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Nenhum item favorito ainda</p>
          </div>
        ) : (
          <div className="space-y-4">
            {favoriteItems.map((item) => (
              <Card 
                key={item.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/detail/${item.id}`)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium">
                      {item.titulo}
                    </CardTitle>
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline">{item.categoria}</Badge>
                    <Badge className={getPrioridadeColor(item.prioridade)}>
                      {item.prioridade}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.dataVencimento}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default Favorites;