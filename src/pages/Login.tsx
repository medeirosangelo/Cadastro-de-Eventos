/**
 * Componente de Login
 * 
 * Este componente gerencia a tela de login do usuário, permitindo
 * acesso através de email e senha ou redes sociais.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/components/ui/use-toast";
import { Github, Facebook, Mail } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tentativa de login:', { email });
    toast({
      title: "Bem-vindo de volta!",
      description: "Login realizado com sucesso.",
    });
    navigate('/home');
  };

  return (
    <MobileLayout>
      <div className="p-6 flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Tech"
              className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Bem-vindo</h1>
            <p className="text-gray-600">Faça login para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Entrar
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => navigate('/home')}>
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" onClick={() => navigate('/home')}>
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem uma conta?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-primary hover:underline font-medium"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Login;