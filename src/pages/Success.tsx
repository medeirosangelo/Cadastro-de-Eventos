import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h1 className="text-2xl font-bold text-center mb-2">Success!</h1>
        <p className="text-center text-muted-foreground">
          Your action has been completed successfully.
          Redirecting you back...
        </p>
      </div>
    </MobileLayout>
  );
};

export default Success;