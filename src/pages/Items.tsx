import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';

const Items = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, title: 'Item 1', description: 'Description for item 1' },
    { id: 2, title: 'Item 2', description: 'Description for item 2' },
    { id: 3, title: 'Item 3', description: 'Description for item 3' },
    { id: 4, title: 'Item 4', description: 'Description for item 4' },
  ];

  return (
    <MobileLayout showBack title="Items">
      <div className="p-6">
        <Button 
          className="w-full mb-4"
          onClick={() => navigate('/form')}
        >
          Add New Item
        </Button>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg"
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Items;