import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    navigate('/success');
  };

  return (
    <MobileLayout showBack title="Create Account">
      <div className="p-6">
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </div>
    </MobileLayout>
  );
};

export default Register;