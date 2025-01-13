import React from 'react';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  return (
    <MobileLayout showBack title="Profile">
      <div className="p-6">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
          <p className="text-muted-foreground">john@example.com</p>
        </div>
        
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Notifications
          </Button>
          <Button variant="destructive" className="w-full">
            Logout
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;