import { useState } from 'react';
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

type ViewState = 'landing' | 'login' | 'signup';

function AppContent() {
  const { user, loading } = useAuth();
  const [view, setView] = useState<ViewState>('landing');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <p className="text-ink">Loading...</p>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  if (view === 'login') {
    return <Login onSignUpClick={() => setView('signup')} onBackClick={() => setView('landing')} />;
  }

  if (view === 'signup') {
    return <SignUp onLoginClick={() => setView('login')} onBackClick={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-primary-200 selection:text-ink">
      <Header onLoginClick={() => setView('login')} />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
