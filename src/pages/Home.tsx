import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { User, Settings, List, HelpCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
    { icon: <List className="w-6 h-6" />, label: 'Items', path: '/items' },
    { icon: <Settings className="w-6 h-6" />, label: 'Settings', path: '/settings' },
    { icon: <HelpCircle className="w-6 h-6" />, label: 'Help', path: '/help' },
  ];

  return (
    <MobileLayout title="Home">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Welcome!</h2>
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span className="mt-2">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Home;