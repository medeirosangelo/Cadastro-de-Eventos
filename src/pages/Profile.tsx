/**
 * Componente Profile
 * 
 * Gerencia as informações do perfil do usuário, permitindo
 * visualização e edição dos dados pessoais.
 */
import React from 'react';
import MobileLayout from '../components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Phone, MapPin, Camera, LogOut } from 'lucide-react';

const Profile = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Até logo!",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <MobileLayout showBack title="Perfil">
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold">João Paulo</h2>
          <p className="text-muted-foreground">Desenvolvedor Full Stack</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Nome Completo</p>
                <p className="text-sm text-gray-600">João Paulo Silva</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-gray-600">joao@exemplo.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-gray-600">(11) 98765-4321</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Localização</p>
                <p className="text-sm text-gray-600">São Paulo, Brasil</p>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Editar Perfil
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" />
            Alterar Email
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <Phone className="mr-2 h-4 w-4" />
            Alterar Telefone
          </Button>

          <Button variant="destructive" className="w-full" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;