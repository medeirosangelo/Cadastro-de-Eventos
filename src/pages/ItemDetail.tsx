import React from 'react';
import { useParams } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';

const ItemDetail = () => {
  const { id } = useParams();

  return (
    <MobileLayout showBack title="Item Details">
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Item {id}</h2>
            <p className="text-muted-foreground mt-2">
              Detailed description for item {id}. This is a longer text that provides
              more information about the selected item.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Additional Information</h3>
            <ul className="space-y-2">
              <li>Created: 2024-02-20</li>
              <li>Category: Example</li>
              <li>Status: Active</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">Edit</Button>
            <Button variant="destructive" className="flex-1">Delete</Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ItemDetail;