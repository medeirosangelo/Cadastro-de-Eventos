import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email });
    navigate('/home');
  };

  return (
    <MobileLayout>
      <div className="p-6 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center mb-8">Welcome Back</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-primary hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Login;