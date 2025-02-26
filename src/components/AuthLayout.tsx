
import React from 'react';
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/20">
      <Card className="w-full max-w-md p-6 space-y-6 animate-fade-up shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        </div>
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;
