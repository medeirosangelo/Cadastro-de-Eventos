import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
  title?: string;
}

const MobileLayout = ({ children, showBack = false, title }: MobileLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {(showBack || title) && (
        <header className="sticky top-0 z-50 bg-white border-b px-4 py-3 flex items-center">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          {title && (
            <h1 className="text-lg font-semibold flex-1 text-center">
              {title}
            </h1>
          )}
        </header>
      )}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;