import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { UseCases } from '@/components/UseCases';
import { Stats } from '@/components/Stats';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Login } from '@/components/Auth/Login';
import { SignUp } from '@/components/Auth/SignUp';
import { Dashboard } from '@/components/Dashboard/Dashboard';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

function AppContent() {
  const { user, loading } = useAuth();
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <p className="text-slate-600">Loading...</p>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  return (
    <>
      {authView === 'login' ? (
        <Login onSignUpClick={() => setAuthView('signup')} />
      ) : (
        <SignUp onLoginClick={() => setAuthView('login')} />
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
