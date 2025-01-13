import React from 'react';
import MobileLayout from '../components/MobileLayout';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Settings = () => {
  return (
    <MobileLayout showBack title="Settings">
      <div className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Push Notifications</Label>
            <Switch id="notifications" />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="emails">Email Updates</Label>
            <Switch id="emails" />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="sound">Sound Effects</Label>
            <Switch id="sound" />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="vibration">Vibration</Label>
            <Switch id="vibration" />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Settings;