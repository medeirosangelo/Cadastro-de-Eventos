/**
 * Componente Home
 * 
 * Página inicial do aplicativo após o login, apresentando
 * as principais funcionalidades disponíveis para o usuário.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { User, Settings, List, HelpCircle, Bell, Calendar, Heart } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User className="w-6 h-6" />, label: 'Perfil', path: '/profile', color: 'bg-blue-100' },
    { icon: <List className="w-6 h-6" />, label: 'Itens', path: '/items', color: 'bg-green-100' },
    { icon: <Settings className="w-6 h-6" />, label: 'Configurações', path: '/settings', color: 'bg-purple-100' },
    { icon: <HelpCircle className="w-6 h-6" />, label: 'Ajuda', path: '/help', color: 'bg-yellow-100' },
    { icon: <Bell className="w-6 h-6" />, label: 'Notificações', path: '/profile', color: 'bg-pink-100' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Agenda', path: '/items', color: 'bg-orange-100' },
    { icon: <Heart className="w-6 h-6" />, label: 'Favoritos', path: '/profile', color: 'bg-red-100' },
  ];

  return (
    <MobileLayout title="Início">
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Olá, Usuário!</h2>
          <p className="text-gray-600">Bem-vindo de volta ao seu painel</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="outline"
              className={`h-24 flex flex-col items-center justify-center ${item.color} border-none hover:opacity-90`}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span className="mt-2 text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Atividades Recentes</h3>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">• Você atualizou seu perfil</div>
            <div className="text-sm text-gray-600">• Novo item adicionado</div>
            <div className="text-sm text-gray-600">• Configurações alteradas</div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Home;